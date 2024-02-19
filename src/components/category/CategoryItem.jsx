import PropTypes from 'prop-types';
import { List } from 'antd';
import { HomeOutlined, SunOutlined } from '@ant-design/icons'


const getIcon = (name)=> {
    const icons = {  "HomeOutlined": <HomeOutlined />, "SunOutlined":<SunOutlined />  }
    return icons[name];
}


export default function CategoryItem(props) {
    const { data, callback } = props;
    return (
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                <List.Item>
                    <List.Item.Meta
                    avatar={getIcon(item.image)}
                    title={<a href="#" data-index={index} onClick={callback} data-id={item._id} >{item.name}</a>}
                    description={item.description}
                    />
                </List.Item>
                )}
            />

  )
}


CategoryItem.propTypes = {
    data: PropTypes.array, 
    callback: PropTypes.func
  };
