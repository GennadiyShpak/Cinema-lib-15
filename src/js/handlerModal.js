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

async function onCardFilmClick(e) {
  if (!e.target.closest('.film__item')) return;
  const current = e.target.closest('.film__item');
  const data = await getFilmServ.fetchMovieById(current.dataset.id);
  onUpdateModal(data);
  //---
  refs.modal.classList.remove('is-hidden');
  window.addEventListener('keydown', onEscPress);
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
