import {put, takeEvery, call} from 'redux-saga/effects';
import {fetchCard, postCard} from "../../../api";
import {ProfileActionCreators, ProfileActionType} from "../../actions/profile";

function* sendCardWorker(action) {
    try {
        const {data} = yield call(postCard, action.payload)

        if(data.success) {
            yield put(ProfileActionCreators.setSuccess(true))
        } else {
            yield put(ProfileActionCreators.setError(data.error))
        }
    } catch (e) {
        console.log(e)
    }
}

function* getCardWorker() {
    try {
        const {data} = yield call(fetchCard)
        if(!data.hasOwnProperty('success')) yield put(ProfileActionCreators.setUserCard(data))
    } catch (e) {
        console.log(e);
    }
}

export function* profileWatcher() {
    yield takeEvery(ProfileActionType.FETCH_USER_CARD, sendCardWorker)
    yield takeEvery(ProfileActionType.FETCH_CARD, getCardWorker)
}