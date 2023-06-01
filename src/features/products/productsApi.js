import axios from "axios";

const baseURL = 'https://motiv-data.onrender.com';

export const fetchProducts = (endpoint) => {

  return axios.get(`${baseURL}/${endpoint}`);


}
