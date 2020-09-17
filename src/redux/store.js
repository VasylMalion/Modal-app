import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {reducer} from "./reducers/reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

import {watchAllCountry, watchUSCountry} from "./saga/saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchAllCountry)
sagaMiddleware.run(watchUSCountry)

export {
    store
}