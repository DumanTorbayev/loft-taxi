export const RegistrationActionType = {
    SET_REGISTRATION: 'SET_REGISTRATION',
    FETCH_REGISTRATION: 'FETCH_REGISTRATION',
    SET_ERROR: 'SET_ERROR',
}

export const RegistrationActionCreators = {
    setRegistration: values => ({type: RegistrationActionType.SET_REGISTRATION, payload: values}),
    fetchRegistration: () => ({type: RegistrationActionType.FETCH_REGISTRATION}),
    setError: message => ({type: RegistrationActionType.SET_ERROR, payload: message}),
}