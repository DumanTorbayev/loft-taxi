import {all} from 'redux-saga/effects';
import {authorizationWatcher} from "./auth";
import {profileWatcher} from "./profile";

export function* rootWatcher() {
    yield all([authorizationWatcher(), profileWatcher()])
}