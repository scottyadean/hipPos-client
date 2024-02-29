//import React from 'react'
import { removeFromCart } from '../../state/reducers/itemReducer';
import { useSelector, useDispatch } from "react-redux";
import { Divider} from 'antd';
import CartItem from './CartItem';

export default function CartView() {

    const dispatch = useDispatch();

    const cart = useSelector((state)=>state.items.cart)
    const formatCartItems = (collection) => {
        const output = [];
        for( let key in collection){
            let data = collection[key]; 
            output.push( { _id: key, count: data.count, name: data.item.name, price: data.price, cost_per_unit: data.item.price } );
        }
        return output; 
    }

  return (
    <div>
    <h3 className='pos-h3'>Cart</h3>
    <Divider style={{borderBottom:"1px solid #333",padding:0, margin: 5}} />

    <table style={{width:"100%"}}>
        <tbody>
        { formatCartItems(cart).map( (item, idx)=>( <CartItem 
                                                      item={item} 
                                                      key={idx} 
                                                      callback={ removeFromCart } 
                                                      dispatch={dispatch} /> ) )  }
        </tbody>
    </table>
    </div>)
}
