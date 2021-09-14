import {RegistrationActionType} from "../../actions/registration";

const initialState = {
    isRegisterIn: false,
    isLoading: false,
    error: null,
}

export const registration = (state = initialState, {type, payload}) => {
    switch (type) {
        case RegistrationActionType.SET_REGISTRATION:
            return {...state, isLoading: true}
        case RegistrationActionType.FETCH_REGISTRATION:
            return {...state, isRegisterIn: true, isLoading: false, error: null}
        case RegistrationActionType.LOGOUT:
            return {...state, isRegisterIn: false}
        case RegistrationActionType.SET_ERROR:
            return {...state, error: payload, isLoading: false, isRegisterIn: false}
        default:
            return state
    }
}