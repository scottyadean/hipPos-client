//import React from 'react'

import { useSelector } from 'react-redux';
export default function ItemList() {
    const items = useSelector((state) => state.items)  
    return (
    <div>
        <h3>ItemList</h3>
        
        { items.data.map( i=> (  <div key={i._id}> {i.name} </div>  ) )  }
        
        </div>
  )
}
