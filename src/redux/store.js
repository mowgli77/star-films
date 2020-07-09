import {reducer} from "./reducer";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";


const reducers = combineReducers({
    star: reducer

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
export default store;