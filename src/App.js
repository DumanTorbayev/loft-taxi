import React, {useEffect} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {privateRoutes, publicRoutes, ROUTES_PATH} from "./routes";
import {AuthLayout} from "./components/AuthLayout";
import {Header} from "./components/Header";
import {useSelector} from "react-redux";
import {MapContainer} from "./components/MapContainer";
import {useActions} from "./hooks/useActions";
import CONSTANTS from "./constants";

export const App = () => {
    const {isLoggedIn} = useSelector(state => state.auth)
    const {isRegisterIn} = useSelector(state => state.registration)
    const {login} = useActions()

    useEffect(() => {
        if (localStorage.getItem(CONSTANTS.AUTH)) {
            login()
        }
    }, [])

    return (
        <>
            {
                isLoggedIn ?
                    <>
                        <Header/>
                        <MapContainer>
                            <Switch>
                                {privateRoutes.map(({path, exact, component}) => (
                                    <Route key={path} path={path} exact={exact} component={component}/>
                                ))}
                                <Redirect to={ROUTES_PATH.order}/>
                            </Switch>
                        </MapContainer>
                    </>
                    :
                    <AuthLayout>
                        <Switch>
                            {publicRoutes.map(({path, exact, component}) => (
                                <Route key={path} path={path} exact={exact} component={component}/>
                            ))}
                            <Redirect to={ROUTES_PATH.login}/>
                            {isRegisterIn && <Redirect to={ROUTES_PATH.login}/>}
                        </Switch>
                    </AuthLayout>
            }
        </>
    );
};