import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hook/http.hook";

const initialState = {
    pizza: [],
    pizzaLoadingStatus: 'idle',
}

export const fetchPizza = createAsyncThunk(
    'pizza/fetchPizza',
    async () => {
        const {request} = useHttp();
        return await request("http://localhost:3001/pizzas")
    }
)

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizza.pending, state => {state.pizzaLoadingStatus = 'loading'})
            .addCase(fetchPizza.fulfilled, (state, action) => {
                state.pizzaLoadingStatus = 'idle';
                state.pizza = action.payload;
            })
            .addCase(fetchPizza.rejected, state => {state.pizzaLoadingStatus = 'error'})
            .addDefaultCase(() => {})
        }
});

const {actions, reducer} = pizzaSlice;

export default reducer;
export const {
    pizzaFetching,
    pizzaFetched,
    pizzaFetchingError
} = actions;