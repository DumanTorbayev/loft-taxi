import {createAction, createSlice} from "@reduxjs/toolkit";

const initialState = {
    addresses: [],
    coordinates: [],
    isLoading: false,
}

const order = createSlice({
    name: 'order',
    initialState,
    reducers: {
        getRoutes: state => {
            state.isLoading = true
        },
        setAddresses: (state, action) => {
            state.addresses = action.payload
        },
        setRoutes: (state, action) => {
            state.coordinates = action.payload
            state.isLoading = false
        }
    }
})

export const sagaFetchAddresses = createAction('saga/fetchAddresses')
export const {getRoutes, setAddresses, setRoutes} = order.actions
export default order.reducer