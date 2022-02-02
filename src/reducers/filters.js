const initialState = {
    activeFilter: 0,
    activeSort: 'popularity'
}

const filters = (state = initialState, action) => {
    switch (action.type) {
        case "ACTIVE_FILTER":
            return {
                ...state,
                activeFilter: action.payload
            }
        case "ACTIVE_SORT":
            return {
                ...state,
                activeSort: action.payload
            }
        default: return state
    }
}

export default filters;