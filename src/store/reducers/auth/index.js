import {AuthActionType} from "../../actions/auth";

const initialState = {
    isAuth: true,
}

export const auth = (state = initialState, action) => {
    switch (action.type) {
        case AuthActionType.SET_AUTH:
            return {...state, isAuth: action.payload}
        default:
            return state;
    }
}