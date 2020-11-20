import templates from '../templates/main-page.hbs';
import MovieService from '../js/apiService';
import refs from './refs';

// const watched = localStorage.getItem('watched');
const getTheFilm = new MovieService();

let array = [
  { name: 'adwda', id: '613504' },
  { name: 'adwasda', id: '340102' },
  { name: 'adwada', id: '622855' },
];

let newArr = [];

// const parsedWatched = JSON.parse(wathced);

export default async function makeMarkup() {
  const film = await getTheFilm.fetchMovieById(613504);
  const film1 = await getTheFilm.fetchMovieById(340102);
  const film2 = await getTheFilm.fetchMovieById(622855);

  array.forEach(async el => {
    let film = await getTheFilm.fetchMovieById(el.id);
    newArr.push(film);
  });

  console.log(newArr);

  let markup = templates([
    film,
    film1,
    film2,
    film,
    film1,
    film2,
    film,
    film1,
    film2,
  ]);
  refs.watchedGallery.innerHTML = markup;
}
