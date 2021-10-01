import CONSTANTS from "../../constants";
import {call, put, takeEvery} from "redux-saga/effects";
import {fetchCard, postCard} from "../../api/card";
import {fetchUserCard, sagaFetchCard, setCard, setError, setSuccess} from "./slice";

const setIsCard = () => {
    localStorage.setItem(CONSTANTS.IS_CARD, 'true')
}

function* sendCardWorker(action) {
    try {
        const {data} = yield call(postCard, action.payload)

        if (data.success) {
            yield put(setSuccess(true))
            yield call(setIsCard)
        } else {
            yield put(setError(data.error))
        }
    } catch (e) {
        console.log(e)
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
        console.log(e);
    }
}

export function* profileWatcher() {
    yield takeEvery(fetchUserCard.type, sendCardWorker)
    yield takeEvery(sagaFetchCard.type, getCardWorker)
}