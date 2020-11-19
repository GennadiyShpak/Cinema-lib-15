import "./styles/index.scss";
import "material-design-icons/iconfont/material-icons.css";
import "./js/script";
import onLoadPage from './js/renderMainPage'



onLoadPage();


//-------------Для Вовы--------------//

import MovieService from './js/apiService'
import handlebars from "./templates/main-page.hbs";
import refs from "./js/refs";

refs.searchBtn.addEventListener('click',onSearch)

const searchServices = new MovieService();


async function onSearch(e) {
    e.preventDefault();
    const form = e.currentTarget;
    searchServices.query = refs.searchInput.value;
    if (searchServices.query==='') {
      return
    }

    try { 
        const films = await searchServices.searchMovie()
        console.log(films.results);
        mainPageHandler(films.results);
    }
    catch {
    console.log('aaa');
    }
  };
  
//   Это функция которая делает разметку сделать копию файла main-page и работать в нем
//   async function mainPageHandler(films) {
//       const markup = handlebars(films);
//       refs.filmGalery.innerHTML = markup;
// };