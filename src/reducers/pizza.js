const initialState = {
    pizza: [],
    pizzaLoadingStatus: "idle",
    cart: []
}

const pizzas = (state = initialState, action) => {
    switch (action.type) {
        case "PIZZA_FETCHIND":
            return {
                ...state,
                pizzaLoadingStatus: "loading"
            }
        case "PIZZA_FETCHED":
            return {
                ...state,
                pizza: action.payload,
                pizzaLoadingStatus: "idle"
            }
        case "PIZZA_FETCHING_ERROR":
            return {
                ...state,
                pizzaLoadingStatus: "error"
            }
        case "ADD_PIZZA_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        default: return state
    }
}

export default pizzas;