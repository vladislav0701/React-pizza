import { configureStore } from "@reduxjs/toolkit";
import pizzas from "../component/pizzaList/pizzaSlice";
import cart from "../component/cart/cartSlice";
import filters from "../component/filters/filtersSlice";

const store = configureStore({
    reducer: {pizzas, cart, filters},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;