import CONSTANTS from "../../constants";
import {call, put, takeEvery} from "redux-saga/effects";
import {authorization} from "../../api/auth";
import {login, setAuth, setError} from "./slice";

const setToken = (token) => {
    localStorage.setItem(CONSTANTS.ACCESS_TOKEN, token)
    localStorage.setItem(CONSTANTS.AUTH, 'true')
}

function* authorizationWorker(action) {
    const {data} = yield call(authorization, action.payload)

    if(data.success) {
        yield call(setToken, data.token)
        yield put(login())
    } else {
        yield put(setError(data.error))
    }
}

export function* authorizationWatcher() {
    yield takeEvery(setAuth.type, authorizationWorker)
}