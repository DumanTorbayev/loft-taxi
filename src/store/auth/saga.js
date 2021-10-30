import {call, put, takeEvery} from 'redux-saga/effects'
import {authorization} from '../../api/auth'
import {login, setAuth, setError} from './slice'
import {setToken} from '../../utils/setToken'

function* authorizationWorker(action) {
  try {
    const {data} = yield call(authorization, action.payload)

    if (data.success) {
      yield call(setToken, data.token)
      yield put(login())
    } else {
      yield put(setError(data.error))
    }
  } catch (e) {
    yield put(setError(e))
  }
}

export function* authorizationWatcher() {
  yield takeEvery(setAuth.type, authorizationWorker)
}
