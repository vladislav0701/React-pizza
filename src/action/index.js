export const pizzaFetching = () => {
    return {
        type: "PIZZA_FETCHIND"
    }
}

export const pizzaFetched = (pizza) => {
    return {
        type: "PIZZA_FETCHED",
        payload: pizza
    }
}

export const pizzaFetchingError = () => {
    return {
        type: "PIZZA_FETCHING_ERROR"
    }
}