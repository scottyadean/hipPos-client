/* eslint-disable react/prop-types */

import React from 'react';
import { Button, Form, Input, InputNumber, Select} from 'antd';
import { getCategoryList } from '../../state/actions/categoryActions';
import { createItem } from '../../state/actions/itemActions';

const defaultReqMsg = (name) =>{
    return [ { required: true, message: `${name} is required` }]
}



export default class ItemForm extends React.Component {

    data = {}
    state = {
        categoryList: [],
        total: 0,
        data: {},
      }

    formItemLayout = { labelCol: { xs: {span: 24}, sm: {span: 6} }, 
                       wrapperCol: { xs: {span: 24}, sm: {span: 14}}};


    onFormSubmit(_evt){
        //_evt.preventDefault();

        //console.log(this.data);

    }

    async componentDidMount(){
        const catlist = await  getCategoryList(false);
        const cats = catlist.result.map( (c)=>{ return {label: c.name, value: c._id}; });

        const model = {
            "name": "Default",
            "brand": "",
            "description": "",
            "sku": "",
            "price": 0.00,
            "qty": 100,
            "status": "active",
            "category": "65d0b15eec918552395d163f",
            "sub_category": ""
          }

        const data = ( this.props.item ) ? this.props.item : model;

        this.setState({
            categoryList: [...cats],
            total: cats.length, 
            data: {...data}
          });
    }

    onFinish(values){
        
        createItem( values );
        console.log(values);
    }

/**
 * data[ele.target.id] = ele.target.value
 * {
  "name": "Test",
  "brand": "Brand",
  "description": "Test",
  "sku": "123",
  "price": 10.9,
  "qty": 1,
  "status": "active",
  "category": "65d0b15eec918552395d163f",
  "sub_category": "Test"
}
 */

    

    render() {
      return (<div>
            {JSON.stringify(this.data)}
            <Form id='itemForm' 
                onFinish={this.onFinish}
                theme="dark" {...this.formItemLayout} 
                variant="filled" 
                style={{ color: "#f6f6f6", maxWidth: 600 }}>
            
            <Form.Item label="Name" name="name" rules={defaultReqMsg("Unique Item Name")} >
                <Input value={this.state.data.name}  />
            </Form.Item>

            <Form.Item label="Brand" name="brand">
                <Input value={this.state.data.brand} />
            </Form.Item>

            <Form.Item label="Description" name="description" rules={defaultReqMsg("A Description")}>
                <Input.TextArea value={this.state.data.description} />
            </Form.Item>

            <Form.Item label="Sku" name="sku" >
                <Input value={this.state.data.sku} />
            </Form.Item>

            <Form.Item label="Price" name="price" rules={defaultReqMsg("Price")}>
                <InputNumber value={this.state.data.price} style={{ width: '100%'}} />
            </Form.Item>

            <Form.Item label="Quantity" name="qty" rules={defaultReqMsg("Quantity")}>
                <InputNumber value={this.state.data.qty} style={{ width: '100%'}} />
            </Form.Item>

            <Form.Item label="Status" name="status">
                <Select value={this.state.data.status}
                options={[{label: "Active", value:"active" }, {label:"Inactive", value:"inactive" }]} />
            </Form.Item>

            <Form.Item label="Category" name="category">
            <Select 
                    value={this.state.data.category}
                    showSearch                     
                    options={this.state.categoryList}
                    filterOption={(input, option) => {
                    return option.label.toLowerCase().includes(input.toLowerCase());
                    }  }
            />
            </Form.Item>
    
            <Form.Item label="Sub Category" name="sub_category" rules={[{required: true, message: defaultReqMsg("A Sub Category")}]} >
                <Input value={this.data.sub_category} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 6, span: 16 }} >
                <Button type="primary" onClick={this.onFormSubmit} htmlType="submit"> Submit</Button>
            </Form.Item>
        </Form>  

        </div>);
    }//render 

  }//class




// const ItemFormf = () => {
    
    
    //const catsList = useSelector((state) => state.category)
    //const dispatch = useDispatch();
    // const [categoryList, setCategoryList ] = useState();


    // useEffect( ()=>{
    //     // const catOptions = async () => { 
    //     //     const cats = await getCategoryList(false); 
    //     //     const formatCategoryList = (c)=>{ return {label: c.name, value: c._id}; } ;
    //     //     setCategoryList(  cats.result.map( formatCategoryList ));
    //     // }
    //     // catOptions();

    // },[categoryList]);

                            // name: { type: String, unique: true, required: [true, 'Name is required'] },
                            // description: { type: String, default: ""},
                            // brand: { type: String, default: ""},
                            // image: { type: String, default:'http://picsum.photos/500/500?random'},
                            // slug:{ type: String, default: "" },
                            // process: { type: String, default: "scan" },
                            // code: { type: String, unique: true, required: [true, "A unique code is reqired for items"] },
                            // sku: { type: String, default: "" },
                            // qty: { type: Number, default: 0 },
                            // //qty_detail: [qtyByLocation],
                            // attributes: {type: Map, default: ()=>{
                        
                            //     return {
                            //         size: "",
                            //         color:  "",
                            //         width:  0 ,
                            //         heigth:   0 ,
                            //         depth: 0 ,
                            //         unit: "in"
                            //     };    
                        
                        
                            // }},
                            // price: { type: Number, default: 0.0 },
                            // status:{ type: String, default:'active'},
                            // category: { type: mongoose.Schema.Types.ObjectId, ref: 'category' },
                            // sub_category:{ type:String, default: ""},
                            // sold_total: {type: Number, default: 0},
                            // returns_total: {type: Number, default: 0},
                            // created_at: {type: Date, default: new Date},


 

//     return ( <div>

      


//     </div>
//   )
// }



