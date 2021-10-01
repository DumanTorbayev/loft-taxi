import React, {useEffect} from 'react';
import {useActions} from "./hooks/useActions";
import CONSTANTS from "./constants";
import {RootRouter} from "./components/RootRouter";

export const App = () => {
    const {login} = useActions()

    useEffect(() => {
        if (localStorage.getItem(CONSTANTS.AUTH)) {
            login()
        }
    }, [])

    return (
        <RootRouter/>
    );
};