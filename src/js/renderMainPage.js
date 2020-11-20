import MovieService from '../js/apiService';
import handlebars from '../templates/main-page.hbs';
import mainHeader from '../templates/mainPageHeader.hbs';
import myLibHeader from '../templates/libraryHeader.hbs';
import refs from '../js/refs';
import onSearch from './renderSearchFilm';
import '../images/film.svg';
import { randerGenreFilm } from '../js/renderSearchFilm';
import makeLibrayWatched from './renderMyLibrary';

const mainPageMarkupHandler = new MovieService();

export default async function onLoadPage() {
  refs.header.innerHTML = '';
  refs.header.insertAdjacentHTML('beforeend', mainHeader());
  refs.header.classList.remove('main__background--mylib');
  refs.header.classList.add('main__background');

  refs.searchInput = document.querySelector('.header__form--input');
  refs.searchForm = document.querySelector('.header__form');
  refs.logo = document.querySelector('.header__logo');
  refs.nav = document.querySelector('.nav__ul');

  refs.searchForm.addEventListener('submit', onSearch);
  addListeners();

  const films = await mainPageMarkupHandler.fetchMovies();
  mainPageHandler(films.results);
  randerGenreFilm();
}

async function mainPageHandler(films) {
  const markup = handlebars(films);
  refs.filmGalery.innerHTML = markup;
}

function onNavClick(evt) {
  removeListeners();
  if (evt.target.textContent === 'Home') {
    onLoadPage();
    refs.filmGalery.classList.remove('film__watched');
  } else if (evt.target.textContent === 'my library') {
    renderMyLibPage();
    refs.filmGalery.classList.add('film__watched');
    makeLibrayWatched();
  }
}

function renderMyLibPage() {
  refs.header.innerHTML = '';
  refs.header.insertAdjacentHTML('beforeend', myLibHeader());
  refs.header.classList.remove('main__background');
  refs.header.classList.add('main__background--mylib');
  refs.filmGalery.innerHTML = '';

  refs.logo = document.querySelector('.header__logo');
  refs.nav = document.querySelector('.nav__ul');

  addListeners();
}

function addListeners() {
  refs.logo.addEventListener('click', onLoadPage);
  refs.nav.addEventListener('click', onNavClick);
}

function removeListeners() {
  refs.nav.removeEventListener('click', onNavClick);
  refs.logo.removeEventListener('click', onLoadPage);
}
