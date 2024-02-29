import * as AntdIcons from '@ant-design/icons';

const DefaultIcons = ({type, ...rest}) => {
    const AntdIcon = AntdIcons[type];
    return <AntdIcon {...rest}/>
  }
export default DefaultIcons;
