import MovieService from '../js/apiService'
import handlebars from "../templates/main-page.hbs";
import refs from "../js/refs";



const mainPageMarkupHandler = new MovieService();

export default async function onLoadPage() {
    const films = await mainPageMarkupHandler.fetchMovies()
    mainPageHandler(films.results);
}

  async function mainPageHandler(films) {
      const markup = handlebars(films);
      refs.filmGalery.innerHTML = markup;
};

