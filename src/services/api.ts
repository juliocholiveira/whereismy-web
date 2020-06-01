import axios from "axios";

import dotenv from 'dotenv';
dotenv.config();

let baseURL = 'https://where-are-you-back.herokuapp.com';
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://192.168.1.30:5000';
}

console.log(process.env.NODE_ENV);
console.log(baseURL);

const api = axios.create({
  baseURL,
});

export default api;