import React, {useEffect} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {privateRoutes, publicRoutes, ROUTES_PATH} from "./routes";
import {AuthLayout} from "./components/AuthLayout";
import {Header} from "./components/Header";
import {useSelector} from "react-redux";
import {MapLayout} from "./components/MapLayout";
import {useActions} from "./hooks/useActions";

export const App = () => {
    const {isLoggedIn} = useSelector(state => state.auth)
    const {login} = useActions()

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            login()
        }
    }, [])

    return (
        <>
            {
                isLoggedIn ?
                    <>
                        <Header/>
                        <MapLayout>
                            <Switch>
                                {privateRoutes.map(({path, exact, component}) => (
                                    <Route key={path} path={path} exact={exact} component={component}/>
                                ))}
                                <Redirect to={ROUTES_PATH.order}/>
                            </Switch>
                        </MapLayout>
                    </>
                    :
                    <AuthLayout>
                        <Switch>
                            {publicRoutes.map(({path, exact, component}) => (
                                <Route key={path} path={path} exact={exact} component={component}/>
                            ))}
                            <Redirect to={ROUTES_PATH.login}/>
                        </Switch>
                    </AuthLayout>
            }
        </>
    );
};