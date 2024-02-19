import { configureStore } from '@reduxjs/toolkit'
import CategoryReducer from '../state/reducers/categoryReducer';
import itemReducer from '../state/reducers/itemReducer';
export const store = configureStore({
  reducer: {
    category: CategoryReducer, 
    items: itemReducer
  },
});
