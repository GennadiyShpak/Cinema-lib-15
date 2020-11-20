import MovieService from '../js/apiService'
import handlebars from "../templates/main-page.hbs";
import refs from "../js/refs";
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';



const mainPageMarkupHandler = new MovieService();
const container = document.getElementById('pagination');

export default async function onLoadPage() {
    const films = await mainPageMarkupHandler.fetchMovies()
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
});
container.addEventListener('click', onBtnClickHandler)


function onBtnClickHandler (e) {
  const a = document.querySelector('.tui-is-selected')
  if (!e.target.classList.contains('tui-page-btn')) {
    return
  } 
    mainPageMarkupHandler.page = a.textContent;
    onLoadPage()
}
