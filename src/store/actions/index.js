import {AuthActionCreators} from "./auth";
import {RegistrationActionCreators} from "./registration";
import {ProfileActionCreators} from "./profile";

export const allActionCreators = {
    ...AuthActionCreators,
    ...RegistrationActionCreators,
    ...ProfileActionCreators,
}