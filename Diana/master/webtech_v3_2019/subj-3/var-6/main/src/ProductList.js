import React from 'react';
import AddProduct from './AddProduct'

export class ProductList extends React.Component {
    constructor(){
        super();
        this.state = {
            products: []
        };
    }
    add=(product)=>{
        var newProducts=this.state.products;
        newProducts.push(product);
        this.setState({
            products:newProducts
        })
        
    }
    render(){
        return(
            <div>
            <AddProduct onAdd={this.add}/>
            </div>
        )
    }
}