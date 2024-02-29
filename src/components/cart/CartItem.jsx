import React from 'react'
import { Button } from 'antd';
import {CloseOutlined} from '@ant-design/icons';
import StringUtils from '../../utils/strings';
export default function (props) {


    const {item, dispatch, callback} = props;
    return (
            <tr>
                <td width="50%" title={item.name}>
                    { StringUtils.truncate(item.name, 40) }
                </td> 
                <td>{item.count}</td>
                <td>{StringUtils.currency(item.price)} </td>
                <td>
                    <Button 
                    size='small'
                    className='mb-5'
                    icon={<CloseOutlined />}
                    onClick={()=>dispatch(callback( { item: { _id: item._id, price: item.cost_per_unit } } ))} /> 
                     
                </td>
                
             </tr>

    )
}
