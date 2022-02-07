import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    totalPrice: 0,
    totalCount: 0
}

const getTotalPrice = (arr) => {
    return arr.reduce((sum, obj) => obj.price + sum, 0);
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addPizzaCart: (state, action) => {
            const newItem = {
                ...state.cart,
                [action.payload.id]: !state.cart[action.payload.id]
                    ? [action.payload]
                    : [...state.cart[action.payload.id], action.payload]
            };

            const allPizzas = [].concat.apply([], Object.values(newItem));
            const totalPrice = getTotalPrice(allPizzas)

            return {
                ...state,
                cart: newItem,
                totalCount: allPizzas.length,
                totalPrice
            }
        },
        deletePizzaCart: (state, action) => {
            const newItems = {
                ...state.cart
            }
            const currentTotalPrice = getTotalPrice(newItems[action.payload]);
            const currentTotalCount = newItems[action.payload].length;
            delete newItems[action.payload]
            state.cart = newItems;
            state.totalPrice = state.totalPrice - currentTotalPrice;
            state.totalCount = state.totalCount - currentTotalCount;
        },
        plusCartItem: (state, action) => {
            const newItem = state.cart[action.payload][0];
            state.cart[action.payload] = [...state.cart[action.payload], newItem];
            state.totalPrice += state.cart[action.payload][0].price;
            state.totalCount += 1;
        },
        minusCartItem: (state, action) => {
            const oldItem = state.cart[action.payload];
            const currentPrice = state.cart[action.payload][0].price;
            if (oldItem.length > 1) {
                state.cart[action.payload] = state.cart[action.payload].slice(1);
                state.totalPrice -= currentPrice;
                state.totalCount -= 1;
            }            
        },
        clearCart: state => {
            state.cart = [];
            state.totalCount = 0;
            state.totalPrice = 0;
        }
    }
});

const {actions, reducer} = cartSlice;

export default reducer;

export const {
    addPizzaCart,
    deletePizzaCart,
    plusCartItem,
    minusCartItem,
    clearCart
} = actions;