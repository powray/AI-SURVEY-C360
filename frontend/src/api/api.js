import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000/api';

export const api = axios.create({ baseURL: API_BASE });

export const postChat = (payload) => api.post('/chat', payload).then(r => r.data);
export const getSurveyQuestions = () => api.get('/survey/questions').then(r => r.data);
export const submitSurvey = (payload) => api.post('/survey/submit', payload).then(r => r.data);
export const listCustomers = (userId) => api.get(`/c360?userId=${userId}`).then(r => r.data);
export const getCustomer = (id) => api.get(`/c360/${id}`).then(r => r.data);
