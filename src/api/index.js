import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://loft-taxi.glitch.me',
})
