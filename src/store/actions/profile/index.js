export const ProfileActionType = {
    FETCH_USER_CARD: 'FETCH_USER_CARD',
    FETCH_CARD: 'FETCH_CARD',
    SET_CARD: 'SET_CARD',
    SET_SUCCESS: 'SET_SUCCESS',
    SET_ERROR: 'SET_ERROR',
}

export const ProfileActionCreators = {
    fetchUserCard: data => ({
        type: ProfileActionType.FETCH_USER_CARD,
        payload: data
    }),
    setUserCard: card => ({
        type: ProfileActionType.SET_CARD,
        payload: card
    }),
    fetchCard: () => ({type: ProfileActionType.FETCH_CARD}),
    setSuccess: boolean => ({type: ProfileActionType.SET_SUCCESS, payload: boolean}),
    setError: message => ({
        type: ProfileActionType.SET_ERROR,
        payload: message
    })
}