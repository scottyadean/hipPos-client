import { createSlice } from '@reduxjs/toolkit';

export const itemInitialState = {
    rows: [],
    data: [],
    history:[],
    selected: null,
    status: 'init',
    loading: true,
    error: null
}

export const setItemsReducer = (state, action) => {
    state.rows = action.payload.result;
    state.data = state.rows;
    state.loading = false;
    state.status = 'loaded';
};

export const filterItemsByCatReducer = ( state, action ) => {
    const category = action.payload.id;
    state.data = state.rows.filter( r=>r.category === category );
};

export const filterItemsByLetterReducer = ( state, action ) => {
    const startsWith = (str, letter) => {
        return str[0].toLowerCase() === letter.toLowerCase();
    }
    const letter = action.payload.letter;
    state.data = state.rows.filter((r) => startsWith(r.name, letter) );
};

export const filterItemsByKeywordReducer = ( state, action ) => {
    const containsValue = (str, term) => {
        return str.toLowerCase().includes(term.toLowerCase());
    }
    const term = action.payload.term;
    state.data = state.rows.filter((r) => containsValue(r.name, term) );
};

export const selectItemById = ( state, action ) => {
    const id = action.payload.id;
    const item = state.rows.filter((r) => r.id === id );
    state.selected = item[0]; 
}

export const ItemSlice = createSlice({
    name: "item",
    initialState: itemInitialState,
    reducers:{
        setItem: setItemsReducer,
        filterByCategoryItems: filterItemsByCatReducer,
        filterItemsByLetter: filterItemsByLetterReducer,
        filterItemsByKeyword: filterItemsByKeywordReducer,
    }
});

export const { setItem, filterByCategoryItems, filterItemsByLetter, filterItemsByKeyword } = ItemSlice.actions;
export default ItemSlice.reducer;
