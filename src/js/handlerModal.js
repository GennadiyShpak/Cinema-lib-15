onCheckLocalStor('watched');
onCheckLocalStor('queue');
function onCheckLocalStor(type) {
  const store = localStorage.getItem(type);
  if (!store) {
    localStorage.setItem(type, JSON.stringify([]));
  }
}
//HANDLER MODAL
import refs from './refs';
import MovieService from '../js/apiService';
refs.filmGalery.addEventListener('click', onCardFilmClick);
refs.modal.addEventListener('click', onBackdropClick);

const getFilmServ = new MovieService();
const modElems = {
  img: refs.modal.querySelector('.card-img > img'),
  title: refs.modal.querySelector('.card-title'),
  rating: refs.modal.querySelector('.rating-data'),
  descript: refs.modal.querySelector('.descript-text'),
};
const modalBtns = {
  allBtns: document.querySelector('.card-btns'),
  queue: document.querySelector('.btn-queue'),
  watched: document.querySelector('.btn-watched'),
};
let data = null;
async function onCardFilmClick(e) {
  if (!e.target.closest('.film__item')) return;
  const current = e.target.closest('.film__item');
  data = await getFilmServ.fetchMovieById(current.dataset.id);
  // console.log('data:', data);
  onUpdateModal(data);
  //----
  const localW = JSON.parse(localStorage.getItem('watched'));
  const localQ = JSON.parse(localStorage.getItem('queue'));
  readLocalStor(localW, 'watched');
  readLocalStor(localQ, 'queue');
  //----
  refs.modal.classList.remove('is-hidden');
  window.addEventListener('keydown', onEscPress);
  modalBtns.allBtns.addEventListener('click', onButtonsClick);
}
function readLocalStor(localValue, type) {
  if (localValue.length) {
    const film = localValue.find(el => el.id == data.id);

    if (film) {
      modalBtns[type].textContent = film.button.text;
      modalBtns[type].classList.add('is-active');
    } else {
      modalBtns[type].textContent = `add to ${type}`;
      modalBtns[type].classList.remove('is-active');
    }
  } else {
    modalBtns[type].textContent = `add to ${type}`;
    modalBtns[type].classList.remove('is-active');
  }
}
function onUpdateModal({
  poster_path,
  title,
  vote_average,
  vote_count,
  popularity,
  original_title,
  genres,
  overview,
}) {
  modElems.img.src = `https://image.tmdb.org/t/p/w400${poster_path}`;
  modElems.title.textContent = title;
  modElems.rating.children[0].firstElementChild.textContent = vote_average;
  modElems.rating.children[0].lastElementChild.textContent = vote_count;
  modElems.rating.children[1].textContent = popularity;
  modElems.rating.children[2].textContent = original_title;
  modElems.rating.children[3].textContent = genres[0].name;
  modElems.descript.textContent = overview;
}

function onCloseModal() {
  refs.modal.classList.add('is-hidden');
  window.removeEventListener('keydown', onEscPress);
  modalBtns.allBtns.removeEventListener('click', onButtonsClick);
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

//------
modalBtns.allBtns.addEventListener('click', onButtonsClick);
function onButtonsClick(e) {
  if (!e.target.classList.contains('button')) return;
  e.target.classList.toggle('is-active');
  if (e.target.classList.contains('is-active')) {
    e.target.textContent = `delete from ${e.target.dataset.id}`;
  } else {
    e.target.textContent = `add to ${e.target.dataset.id}`;
  }

  data.button = {
    type: e.target.dataset.id,
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
