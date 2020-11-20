import MovieService from '../js/apiService';
import handlebars from '../templates/main-page.hbs';
import refs from '../js/refs';
//import filmCardTamplate from '../templates/filmCardTamplate.hbs';

const searchServices = new MovieService();

export default async function onSearch(e) {
  e.preventDefault();
  refs.loader.classList.add('active');
  refs.filmGalery.innerHTML = '';
  searchServices.query = refs.searchInput.value;
  if (searchServices.query === '') {
    return;
  }

  try {
    const films = await searchServices.searchMovie();
    if (films.length === 0) {
      console.log('За вашим запросом ничего не найдено');
    }
    await renderGalleryFilms(films.results);
    randerGenreFilm();
    refs.loader.classList.remove('active');
  } catch (err) {
    console.log('onSearch -> err', err);
  }
}

function renderGalleryFilms(films) {
  const markup = handlebars(films);
  refs.filmGalery.innerHTML = markup;
}

export async function randerGenreFilm() {
  const filmItemRefs = document.querySelectorAll('.film__item');
  Array.from(filmItemRefs).forEach(async filmItemRef => {
    const spanRefs = filmItemRef.querySelector('.film__item--genre');
    const genere = await searchServices.getGenre(filmItemRef.dataset.id);
    spanRefs.textContent = genere;
  });
}
