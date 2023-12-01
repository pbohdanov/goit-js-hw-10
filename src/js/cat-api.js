import axios from "axios";

const BASE_URL = `https://api.thecatapi.com/v1/`;
const END_POINT = "breeds";
const API_KEY = "live_HZuffGGD802cC2uxYx6Fj70mwf9EKDgjqPJZFEUyoMEE2tk86KYPWROtZu211xXh";

axios.defaults.headers.common["x-api-key"] = API_KEY;
axios.defaults.baseURL = BASE_URL;

function fetchBreeds() {
  return axios.get(END_POINT);
}

function fetchCatByBreed(breedId) {
  return axios.get(`images/search?breed_ids=${breedId}`);
}

export { fetchBreeds, fetchCatByBreed };