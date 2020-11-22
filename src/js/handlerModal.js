onCheckLocalStor('watched');
onCheckLocalStor('queue');
function onCheckLocalStor(type) {
  const store = localStorage.getItem(type);
  if (!store) {
    localStorage.setItem(type, JSON.stringify([]));
  }
}
const modal = document.querySelector('.load__backdrop');
modal.addEventListener('click', e => {
  if (e.currentTarget === e.target) {
    modal.classList.add('is-hidden');
  }
});
//HANDLER MODAL
import refs from './refs';
import modalMarkup from '../templates/modal-markup.hbs';
import MovieService from '../js/apiService';

refs.filmGalery.addEventListener('click', onCardFilmClick);

const getFilmServ = new MovieService();

let data = null;

async function onCardFilmClick(e) {
  if (!e.target.closest('.film__item')) return;
  modal.classList.remove('is-hidden');
  modal.innerHTML = '<p class = "load-text">loading...</p>';
  const current = e.target.closest('.film__item');
  try {
    data = await getFilmServ.fetchMovieById(current.dataset.id);
    if (!data) {
      modal.classList.add('is-hidden');
      return;
    }
    if (!data.poster_path) {
      data.poster_path = '/k2oBuTKSP0wALtOzH04dCqDfzYQ.jpg';
    }
  } catch (error) {
    console.log(error);
  }

  data.genresStr = data.genres.reduce((acc, el) => acc + el.name + ', ', '');

  const localW = JSON.parse(localStorage.getItem('watched'));
  const localQ = JSON.parse(localStorage.getItem('queue'));
  ///---------------------
  data.buttons = {};

  readLocalStor(localQ, 'queue');
  readLocalStor(localW, 'watched');

  refs.modal.innerHTML = modalMarkup(data);
  const modalBtns = document.querySelector('.card-btns');
  const modalImg = document.querySelector('.card-img > img');
  const modalCloseBtn = document.querySelector(
    '.modal__wrapper .modal_btn-close ',
  );
  modalImg.onload = modalImg.onerror = () => {
    modal.classList.add('is-hidden');
    refs.modal.classList.remove('is-hidden');
    window.addEventListener('keydown', onEscPress);
    refs.modal.addEventListener('click', onBackdropClick);
    modalBtns.addEventListener('click', onButtonsClick);
    modalCloseBtn.addEventListener('click', onCloseModal);
  };
}
function readLocalStor(localValue, type) {
  if (localValue.length) {
    const film = localValue.find(el => el.id == data.id);
    if (film) {
      data.buttons[type] = {
        text: film.buttons[type].text,
        css: film.buttons[type].css,
      };
    } else {
      data.buttons[type] = {
        text: `add to ${type}`,
        css: ``,
      };
    }
  } else {
    data.buttons[type] = {
      text: `add to ${type}`,
      css: ``,
    };
  }
}

function onCloseModal() {
  refs.modal.classList.add('is-hidden');
  window.removeEventListener('keydown', onEscPress);
  document
    .querySelector('.card-btns')
    .removeEventListener('click', onButtonsClick);
  // modalCloseBtn.removeEventListener('click', onCloseModal);
}

function onEscPress(e) {
  if (e.code == 'Escape') {
    onCloseModal();
  }
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}
//----------------
function onButtonsClick(e) {
  if (!e.target.classList.contains('button')) return;
  e.target.classList.toggle('is-active');
  if (e.target.classList.contains('is-active')) {
    e.target.textContent = `delete from ${e.target.dataset.id}`;
  } else {
    e.target.textContent = `add to ${e.target.dataset.id}`;
  }

  data.buttons[e.target.dataset.id] = {
    text: `delete from ${e.target.dataset.id}`,
    css: 'is-active',
  };
  onLocalStorJob(e);
  // document.querySelector('.header').classList.contains('main__background--mylib')
  // if (refs.filmGalery.classList.contains('film__watched')) {
  if (
    document
      .querySelector('.header')
      .classList.contains('main__background--mylib')
  ) {
    const currentTab = document.querySelector(
      '.main__background--mylib .button-active',
    );
    if (e.target.dataset.id == currentTab.dataset.id) {
      // console.log('tyt');
      const info = JSON.parse(localStorage.getItem(e.target.dataset.id));
      makeMarkup(info);
    }
  }
}
//----
import templates from '../templates/main-page.hbs';
function makeMarkup(data) {
  const watchedList = document.querySelector('.film__watched');

  if (data.length === 0) {
    watchedList.innerHTML = '';
    refs.wrapper.innerHTML =
      '<p class="glow">List is empty. Add some films </p>';
    return;
  }
  refs.wrapper.innerHTML = '';
  watchedList.innerHTML = templates(data);
}
//-------
function onLocalStorJob(e) {
  const localData = JSON.parse(localStorage.getItem(e.target.dataset.id));
  const filmId = localData.map(el => el.id).indexOf(data.id);
  if (filmId >= 0) {
    localData.splice(filmId, 1);
    localStorage.setItem(e.target.dataset.id, JSON.stringify(localData));
  } else {
    localData.push(data);
    localStorage.setItem(e.target.dataset.id, JSON.stringify(localData));
  }
}
