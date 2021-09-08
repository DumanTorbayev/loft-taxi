import {Login} from "../pages/Login";
import {Registration} from "../pages/Registration";
import {Map} from "../pages/Map";
import {Profile} from "../pages/Profile";

export const ROUTES_PATH = {
    login: '/login',
    registration: '/registration',
    order: '/main/order',
    profile: '/main/profile',
}

export const publicRoutes = [
    {
        path: ROUTES_PATH.login,
        exact: true,
        component: Login,
    },
    {
        path: ROUTES_PATH.registration,
        exact: false,
        component: Registration,
    }
]

export const privateRoutes = [
    {
        path: ROUTES_PATH.order,
        exact: true,
        component: Map,
    },
    {
        path: ROUTES_PATH.profile,
        exact: false,
        component: Profile,
    }
]