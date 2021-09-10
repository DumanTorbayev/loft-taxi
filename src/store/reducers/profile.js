import {ProfileActionType} from "../actions/profile";

const initialState = {
    card: {},
    isSuccess: false,
    error: ''
}

export const profile = (state = initialState, action) => {
    switch (action.type) {
        case ProfileActionType.IS_SUCCESS:
            return {...state, isSuccess: true}
        case ProfileActionType.SET_ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}