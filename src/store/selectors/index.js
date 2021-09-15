import {createSelector} from "reselect";

export const getIsLoggedIn = createSelector(
    state => state.isLoggedIn,
    isLoggedIn => isLoggedIn
)

export const getIsRegister = createSelector(
    state => state.isRegisterIn,
    isRegisterIn => isRegisterIn
)

export const getIsLoading = createSelector(
    state => state.isLoading,
    isLoading => isLoading
)

export const getIsSuccess = createSelector(
    state => state.isSuccess,
    isSuccess => isSuccess
)

export const getError = createSelector(
    state => state.error,
    error => error
)

export const getCoordinates = createSelector(
    state => state.coordinates,
    coordinates => coordinates
)

export const getAddresses = createSelector(
    state => state.addresses,
    addresses => addresses
)

export const getCard = createSelector(
    state => state.card,
    card => card
)