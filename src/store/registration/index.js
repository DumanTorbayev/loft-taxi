import {fetchRegistration, setError, setRegistration} from './slice'

export {default as registration} from './slice'
export const registrationActions = {
  setRegistration,
  fetchRegistration,
  setError,
}
export * from './saga'
