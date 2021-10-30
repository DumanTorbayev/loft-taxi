import {api} from './index'

export const authorization = (data) => {
  return api.post('/auth', data)
}
