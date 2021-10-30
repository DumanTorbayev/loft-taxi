import {api} from './index'

export const fetchAddresses = () => {
  return api.get('/addressList')
}

export const fetchRoutes = (values) => {
  return api.get(`/route?address1=${values.from}&address2=${values.to}`)
}
