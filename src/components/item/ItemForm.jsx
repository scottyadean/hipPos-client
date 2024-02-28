import PropTypes from 'prop-types';
import React from 'react';
import { Button, Form, Input, InputNumber, Select} from 'antd';
import { getCategoryList } from '../../state/actions/categoryActions';
import { createItem } from '../../state/actions/itemActions';

const defaultReqMsg = (name) =>{
    return [ { required: true, message: `${name} is required` }]
}

export default class ItemForm extends React.Component {
    
    state = {
        categoryList: [],
        total: 0,
        data: {}, 
        dispatch: null
      }

    formItemLayout = { labelCol: { xs: {span: 24}, sm: {span: 6} }, 
                       wrapperCol: { xs: {span: 24}, sm: {span: 14}}};

    async componentDidMount(){
        const catlist = await  getCategoryList(false);
        const cats = catlist.result.map( (c)=>{ return {label: c.name, value: c._id}; });

        const model = {
            "name": "",
            "brand": "",
            "description": "",
            "sku": "",
            "price": 0.00,
            "qty": 100,
            "status": "active",
            "category": "65d0b15eec918552395d163f",
            "sub_category": ""
          }

        const data = ( this.props.item && Object.keys(this.props.item).length > 0 ) ? this.props.item : model;

        this.setState({
            categoryList: [...cats],
            total: cats.length, 
            data: {...data}, 
            dispatch: this.props.dispatch
          });
    }

    onFinish(values){ 

        console.log(this.state);  
        createItem( values, this.state.dispatch );
    }

    renderIdField(){
        if( this.props &&  Object.prototype.hasOwnProperty.call(this.props,  'item' )  ){
            const { item }  = this.props;
            if(  Object.prototype.hasOwnProperty.call( item, '_id' )  ){
                return (  <Input type="hidden" name="_id" id="_id" value={this.props.item._id} />  );
            }
        }
        return '';
    }

    initItems(){
        const formValues = []
        for(let key in this.state.data){
            formValues.push ( { name: key, value: this.state.data[key] });
        }
        return formValues;
    }

    render() {
      return (<Form id='itemForm' 
                    onFinish={(values)=>this.onFinish( values, this.state )}
                    fields={this.initItems()}
                    theme="dark" {...this.formItemLayout} 
                    variant="filled" 
                    style={{ color: "#f6f6f6", maxWidth: 600 }}>
            
                <Form.Item label="Name" name="name" rules={defaultReqMsg("Unique Item Name")} >
                    <Input value={this.state.data.name}  />
                </Form.Item>

                {this.renderIdField()}

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
                    <Input value={this.state.data.sub_category} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 6, span: 16 }} >
                    <Button type="primary" onClick={this.onFormSubmit} htmlType="submit"> Submit</Button>
                </Form.Item>
        </Form>);
    }//render 
  }//class

  
  ItemForm.propTypes = {
    item: PropTypes.objectOf(PropTypes.any), 
    dispatch: PropTypes.func
  }

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
