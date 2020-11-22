import MovieService from '../js/apiService';
import handlebars from '../templates//search-page.hbs';
import refs from '../js/refs';
import container from './pagination'

const searchServices = new MovieService();

async function onSearch(e) {
  e.preventDefault();

  const loader = document.querySelector('.loader');
  loader.classList.add('active');
  refs.filmGalery.innerHTML = '';
  searchServices.query = refs.searchInput.value;
  container.classList.add('display-none');
  if (searchServices.query === '') {
    refs.massageError.classList.remove('hidden');
    loader.classList.remove('active');
    return;
  }

  try {
    const films = await searchServices.searchMovie();
    await renderGalleryFilms(films.results);
    renderGenreFilm();
    loader.classList.remove('active');
  } catch (err) {
    console.log('onSearch -> err', err);
  }
}

function renderGalleryFilms(films) {
  if (films.length===0){
    refs.massageError.classList.remove('hidden');
  } else {
    refs.massageError.classList.add('hidden');
  }
  const markup = handlebars(films);
  refs.filmGalery.innerHTML = markup;
}

async function renderGenreFilm() {
  const filmItemRefs = document.querySelectorAll('.film__item');
  Array.from(filmItemRefs).forEach(async filmItemRef => {
    const spanRefs = filmItemRef.querySelector('.film__item--genre');
    const genere = await searchServices.getGenre(filmItemRef.dataset.id);
    spanRefs.textContent = genere;
  });
}

export { onSearch, renderGenreFilm };
