import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  error: null,
}

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state) => {
      state.isLoading = true
    },
    login: (state) => {
      state.isLoggedIn = true
      state.isLoading = false
      state.error = null
    },
    logout: (state) => {
      state.isLoading = false
      state.isLoggedIn = false
    },
    setError: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const {setAuth, login, logout, setError} = auth.actions
export default auth.reducer
