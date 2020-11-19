// import { data } from "autoprefixer";

const API_KEY = 'bb3f2a9bd6a374d8a5257ae7f0ad6ee7';
const BASE_URL = 'https://api.themoviedb.org/3/';
const urlParms = ['trending/movie/week', 'search/movie']

export default class MovieService {
    constructor() {
        this.page = 1;
        this.searchQuery = '';
    }

    async fetchMovies () {
        const url = `${BASE_URL}${urlParms[0]}?api_key=${API_KEY}&page=${this.page}`
        return this.responceHandler(url)
    }

    async searchMovie () {
        const url = `${BASE_URL}${urlParms[1]}?api_key=${API_KEY}&query=${this.searchQuery}`
        return this.responceHandler(url)
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