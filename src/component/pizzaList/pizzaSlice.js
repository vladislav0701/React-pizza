import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pizza: [],
    pizzaLoadingStatus: 'idle',
}

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        pizzaFetching: state => {state.pizzaLoadingStatus = 'loading'},
        pizzaFetched: (state, action) => {
            state.pizzaLoadingStatus = 'idle';
            state.pizza = action.payload;
        },
        pizzaFetchingError: state => {state.pizzaLoadingStatus = 'error'}
    }
});

const {actions, reducer} = pizzaSlice;

export default reducer;
export const {
    pizzaFetching,
    pizzaFetched,
    pizzaFetchingError
} = actions;