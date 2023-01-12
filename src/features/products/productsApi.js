import axios from "axios";

const baseURL = 'https://motive-2ih2.onrender.com';

export const fetchProducts = (endpoint) => {

  return axios.get(`${baseURL}/${endpoint}`);


}
