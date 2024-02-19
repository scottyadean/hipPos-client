import axios from 'axios';
import { CATEGORY_TYPES } from '../types/categoryTypes'; 

import { setCategory } from '../reducers/categoryReducer';
const env = await import.meta.env;
const { VITE_APP_API_PATH } = env;

/**
 * @function getCategoryList
 * @description return category rows from ingress api  
 */
export const getCategoryList = async (dispatch) => {
    //let headers = await getAuthHeader({ "Content-Type" : "application/json" }) 
    console.log(env);
    const headers = { "Content-Type" : "application/json" };  
    const url  = `http://localhost:3001/api/category/list`;
    console.log(url);
    axios.get(url, {headers}).then((res)=>{

        dispatch(setCategory({type:CATEGORY_TYPES.GET_CATEGORY_LIST, payload: res.data}) );

    });

}


