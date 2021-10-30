import Constant from '../constants'

export const setToken = (token) => {
  localStorage.setItem(Constant.ACCESS_TOKEN, token)
  localStorage.setItem(Constant.AUTH, 'true')
}
