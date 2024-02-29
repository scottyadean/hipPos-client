//import React from 'react'
import { removeFromCart } from '../../state/reducers/itemReducer';
import { useSelector, useDispatch } from "react-redux";

export default function CartView() {

    const dispatch = useDispatch();

    const cart = useSelector((state)=>state.items.cart)
    const renderCartItems = (collection) => {
        const html = [];
        for( let key in collection){
            let data = collection[key]; 
            html.push( { _id: key, count: data.count, name: data.item.name, price: data.price, cost_per_unit: data.item.price } );
        }

        
        return html; 
    }

  return (
    <div>
        cart view
        { renderCartItems(cart).map( (c)=>(
        <div key={`cart-item-${c._id}`}> 
           
            {c.name}  | {c.count} | {c.price} |
             <button onClick={()=>dispatch(removeFromCart( { item: { _id: c._id, price: c.cost_per_unit } } ))}> remove </button>
        
        </div>) )  }
    </div>
  )
}
