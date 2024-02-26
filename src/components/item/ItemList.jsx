//import React from 'react'
import { Col, Divider, Row } from 'antd';
import { useSelector } from 'react-redux';
export default function ItemList() {
    const items = useSelector((state) => state.items)
    const ItemDisplay = (props)=> {
      const { item } = props;
      
      return (
            <Row gutter={1} >
            <Col span={12}>
              {item.name}
            </Col>
            <Col span={10}>
              {item.price}
            </Col>
            <Col span={2}>
              +
            </Col>
          </Row>);

    }  
    return (
        <div>
        <h3 className='pos-h3'>Items</h3>
        <Divider style={{borderBottom:"1px solid #333",padding:0, margin: 5}} />
        { items.data.map( i=> (  <ItemDisplay item={i} key={i._id} />  ) )  }
        </div>)
}
