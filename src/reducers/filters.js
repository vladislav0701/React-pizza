const initialState = {
    activeFilter: 0,
}

const filters = (state = initialState, action) => {
    switch (action.type) {
        case "ACTIVE_FILTER":
            return {
                ...state,
                activeFilter: action.payload
            }
        default: return state
    }
}

export default filters;