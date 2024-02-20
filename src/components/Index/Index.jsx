import { Row, Col } from 'antd';
import CategoryList from "../category/CategoryList"
import ItemList from "../item/ItemList"
import ItemLetterSearch from '../item/ItemLetterSearch';

export default function Index() {
  return (
    <>
      <div className="wrapper">
      
    <Row>
        <Col span={6}>
          <CategoryList />
        </Col>
        <Col span={6}>
          <ItemList />  
        </Col>
        <Col span={12}>
          TEST
        </Col>
    </Row>



        <div className="push"></div>  
      </div>
      <footer className="footer">
        <ItemLetterSearch />
      </footer>
    </>
  )
}
