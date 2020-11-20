import MovieService from '../js/apiService'
import handlebars from "../templates/main-page.hbs";
import refs from "../js/refs";

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const mainPageMarkupHandler = new MovieService();
const container = document.getElementById('pagination');

export default async function onLoadPage() {
    const films = await mainPageMarkupHandler.fetchMovies()
    console.log(films);
    mainPageHandler(films.results);
    
}

  async function mainPageHandler(films) {
      const markup = handlebars(films);
      refs.filmGalery.innerHTML = markup;
};

const pagination = new Pagination(document.getElementById('pagination'), {
  totalItems: `1000`,
  itemsPerPage: `20`,
  visiblePages: 5,
  centerAlign: true,
  // template: {
  //     page: '<a href="#" class="tui-page-btn not-active-btn pagination__btn">{{page}}</a>',
  //     currentPage: '<strong class="tui-page-btn tui-is-selected pagination__btn">{{page}}</strong>',
  //     moveButton:
  //       '<a href="#" class="tui-page-btn tui-{{type}}">' +
  //         '<span class="tui-ico-{{type}}">{{type}}</span>' +
  //       '</a>',
  //     disabledMoveButton:
  //       '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
  //         '<span class="tui-ico-{{type}}">{{type}}</span>' +
  //       '</span>',
  //     moreButton:
  //       '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
  //         '<span class="tui-ico-ellip">...</span>' +
  //       '</a>'
  //   }
});
container.addEventListener('click', onBtnClickHandler)


function onBtnClickHandler (e) {
  const a = document.querySelector('.tui-is-selected')
  if (!e.target.classList.contains('tui-page-btn')) {
    return
  } else {
  
    mainPageMarkupHandler.page = a.textContent;
    onLoadPage()
  }
}