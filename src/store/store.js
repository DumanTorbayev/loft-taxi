import {combineReducers, configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {reducers, rootWatcher} from "./index";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({...reducers})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false})
        .concat(sagaMiddleware)
})

sagaMiddleware.run(rootWatcher)