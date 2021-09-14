import CONSTANTS from "../constants";

export const setToken = (token) => {
    localStorage.setItem(CONSTANTS.ACCESS_TOKEN, token)
    localStorage.setItem(CONSTANTS.AUTH, 'true')
}