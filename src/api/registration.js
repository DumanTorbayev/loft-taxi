import {api} from './index'

export const registration = (data) => {
  return api.post('/register', data)
}
