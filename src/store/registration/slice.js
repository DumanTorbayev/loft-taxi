import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isRegisterIn: false,
    isLoading: false,
    error: null,
}

const registration = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setRegistration: state => {
            state.isLoading = true
        },
        fetchRegistration: state => {
            state.isRegisterIn = true
            state.isLoading = false
            state.error = null
        },
        setError: (state, action) => {
            state.error = action.payload
            state.isRegisterIn = false
            state.isLoading = false
        }
    }
})

export const {setRegistration, fetchRegistration, setError} = registration.actions
export default registration.reducer