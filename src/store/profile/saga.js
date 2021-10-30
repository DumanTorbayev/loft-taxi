import {call, put, takeEvery} from 'redux-saga/effects'
import {fetchCard, postCard} from '../../api/card'
import {
  fetchUserCard,
  sagaFetchCard,
  setCard,
  setError,
  setSuccess,
} from './slice'
import {setIsCard} from '../../utils/setIsCard'
import Constant from '../../constants'

function* sendCardWorker(action) {
  try {
    const {data} = yield call(postCard, action.payload)

    console.log(data)

    if (data.success) {
      yield put(setSuccess(true))
      yield call(setIsCard)
    } else {
      yield put(setError(data.error))
    }
  } catch (e) {
    yield put(setError(Constant.CARD_SEND_FAIL))
  }
}

function* getCardWorker() {
  try {
    const {data} = yield call(fetchCard)

    yield call(setIsCard)

    if (!data.hasOwnProperty('success')) {
      yield put(setCard(data))
    }
  } catch (e) {
    yield put(setError(Constant.CARD_FAIL))
  }
}

export function* profileWatcher() {
  yield takeEvery(fetchUserCard.type, sendCardWorker)
  yield takeEvery(sagaFetchCard.type, getCardWorker)
}
