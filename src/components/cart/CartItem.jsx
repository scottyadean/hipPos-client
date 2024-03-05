//import React from 'react'
import PropTypes from 'prop-types';
import { Button } from 'antd';
import {CloseOutlined, EditOutlined} from '@ant-design/icons';
import StringUtils from '../../utils/strings';


const CartItem = (props) => {

    

    const {item, dispatch, callback, changeQty} = props;
    
    const updateQty = (evt)=>{ 
            const id =  evt.target.getAttribute('data');
            const ele = document.getElementById( `qty-${id}` )
            const count = ele.value;
            if( count !=="" && parseInt(count) >= 0 ){
                dispatch( changeQty( { count, id  }  )  );
            } 
    }

    return (<tr key={item._id}>
                <td width="50%" title={item.name}> { StringUtils.truncate(item.name, 40) }</td> 
                <td> <input type="text" 
                            className='sm-input'
                            placeholder={`${item.count}`} 
                            id={`qty-${item._id}`}
                            size={2}
                            data={item.count}  /> 
                            <button className='sm-btn' data={item._id} onClick={updateQty} >ஃ</button>
                </td>
                <td>{StringUtils.currency(item.price)} </td>
                <td>
                    <Button 
                    size='small'
                    className='mb-5'
                    icon={<CloseOutlined />}
                    onClick={()=>dispatch(callback( { item: { _id: item._id, price: item.cost_per_unit } } ))} /> 
                </td>
             </tr>);
    }; //end react function

CartItem.propTypes = {
    item: PropTypes.object,
    dispatch: PropTypes.func,
    callback: PropTypes.func,
    changeQty: PropTypes.func
}


export default CartItem;




