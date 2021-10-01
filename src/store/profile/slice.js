import {createAction, createSlice} from "@reduxjs/toolkit";

const initialState = {
    card: null,
    isSuccess: false,
    error: '',
    isLoading: false,
}

const profile = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        fetchUserCard: state => {
            state.isLoading = true
        },
        setSuccess: (state, action) => {
            state.isSuccess = action.payload
            state.isLoading = false
        },
        setCard: (state, action) => {
            state.card = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    }
})

export const sagaFetchCard = createAction('saga/fetchCard')
export const {fetchUserCard, setSuccess, setCard, setError} = profile.actions
export default profile.reducer