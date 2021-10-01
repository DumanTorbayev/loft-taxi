import React from 'react';
import {useSelector} from "react-redux";
import {getIsLoggedIn} from "../../store/selectors";
import {Redirect, Route, Switch} from "react-router-dom";
import {PrivateRoute} from "./PrivateRoutes";
import {Order} from "../../pages/Order";
import {Profile} from "../../pages/Profile";
import {Header} from "../Header";
import {Login} from "../../pages/Login";
import {Registration} from "../../pages/Registration";
import {PageNotFound} from "../PageNotFound";

export const routesPath = {
    order: '/order',
    profile: '/profile',
    login: '/login',
    registration: '/registration'
}

export const RootRouter = () => {
    const isLoggedIn = useSelector(state => getIsLoggedIn(state.auth))

    return (
        <>
            {isLoggedIn && <Header/>}
            <Switch>
                <PrivateRoute component={Order} path={routesPath.order} exact={true}/>
                <PrivateRoute component={Profile} path={routesPath.profile} exact={true}/>
                <Route path={routesPath.login}>
                    {isLoggedIn ? <Redirect to={routesPath.order}/> : <Login/>}
                </Route>
                <Route path={routesPath.registration}>
                    {isLoggedIn ? <Redirect to={routesPath.order}/> : <Registration/>}
                </Route>
                <Route path='*' component={PageNotFound}/>
                <Redirect to={routesPath.order} />
            </Switch>
        </>
    );
};