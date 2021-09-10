import {put, takeEvery, call} from 'redux-saga/effects';
import {authorization} from "../../api";
import {AuthActionCreators, AuthActionType} from "../actions/auth";

const setToken = (token) => {
    localStorage.setItem('accessToken', token)
    localStorage.setItem('auth', 'true')
}

function* authorizationWorker(action) {
    const {data} = yield call(authorization, action.payload)

    if(data.success) {
        yield call(setToken, data.token)
        yield put(AuthActionCreators.login())
    } else {
        yield put(AuthActionCreators.setError(data.error))
    }
}

export function* authorizationWatcher() {
   yield takeEvery(AuthActionType.SET_AUTH, authorizationWorker)
}