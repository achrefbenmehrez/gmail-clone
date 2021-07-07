import axios from 'axios';

const API = axios.create({
    baseURL: 'https://achref-gmail-clone.herokuapp.com',
    headers: {
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem('profile'))?.token}`,
    }
});

export const fetchMails = () => API.get('/mails');
export const createMail = (newMail) => API.post('/mails', newMail);

export const signIn = (userData) => API.post('/users/signin', userData);