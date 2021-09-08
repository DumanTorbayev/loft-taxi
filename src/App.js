import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {privateRoutes, publicRoutes, ROUTES_PATH} from "./routes";
import {AuthLayout} from "./layout/Auth";
import {Header} from "./components/Header";
import {useSelector} from "react-redux";

export const App = () => {
    const {isAuth} = useSelector(state => state.auth)

    return (
        <>
            {
                isAuth ?
                    <>
                        <Header/>
                        <Switch>
                            {privateRoutes.map(({path, exact, component}) => (
                                <Route key={path} path={path} exact={exact} component={component}/>
                            ))}
                            <Redirect to={ROUTES_PATH.order}/>
                        </Switch>
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