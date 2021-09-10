export const ProfileActionType = {
    SET_CARD: 'SET_CARD',
    IS_SUCCESS: 'IS_SUCCESS',
    SET_ERROR: 'SET_ERROR',
}

export const ProfileActionCreators = {
    setUserCard: data => ({
        type: ProfileActionType.SET_CARD,
        payload: data
    }),
    setSuccess: () => ({type: ProfileActionType.IS_SUCCESS}),
    setError: message => ({
        type: ProfileActionType.SET_ERROR,
        payload: message
    })
}