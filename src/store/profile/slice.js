import {createAction, createSlice} from '@reduxjs/toolkit'

const initialState = {
  card: null,
  isSuccess: false,
  error: null,
  isLoading: false,
}

const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    fetchUserCard: (state) => {
      state.isLoading = true
      state.error = null
    },
    setSuccess: (state, action) => {
      state.isSuccess = action.payload
      state.isLoading = false
      state.error = null
    },
    setCard: (state, action) => {
      state.card = action.payload
      state.error = null
    },
    setError: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
  },
})

export const sagaFetchCard = createAction('saga/fetchCard')
export const {fetchUserCard, setSuccess, setCard, setError} = profile.actions
export default profile.reducer
