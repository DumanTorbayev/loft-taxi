import {OrderActionsType} from "../../actions/order";


const initialState = {
    addresses: [],
    coordinates: [],
    isLoading: false,
}

export const order = (state = initialState, {type, payload}) => {
    switch (type) {
        case OrderActionsType.FETCH_ROUTES:
            return {...state, isLoading: true}
        case OrderActionsType.SET_ADDRESSES:
            return {...state, addresses: payload}
        case OrderActionsType.SET_ROUTES:
            return {...state, coordinates: payload, isLoading: false}
        default:
            return state
    }
}