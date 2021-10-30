import {fetchUserCard, sagaFetchCard, setCard, setSuccess} from './slice'
import {setError} from '../auth/slice'

export {default as profile} from './slice'
export const profileActions = {
  fetchUserCard,
  setSuccess,
  setCard,
  setError,
  sagaFetchCard,
}
export * from './saga'
