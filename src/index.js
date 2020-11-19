import "./styles/index.scss";
import "material-design-icons/iconfont/material-icons.css";
import "./js/script";
import onLoadPage from './js/renderMainPage'
import filmCardTamplate from './templates/filmCardTamplate.hbs';

onLoadPage();

//-------------Для Вовы--------------//

import MovieService from './js/apiService'
import handlebars from "./templates/main-page.hbs";
import refs from "./js/refs";

//refs.searchBtn.addEventListener('click',onSearch)
refs.searchForm.addEventListener('submit', onSearch)

const searchServices = new MovieService();

async function onSearch(e) {
    e.preventDefault();
    refs.filmGalery.innerHTML = '';
    const form = e.currentTarget;
    searchServices.query = refs.searchInput.value;
    if (searchServices.query==='') {
      return
    }

    try { 
        console.log ('Приступаем к поиску');
        const films = await searchServices.searchMovie();
        console.log("onSearch -> films", films)
        if(films.length===0)
        {
          console.log('За вашим запросом ничего не найдено');
        }
        await renderGalleryFilms(films.results);
        rangerGenreFilm();
      console.log(films.results);
    }
    catch(err) {
    console.log("onSearch -> err", err);
    }
  };

  function renderGalleryFilms(films) {
    const markup = filmCardTamplate(films);
    refs.filmGalery.innerHTML = markup;
  }

  async function rangerGenreFilm(){
    const filmItemRefs=document.querySelectorAll('.film__item');
    console.log("rangerGenreFilm -> filmItemRefs", filmItemRefs)
    
    Array.from(filmItemRefs).forEach(async filmItemRef => {
      const spanRefs=filmItemRef.querySelector('.film__item--genre');
      const genere = await searchServices.getGenre(filmItemRef.dataset.id);
      spanRefs.textContent=genere;
    });
  }

 /* async function getDataFilm(films){
    const dataArray = await films.results.map(async film => {
      const returnObject ={
                            reliseYear: film.release_date,
                            genre: await searchServices.getGenre(film.id),
                            title: film.title,
                            backdrop_path: film.backdrop_path,
                          }
      return returnObject;
    });
    return dataArray; 
  }*/

  //async function mainPageHandler(films) {
    //       const markup = filmCardTamplate(films);
    //       refs.filmGalery.innerHTML = markup;
  
  //   Это функция которая делает разметку сделать копию файла main-page и работать в нем
  //   async function mainPageHandler(films) {
  //       const markup = filmCardTamplate(films);
  //       refs.filmGalery.innerHTML = markup;
  // };