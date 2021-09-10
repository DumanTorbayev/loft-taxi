import {AuthActionType} from "../actions/auth";

const initialState = {
    isLoggedIn: false,
    isLoading: false,
    error: '',
}

export const auth = (state = initialState, action) => {
    switch (action.type) {
        case AuthActionType.LOGIN:
            return {...state, isLoggedIn: true}
        case AuthActionType.LOGOUT:
            return {...state, isLoggedIn: false}
        case AuthActionType.SET_ERROR:
            return {...state, error: action.payload, isLoading: false}
        case AuthActionType.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        default:
            return state;
    }
}