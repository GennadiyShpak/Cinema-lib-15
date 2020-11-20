// import { data } from "autoprefixer";

const API_KEY = 'bb3f2a9bd6a374d8a5257ae7f0ad6ee7';
const BASE_URL = 'https://api.themoviedb.org/3/';
const urlParms = ['trending/movie/week', 'search/movie'];

export default class MovieService {
constructor() {
  this.page = 1;
  this.searchQuery = '';
}

    async fetchMovies () {
        const url = `${BASE_URL}${urlParms[0]}?api_key=${API_KEY}&page=${this.page}`;
        return this.responceHandler(url);
    }

    async searchMovie () {
        const url = `${BASE_URL}${urlParms[1]}?api_key=${API_KEY}&query=${this.searchQuery}`;
        const filmSearchObject=await this.responceHandler(url);
        filmSearchObject.results=filmSearchObject.results.map(film=>{
            return {release_date: film.release_date?film.release_date.split('-')[0]:'',
                    id: film.id,
                    title: film.title,
                    backdrop_path: film.backdrop_path,
            };
        });
        return filmSearchObject;
    }

    async fetchMovieById(id) {
      //api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
      const url = `${BASE_URL}movie/${id}?api_key=${API_KEY}`;
      return this.responceHandler(url);
    }

    async getGenre(movieID){
        const url=`${BASE_URL}movie/${movieID}?api_key=${API_KEY}&language=en-US`;
        const filmObject = await this.responceHandler(url);
        return await filmObject.genres.map(element => element.name);
    }

    async responceHandler (url) {
        try{
            const responce = await fetch(url)

              if (responce.ok) {
                  const data = await responce.json();
                  return data;
              }
              throw new Error (data.statusText);
        }
        catch {
            error=>colsole.log(error)
        }
    }

    get query () {
        return this.searchQuery;
    }

    set query (newSearchQuery) {
        this.searchQuery=newSearchQuery;
    }

    incrementPage () {
        this.page += 1;
    }

    resetInput () {
        this.page =1;
    }
}
