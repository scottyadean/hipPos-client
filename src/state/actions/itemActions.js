import axios from "axios";
import { setItem, newItem, filterByCategoryItems, filterItemsByLetter } from "../reducers/itemReducer"; 
import { useDispatch } from "react-redux";

export const getItemList = async ( dispatch ) => {
    //let headers = await getAuthHeader({ "Content-Type" : "application/json" }) 
    const headers = { "Content-Type" : "application/json" };  
      const url  = `http://localhost:3001/api/item/list`;
      
      axios.get(url, {headers}).then((res)=>{
          dispatch(setItem(res.data) );
      });
}

export const createItem = async (data) => {


    
    //http://localhost:3001/api
    const headers = { "Content-Type" : "application/json" };
    const url  = `http://localhost:3001/api/item/create`;

    axios.post(url,  data,  { headers}).then((res)=>{
        
        const dispatch = useDispatch();
        dispatch(newItem(res.data));

        
    });
}


export const filterByLetter = async ( dispatch, letter ) => {
    dispatch( filterItemsByLetter({ letter }) );
}

export const filterByCat = async (dispatch, id) =>{
    dispatch(  filterByCategoryItems( { id } )  );
}