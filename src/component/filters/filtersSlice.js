import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeFilter: 'all',
    activeSort: 'popularity'
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        actionFilters: (state, action) => {
            state.activeFilter = action.payload;
        },
        actionSort: (state, action) => {
            state.activeSort = action.payload
        }
    }
});

const {actions, reducer} = filtersSlice;

export default reducer;

export const {
    actionFilters,
    actionSort
} = actions;