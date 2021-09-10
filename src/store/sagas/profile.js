import {put, takeEvery, call} from 'redux-saga/effects';
import {postCard} from "../../api";
import {ProfileActionCreators, ProfileActionType} from "../actions/profile";

function* profileWorker(action) {
    const {data} = yield call(postCard, action.payload)

    if(data.success) {
        yield put(ProfileActionCreators.setSuccess())
    } else {
        yield put(ProfileActionCreators.setError(data.error))
    }
}

export function* profileWatcher() {
    yield takeEvery(ProfileActionType.SET_CARD, profileWorker)
}