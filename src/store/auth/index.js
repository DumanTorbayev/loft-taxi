import {login, logout, setAuth} from "./slice";

export {default as auth} from './slice'
export const authActions = {
    setAuth,
    login,
    logout,
}
export * from './saga'
