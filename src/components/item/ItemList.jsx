import PropTypes from 'prop-types';
import { Col, Divider, Row } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { selectItem, addToCart } from '../../state/reducers/itemReducer';

ItemList.propTypes = {
  displayEdit: PropTypes.any
}

export default function ItemList(props) {

    const { displayEdit } = props
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    
    const ItemDisplay = (data)=> {
      const { item } = data;
      return (
            <Row gutter={1} >
            <Col span={10}>
              {item.name}
            </Col>
            <Col span={10}>
              {item.price}
            </Col>
            <Col span={3}>

              { displayEdit && (<a onClick={(_)=>dispatch(selectItem({_id: item._id, reset:false}))}>e</a> )}   

              <CheckCircleOutlined onClick={(_)=>dispatch(addToCart( {item:item, count: 1} ))} />

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