import { createSlice } from '@reduxjs/toolkit';

export const categoryInitialState = {
    rows: [{ name: "Produce" }],
    data: [],
    history:[],
    selected: null,
    status: 'init',
    loading: true,
    error: null
}

export const setCategoryReducer = (state, action) => {
    state.rows = action.payload.payload.result;
    state.loading = false;
};

export const categorySlice = createSlice({
    name: "category",
    initialState: categoryInitialState,
    reducers:{
        setCategory: setCategoryReducer 
    }
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;
