import axios from 'axios';

const API = axios.create({baseURL: process.env.API_URL});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
});

//Product
export const fetchProducts = (category, sort, search) => API.get(`/products?${category}&sort=${sort}&name[regex]=${search}`);
export const fetchProductDetails = (id) => API.get(`/products/${id}`);

//Cart
export const addCartItem = (id) => API.get(`/products/${id}`);

//User
export const login = (userData) => API.post(`/users/login`, userData);
export const register = (userData) => API.post('/users/register', userData);