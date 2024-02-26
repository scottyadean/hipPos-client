import PropTypes from 'prop-types';
import { HomeOutlined, SunOutlined } from '@ant-design/icons'


const getIcon = (name)=> {
    const icons = {  "HomeOutlined": <HomeOutlined />, "SunOutlined":<SunOutlined />  }
    return icons[name];
}


export default function CategoryItem(props) {
    const { data, callback } = props;
    const ListItem = (item, index) => {
        return (<div key={`cat-${index}`} className='cat-list'>
                    {getIcon(item.image)} 
                    <a href="#" className='link' data-index={index} onClick={callback} data-id={item._id} >{item.name}</a> 
                </div>);
    }
    
    return (<div>                
                {data.map((item, idx)=>ListItem(item, idx))}
            </div>)
}


CategoryItem.propTypes = {
    data: PropTypes.array, 
    callback: PropTypes.func
  };
