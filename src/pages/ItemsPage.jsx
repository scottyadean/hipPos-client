//import React from 'react'
import ItemForm from '../components/item/ItemForm';
export default function ItemsPage() {

  const fakeItem = {
    "name": "Test",
    "brand": "Brand",
    "description": "Test",
    "sku": "123",
    "price": 10.9,
    "qty": 1,
    "status": "active",
    "category": "65d0b15eec918552395d163f",
    "sub_category": "Test"
  };

  return (
    <div>
      Add Items 
      <ItemForm item={fakeItem} />
    </div>

  )
}
