import React from 'react';

export class AddProduct extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            category: '',
            price: ''
        };
    }

    addProduct = () => {
        let product = {
            name: this.state.name,
            category: this.state.category,
            price: this.state.price
        };
        this.props.onAdd(product);
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render(){
        return (
            <div>
                <input type="text" id="name" name="name" onChange={this.handleChange}/>
                <input type="text" id="category" name="category" onChange={this.handleChange}/>
                <input type="text" id="price" name="price" onChange={this.handleChange}/>
                <input type="button" value="add product" onClick={this.addProduct}/>
            </div>
        )
    }
}
export default AddProduct;