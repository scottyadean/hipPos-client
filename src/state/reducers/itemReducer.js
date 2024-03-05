import { createSlice } from '@reduxjs/toolkit';

export const itemInitialState = {
    rows: [],
    data: [],
    history:[],
    cart: {},
    selected: {},
    status: 'init',
    loading: true,
    error: null
}

export const setItemsReducer = (state, action) => {
    state.rows = [...action.payload.result];
    state.data = state.rows;
    state.loading = false;
    state.status = 'loaded';
};

export const appendNewItem = ( state, action ) => {
    const item = action.payload.result;
    console.log("---------------------------");
    console.log(item);
    console.log("---------------------------");
    
    state.rows.push(item);
}

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

export const addItemToCart = ( state, action ) => {
    const incoming = action.payload;
    const id = incoming.item._id;
    if( Object.prototype.hasOwnProperty.call(state.cart, id) ){        
        state.cart[id].count += incoming.count;
        state.cart[id].price = ( state.cart[id].count * state.cart[id].item.price ); 
    }else{
        state.cart[id] = { count: incoming.count, item: incoming.item, price: incoming.item.price };
    }
}

export const removeItemFromCart = (state, action) => {
    const incoming = action.payload;
    const id = incoming.item._id;
    if( Object.prototype.hasOwnProperty.call(state.cart, id) ){
        if ( state.cart[id].count > 1 ){
            state.cart[id].count -= 1;
            state.cart[id].price = ( state.cart[id].count * state.cart[id].item.price ); 
        }else{ 
           delete(state.cart[id] ); 
        }
    }
}

export const updateItemCartCount = ( state, action ) => {

    const count = action.payload.count;
    const id = action.payload.id;

    if ( count > 0 ){
        state.cart[id].count = count;
        state.cart[id].price = ( state.cart[id].count * state.cart[id].item.price );
    }else{
        delete(state.cart[id] );
    }

    

}


export const selectItemById = ( state, action ) => {
    if( action.payload.reset === true ){
        state.selected = {};
    }else{
        const id = action.payload._id;
        const item = state.rows.filter((r) => r._id === id );
        console.log(item[0]);
        state.selected = {...item[0]};
    }
}

export const ItemSlice = createSlice({
    name: "item",
    initialState: itemInitialState,
    reducers:{
        setItem: setItemsReducer,
        newItem: appendNewItem,
        selectItem: selectItemById,
        addToCart: addItemToCart,
        updateCartCount: updateItemCartCount,
        removeFromCart: removeItemFromCart,
        filterByCategoryItems: filterItemsByCatReducer,
        filterItemsByLetter: filterItemsByLetterReducer,
        filterItemsByKeyword: filterItemsByKeywordReducer,
    }
});


export const { setItem, newItem, filterByCategoryItems, 
               filterItemsByLetter, filterItemsByKeyword,
               selectItem, addToCart, removeFromCart,
               updateCartCount
            } = ItemSlice.actions;
export default ItemSlice.reducer;
