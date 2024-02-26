import axios from 'axios';

import { setCategory } from '../reducers/categoryReducer';
const env = await import.meta.env;
//const { VITE_APP_API_PATH } = env;

/**
 * @function getCategoryList
 * @description return category rows from ingress api  
 */
export const getCategoryList = async (dispatch=false) => {
    //let headers = await getAuthHeader({ "Content-Type" : "application/json" }) 
    try{
        const headers = { "Content-Type" : "application/json" };  
        const url  = `http://localhost:3001/api/category/list`;
        console.log(url);
        console.log(env);
        const res = await axios.get(url, {headers});
        if(dispatch === false){ return res.data }
        dispatch(setCategory(res.data) );
    
    }catch(err){
    
        console.log(err);
    }
    
    

}


