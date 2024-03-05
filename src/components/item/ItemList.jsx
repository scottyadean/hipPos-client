import PropTypes from 'prop-types';
import { Col, Divider, Row, Button } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { selectItem, addToCart } from '../../state/reducers/itemReducer';

import StringUtils from '../../utils/strings';

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
            <Row gutter={0} >
            <Col span={18} onClick={()=>dispatch(addToCart( {item:item, count: 1} ))} style={{cursor:"pointer"}}>
              {StringUtils.truncate(item.name) }
            </Col>
            <Col span={4}>
              {StringUtils.currency(item.price)}
            </Col>
            <Col span={2} className='mb-5' >

              { displayEdit && (<a onClick={()=>dispatch(selectItem({_id: item._id, reset:false}))}>e</a> )} 
                <Button size='small' icon={<CheckCircleOutlined  />}  onClick={()=>dispatch(addToCart( {item:item, count: 1} ))} />

                

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