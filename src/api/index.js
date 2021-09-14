import axios from "axios";
import CONSTANTS from "../constants";

const api = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
});

export const authorization = (data) => {
    return api.post('/auth', data)
}

export const registration = (data) => {
    return api.post('/register', data)
}

export const fetchCard = () => {
    return api.get(`card?token=${localStorage.getItem(CONSTANTS.ACCESS_TOKEN)}`)
}

export const postCard = (data) => {
    return api.post('/card', data)
}

export const fetchAddresses = () => {
    return api.get('/addressList')
}

export const fetchRoutes = values => {
    return api.get(`/route?address1=${values.from}&address2=${values.to}`)
}