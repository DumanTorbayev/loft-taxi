import {AuthActionCreators} from "./auth";
import {ProfileActionCreators} from "./profile";
import {OrderActionCreators} from "./order";
import {RegistrationActionCreators} from "./registration";

export const allActionCreators = {
    ...AuthActionCreators,
    ...ProfileActionCreators,
    ...OrderActionCreators,
    ...RegistrationActionCreators
}