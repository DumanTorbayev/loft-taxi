import Constant from '../constants'
import {api} from './index'

export const fetchCard = () => {
  return api.get(`card?token=${localStorage.getItem(Constant.ACCESS_TOKEN)}`)
}

export const postCard = (data) => {
  return api.post('/card', data)
}
