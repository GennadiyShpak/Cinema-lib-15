import axios from "axios";
const API_KEY = "";
const BASE_URL = "";

export default class ImgApiService {
  constructor() {
    this.searchQuery = "";
    this.page = 1;
    this.per_page = 12;
  }

  async NAME_FUNCTION() {
    const searchParams = new URLSearchParams({
      image_type: "",
      orientation: "",
      q: this.searchQuery,
      page: this.page,
      per_page: this.per_page,
      key: API_KEY,
    });

    try {
      axios.defaults.baseURL = BASE_URL;
      const { data } = await axios.get(`${searchParams}`);
      this.incrementPage();

      return data.hits;
    } catch (error) {
      console.log("error", { error });

      return [];
    }
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
