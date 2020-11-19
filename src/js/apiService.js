// import { data } from "autoprefixer";

const API_KEY = 'bb3f2a9bd6a374d8a5257ae7f0ad6ee7';
const BASE_URL = 'https://api.themoviedb.org/3/'

export default class MovieService {
    constructor() {
        this.page = 1;
        this.searchQuery = '';
    }

    async fetchMovies () {
    try{
      const responce = await fetch(`${BASE_URL}trending/movie/week?api_key=${API_KEY}&page=${this.page}`)
      
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