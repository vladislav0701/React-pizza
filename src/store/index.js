import { createStore, combineReducers } from "redux";
import pizzas from "../reducers/pizza";
import filters from "../reducers/filters";

const store = createStore(combineReducers({pizzas, filters}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;