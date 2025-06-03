import { ApiClient } from './ApiClient';

const API_URL = import.meta.env.VITE_API_URL;

const api = new ApiClient(API_URL);

// Si tienes un token guardado en localStorage, lo agregas al header global
const token = import.meta.env.VITE_API_TOKEN;
if (token) {
  api.setGlobalHeader('Authorization', `Bearer ${token}`);
}

export default api;
