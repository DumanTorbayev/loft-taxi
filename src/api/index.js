import axios from "axios";

const api = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
});

export const authorization = (data) => {
    return api.post('/auth', data)
}

export const fetchCard = () => {
    return api.get('/card')
}

export const postCard = (data) => {
    return api.post('/card', data)
}