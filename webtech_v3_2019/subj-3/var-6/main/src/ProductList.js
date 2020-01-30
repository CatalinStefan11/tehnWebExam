import React from 'react';
import { AddProduct} from "./AddProduct"
export class ProductList extends React.Component {
    constructor(){
        super();
        this.state = {
            products: []
        };
        this.add = (product) => {
            this.state.products.push(product);
        }
    }

    render(){
        return(
            <div>
            
                <AddProduct onAdd={this.add}></AddProduct>
            </div>
        )
    }
}