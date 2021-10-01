import {call, put, takeEvery} from "redux-saga/effects";
import {fetchAddresses, fetchRoutes} from "../../api/addresses";
import {setAddresses, setRoutes, getRoutes, sagaFetchAddresses} from "./slice";

function* getAddressListWorker() {
    try {
        const {data} = yield call(fetchAddresses)
        yield put(setAddresses(data.addresses))
    } catch (e) {
        console.log(e);
    }
}

function* getRoutesWorker(action) {
    try {
        const {data} = yield call(fetchRoutes, action.payload)
        yield put(setRoutes(data))
    } catch (e) {
        console.log(e)
    }
}

export function* getAddressListWatcher() {
    yield takeEvery(sagaFetchAddresses.type, getAddressListWorker)
}

export function* getRoutesWatcher() {
    yield takeEvery(getRoutes.type, getRoutesWorker)
}