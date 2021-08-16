import axios from 'axios';


const API = axios.create({baseURL:'http://localhost:5000/api'});

export const fetchProducts = (category, sort, search) => API.get(`/products?category=${category}&sort=${sort}&name[regex]=${search}`)