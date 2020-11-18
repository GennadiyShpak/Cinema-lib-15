import "./styles/index.scss";
import "material-design-icons/iconfont/material-icons.css";
import "./js/script";
import MovieService from './js/apiService'
import handlebars from "./templates/main-page.hbs";
import refs from "./js/refs";

const movieMarkup = new MovieService()

onLoad();


async function onLoad() {
      const films = await movieMarkup.fetchMovies()
      mainPageHandler(films.results);
    }
    async function mainPageHandler(films) {
        const markup = handlebars(films);
        refs.filmGalery.innerHTML = markup;
};