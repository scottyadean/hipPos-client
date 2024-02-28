//import React from 'react'
import ItemForm from '../components/item/ItemForm';

import { useDispatch, useSelector } from 'react-redux'; 

export default function ItemsPage() {


  const items = useSelector((state) => state.items)


  return (
    <div> 
      <ItemForm item={items.selected} dispatch={useDispatch()} />
    </div>
  )
}
