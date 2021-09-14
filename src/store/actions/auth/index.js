export const AuthActionType = {
    SET_AUTH: "SET_AUTH",
    SET_USER: "SET_USER",
    SET_ERROR: "SET_ERROR",
    SET_IS_LOADING: "SET_IS_LOADING",
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
}

export const AuthActionCreators = {
    setAuth: user => ({
        type: AuthActionType.SET_AUTH,
        payload: user
    }),
    login: () => ({type: AuthActionType.LOGIN}),
    logout: () => ({type: AuthActionType.LOGOUT}),
    setError: message => ({
        type: AuthActionType.SET_ERROR,
        payload: message
    }),
}