const initialState = {
    pizza: [],
    pizzaLoadingStatus: "idle",
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
        default: return state
    }
}

export default pizzas;