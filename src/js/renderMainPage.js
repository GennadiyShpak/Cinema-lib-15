import MovieService from '../js/apiService'
import handlebars from "../templates/main-page.hbs";
import mainHeader from '../templates/mainPageHeader.hbs';
import myLibHeader from '../templates/libraryHeader.hbs';
import refs from "../js/refs";
import onSearch from './renderSearchFilm';
import '../images/film.svg';

const mainPageMarkupHandler = new MovieService();

export default async function onLoadPage() {
    refs.header.innerHTML='';
    refs.header.insertAdjacentHTML('beforeend', mainHeader());
    refs.header.classList.remove('main__background--mylib');
    refs.header.classList.add('main__background');

    refs.searchInput = document.querySelector('.header__form--input');
    refs.searchForm = document.querySelector('.header__form');
    refs.logo= document.querySelector('.header__logo');
    refs.nav=document.querySelector('.nav__ul');

    refs.searchForm.addEventListener('submit', onSearch);
    refs.logo.addEventListener('click', onLoadPage);
    refs.nav.addEventListener('click', onNavClick);

    const films = await mainPageMarkupHandler.fetchMovies();
    mainPageHandler(films.results);
}

  async function mainPageHandler(films) {
      const markup = handlebars(films);
      refs.filmGalery.innerHTML = markup;
};

function onNavClick (evt){
    console.log(evt.target.textContent);
    refs.nav.removeEventListener('click',onNavClick);
    refs.logo.removeEventListener('click', onLoadPage);
    if(evt.target.textContent==='Home')
    {
        onLoadPage();
    }else if(evt.target.textContent==='my library'){
        renderMyLibPage();
    }
}

function renderMyLibPage(){
    refs.header.innerHTML='';
    refs.header.insertAdjacentHTML('beforeend',myLibHeader());
    refs.header.classList.remove('main__background');
    refs.header.classList.add('main__background--mylib');
    refs.filmGalery.innerHTML='';
    
    refs.logo=document.querySelector('.header__logo');
    refs.nav=document.querySelector('.nav__ul');

    refs.logo.addEventListener('click', onLoadPage);
    refs.nav.addEventListener('click', onNavClick);
}