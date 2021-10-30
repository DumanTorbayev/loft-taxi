import {call, put, takeEvery} from 'redux-saga/effects'
import {fetchAddresses, fetchRoutes} from '../../api/addresses'
import {
  setAddresses,
  setRoutes,
  getRoutes,
  sagaFetchAddresses,
  setError,
} from './slice'
import Constant from '../../constants'

function* getAddressListWorker() {
  try {
    const {data} = yield call(fetchAddresses)
    yield put(setAddresses(data.addresses))
  } catch (e) {
    console.log(e)
    yield put(setError(Constant.ADDRESS_FAIL))
  }
}

function* getRoutesWorker(action) {
  try {
    const {data} = yield call(fetchRoutes, action.payload)
    yield put(setRoutes(data))
  } catch (e) {
    yield put(setError(Constant.ROUTES_FAIL))
  }
}

export function* getAddressListWatcher() {
  yield takeEvery(sagaFetchAddresses.type, getAddressListWorker)
}

export function* getRoutesWatcher() {
  yield takeEvery(getRoutes.type, getRoutesWorker)
}
