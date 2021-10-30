import {
  getRoutes,
  sagaFetchAddresses,
  setAddresses,
  setRoutes,
  setError,
} from './slice'

export {default as order} from './slice'
export const orderActions = {
  getRoutes,
  setAddresses,
  setRoutes,
  sagaFetchAddresses,
  setError,
}
export * from './saga'
