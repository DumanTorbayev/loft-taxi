import {all} from 'redux-saga/effects';
import {authorizationWatcher} from "./auth";
import {profileWatcher} from "./profile";
import {getAddressListWatcher, getRoutesWatcher} from "./order";
import {registrationWatcher} from "./registration";

export function* rootWatcher() {
    yield all([
        authorizationWatcher(),
        profileWatcher(),
        getAddressListWatcher(),
        getRoutesWatcher(),
        registrationWatcher()
    ])
}