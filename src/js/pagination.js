// import MovieService from '../js/apiService'
// import handlebars from "../templates/main-page.hbs";
// import refs from "../js/refs";



// const mainPagenationMarkupHandler = new MovieService();
// const container = document.getElementById('pagination');


// export default async function onLoadPage() {

//     const films = await mainPageMarkupHandler.fetchMovies()
//     console.log(films);
//     mainPageHandler(films.results);


   
//   async function mainPageHandler(films) {
//       const markup = handlebars(films);
//       refs.filmGalery.innerHTML = markup;
// };

// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';


// // const pagination = new Pagination(container,);

// // const options = {
// //     totalItems: 1000,
// //     itemsPerPage: 20,
// //     visiblePages: 10,
// //     page: 1,
// //     centerAlign: false,
// //     firstItemClassName: 'tui-first-child',
// //     lastItemClassName: 'tui-last-child',
// //     template: {
// //       page: '<a href="#" class="tui-page-btn">{{page}}</a>',
// //       currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
// //       moveButton:
// //         '<a href="#" class="tui-page-btn tui-{{type}}">' +
// //           '<span class="tui-ico-{{type}}">{{type}}</span>' +
// //         '</a>',
// //       disabledMoveButton:
// //         '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
// //           '<span class="tui-ico-{{type}}">{{type}}</span>' +
// //         '</span>',
// //       moreButton:
// //         '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
// //           '<span class="tui-ico-ellip">...</span>' +
// //         '</a>'
// //     }
// //   };

// //   pagination.on('beforeMove', evt => {
// //     const { page } = evt;
// //     const result = ajax.call({page});
  
// //     if(result) {
// //       pagination.movePageTo(page);
// //     } else {
// //       return false;
// //     }
// //   });



