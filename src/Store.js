import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";

import plotsApp from "./Reducers/Reducer";

import {createLogger} from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension";

const middleWare = []
middleWare.push(thunkMiddleware)
const loggerMiddleware = createLogger()
middleWare.push(loggerMiddleware)

const store = createStore(
    plotsApp,
    composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;