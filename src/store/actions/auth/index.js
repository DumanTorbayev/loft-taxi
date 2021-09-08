export const AuthActionType = {
    SET_AUTH: "SET_AUTH"
}

export const AuthActionCreators = {
    login: (auth) => ({
        type: AuthActionType.SET_AUTH,
        payload: auth
    })
}