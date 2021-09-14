import {AuthActionType} from "../../actions/auth";

const initialState = {
    isLoggedIn: false,
    isLoading: false,
    error: null,
}

export const auth = (state = initialState, {type, payload}) => {
    switch (type) {
        case AuthActionType.SET_AUTH:
            return {...state, isLoading: true}
        case AuthActionType.LOGIN:
            return {...state, isLoggedIn: true, isLoading: false, error: null}
        case AuthActionType.LOGOUT:
            return {...state, isLoggedIn: false}
        case AuthActionType.SET_ERROR:
            return {...state, error: payload, isLoading: false}
        default:
            return state;
    }
}