import {createAction, createSlice} from '@reduxjs/toolkit'

const initialState = {
  addresses: [],
  coordinates: [],
  isLoading: false,
  error: null,
}

const order = createSlice({
  name: 'order',
  initialState,
  reducers: {
    getRoutes: (state) => {
      state.isLoading = true
      state.error = null
    },
    setAddresses: (state, action) => {
      state.addresses = action.payload
      state.error = null
    },
    setRoutes: (state, action) => {
      state.coordinates = action.payload
      state.isLoading = false
      state.error = null
    },
    setError: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
  },
})

export const sagaFetchAddresses = createAction('saga/fetchAddresses')
export const {getRoutes, setAddresses, setRoutes, setError} = order.actions
export default order.reducer
