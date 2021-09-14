import {put, takeEvery, call} from 'redux-saga/effects';
import {RegistrationActionCreators, RegistrationActionType} from "../../actions/registration";
import {registration} from "../../../api";
import {setToken} from "../../../utils/setToken";

function* registrationWorker({payload}) {
    try {
        const {data} = yield call(registration, payload)

        if(data.success) {
            yield call(setToken, data.token)
            yield put(RegistrationActionCreators.fetchRegistration())
        } else {
            yield put(RegistrationActionCreators.setError(data.error))
        }
    } catch (e) {
        console.log(e);
    }
}

export function* registrationWatcher() {
    yield takeEvery(RegistrationActionType.SET_REGISTRATION, registrationWorker)
}