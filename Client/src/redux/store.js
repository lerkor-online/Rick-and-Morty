import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./reducer";


/* export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))) //thunk sirve para poder manejar asincronia dentro de redux */

    export const store = createStore(
        rootReducer,
        compose(applyMiddleware(thunk), composeWithDevTools())
      );