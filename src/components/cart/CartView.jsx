//import React from 'react'

import { useSelector } from "react-redux";

export default function CartView() {

    const cart = useSelector((state)=>state.items.cart)
    const renderCartItems = (collection) => {
        const html = [];
        for( let key in collection){
            let data = collection[key]; 
            html.push( { _id: key, count: data.count, name: data.item.name, price: data.price } );
        }

        
        return html; 
    }

  return (
    <div>
        cart view
        { renderCartItems(cart).map( (c)=>(
        <div key={`cart-item-${c._id}`}> 
        
            {c.name}  | {c.count} | {c.price} 
        
        </div>) )  }
    </div>
  )
}
