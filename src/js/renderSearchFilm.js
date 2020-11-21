import MovieService from '../js/apiService';
import handlebars from '../templates/main-page.hbs';
import refs from '../js/refs';
//import filmCardTamplate from '../templates/filmCardTamplate.hbs';

const searchServices = new MovieService();

async function onSearch(e) {
  e.preventDefault();

  const loader = document.querySelector('.loader');
  loader.classList.add('active');
  refs.filmGalery.innerHTML = '';
  console.log(refs.searchInput);
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
