import {ProfileActionType} from "../../actions/profile";

const initialState = {
    card: null,
    isSuccess: false,
    error: '',
    isLoading: false,
}

export const profile = (state = initialState, {type, payload}) => {
    switch (type) {
        case ProfileActionType.FETCH_USER_CARD:
            return {...state, isLoading: true}
        case ProfileActionType.SET_SUCCESS:
            return {...state, isSuccess: payload, isLoading: false}
        case ProfileActionType.SET_ERROR:
            return {...state, error: payload}
        case ProfileActionType.SET_CARD:
            return {...state, card: payload}
        default:
            return state
    }
}