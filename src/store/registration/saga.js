import {put, takeEvery, call} from 'redux-saga/effects'
import {registration} from '../../api/registration'
import {fetchRegistration, setError, setRegistration} from './slice'

function* registrationWorker({payload}) {
  try {
    const {data} = yield call(registration, payload)

    if (data.success) {
      yield put(fetchRegistration())
    } else {
      yield put(setError(data.error))
    }
  } catch (e) {
    yield put(setError(e))
  }
}

export function* registrationWatcher() {
  yield takeEvery(setRegistration.type, registrationWorker)
}
