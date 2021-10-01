import {all} from "redux-saga/effects";
import {auth, authorizationWatcher, authActions} from "./auth";
import {getAddressListWatcher, getRoutesWatcher, order, orderActions} from "./order";
import {profile, profileActions, profileWatcher} from "./profile";
import {registration, registrationActions, registrationWatcher} from "./registration";

export const allActionCreators = {
    ...authActions,
    ...orderActions,
    ...profileActions,
    ...registrationActions
}

export const reducers = {auth, order, profile, registration}

export function* rootWatcher() {
    yield all([
        authorizationWatcher(),
        getAddressListWatcher(),
        getRoutesWatcher(),
        profileWatcher(),
        registrationWatcher()
    ])
}

