onCheckLocalStor('watched');
onCheckLocalStor('queue');
function onCheckLocalStor(type) {
  const store = localStorage.getItem(type);
  if (!store) {
    localStorage.setItem(type, JSON.stringify([]));
  }
}
const modal = document.querySelector('.load__backdrop');
// modal.addEventListener('click', e => {
//   if (e.currentTarget === e.target) {
//     modal.classList.add('is-hidden');
//   }
// });
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

  data = await getFilmServ.fetchMovieById(current.dataset.id);

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
  modalImg.onload = modalImg.onerror = () => {
    modal.classList.add('is-hidden');
    refs.modal.classList.remove('is-hidden');
    window.addEventListener('keydown', onEscPress);
    refs.modal.addEventListener('click', onBackdropClick);
    modalBtns.addEventListener('click', onButtonsClick);
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
