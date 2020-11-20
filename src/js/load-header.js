// refs.header.innerHTML='';
// refs.header.insertAdjacentHTML('beforeend', mainHeader());
// refs.header.classList.remove('main__background--mylib');
// refs.header.classList.add('main__background');

// refs.searchInput = document.querySelector('.header__form--input');
// refs.searchForm = document.querySelector('.header__form');
// refs.logo= document.querySelector('.header__logo');
// refs.nav=document.querySelector('.nav__ul');

// refs.searchForm.addEventListener('submit', onSearch);
// function onNavClick (evt){
//     removeListeners()
//     if(evt.target.textContent==='Home')
//     {
//         onLoadPage();
//     }else if(evt.target.textContent==='my library'){
//         renderMyLibPage();
//     }
// }

// function renderMyLibPage(){
//     refs.header.innerHTML='';
//     refs.header.insertAdjacentHTML('beforeend',myLibHeader());
//     refs.header.classList.remove('main__background');
//     refs.header.classList.add('main__background--mylib');
//     refs.filmGalery.innerHTML='';
    
//     refs.logo=document.querySelector('.header__logo');
//     refs.nav=document.querySelector('.nav__ul');

//     addListeners();
// }

// function addListeners(){

//     refs.logo.addEventListener('click', onLoadPage);
//     refs.nav.addEventListener('click', onNavClick);
// }

// function removeListeners(){
//     refs.nav.removeEventListener('click',onNavClick);
//     refs.logo.removeEventListener('click', onLoadPage);
// }
// addListeners();
// // randerGenreFilm();

// import mainHeader from '../templates/mainPageHeader.hbs';
// import myLibHeader from '../templates/libraryHeader.hbs';
// import onSearch from './renderSearchFilm';
// import film from '../images/film.svg';
// import {randerGenreFilm} from '../js/renderSearchFilm';