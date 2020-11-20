import '../images/film.svg';
import {onSearch, randerGenreFilm } from '../js/renderSearchFilm';
import makeLibrayWatched from './renderMyLibrary';
import mainHeader from '../templates/mainPageHeader.hbs';
import myLibHeader from '../templates/libraryHeader.hbs';
import refs from './refs';





export default function renderHederHandler () {
    refs.header.innerHTML = '';
    refs.header.insertAdjacentHTML('beforeend', mainHeader());
    refs.header.classList.remove('main__background--mylib');
    refs.header.classList.add('main__background');
    
    const searchInput = document.querySelector('.header__form--input');
    const searchForm = document.querySelector('.header__form');
    const logo = document.querySelector('.header__logo');
    const nav = document.querySelector('.nav__ul');
    searchForm.addEventListener('submit', onSearch);
    console.log(searchForm);
}


// randerGenreFilm();


// searchForm.addEventListener('submit', onSearch);
// addListeners();


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
  