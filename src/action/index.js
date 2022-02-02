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

export const toggleActiveFilter = (category) => {
    return {
        type: "ACTIVE_FILTER",
        payload: category
    }
}

export const filteredPizza = (arr) => {
    return {
        type: "FILTERED_PIZZA",
        payload: arr
    }
}

export const toggleActiveSort = (sort) => {
    return {
        type: "ACTIVE_SORT",
        payload: sort
    }
}

export const addPizzaCart = (item) => {
    return {
        type: "ADD_PIZZA_CART",
        payload: item
    }
}