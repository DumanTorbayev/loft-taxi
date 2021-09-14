import {put, takeEvery, call} from 'redux-saga/effects';
import {fetchAddresses, fetchRoutes} from "../../../api";
import {OrderActionCreators, OrderActionsType} from "../../actions/order";

function* getAddressListWorker() {
    try {
        const {data} = yield call(fetchAddresses)
        yield put(OrderActionCreators.setAddresses(data.addresses))
    } catch (e) {
        console.log(e);
    }
}

export function* getAddressListWatcher() {
    yield takeEvery(OrderActionsType.FETCH_ADDRESSES, getAddressListWorker)
}

function* getRoutesWorker(action) {
    try {
        const {data} = yield call(fetchRoutes, action.payload)
        yield put(OrderActionCreators.setRoutes(data))
    } catch (e) {
        console.log(e)
    }
}

export function* getRoutesWatcher() {
    yield takeEvery(OrderActionsType.FETCH_ROUTES, getRoutesWorker)
}