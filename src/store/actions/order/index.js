export const OrderActionsType = {
    SET_ADDRESSES: 'SET_ADDRESSES',
    FETCH_ADDRESSES: 'FETCH_ADDRESSES',
    FETCH_ROUTES: 'FETCH_ROUTES',
    SET_ROUTES: 'SET_ROUTES',
}

export const OrderActionCreators = {
    setAddresses: list => ({type: OrderActionsType.SET_ADDRESSES, payload: list}),
    fetchAddressList: () => ({type: OrderActionsType.FETCH_ADDRESSES}),
    getRoutes: values => ({type: OrderActionsType.FETCH_ROUTES, payload: values}),
    setRoutes: coordinates => ({type: OrderActionsType.SET_ROUTES, payload: coordinates})
}