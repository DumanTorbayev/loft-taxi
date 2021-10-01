import {getRoutes, sagaFetchAddresses, setAddresses, setRoutes} from "./slice";

export {default as order} from './slice'
export const orderActions = {
    getRoutes,
    setAddresses,
    setRoutes,
    sagaFetchAddresses,
}
export * from './saga'