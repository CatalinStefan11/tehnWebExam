import React from 'react';

export class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            category: '',
            price: ''
        };
        this.handleChance = (evt) => {
            this.setState({
                [evt.target.name] : evt.target.value
            })
        }
    }

    addProduct = () => {
        let product = {
            name: this.state.name,
            category: this.state.category,
            price: this.state.price
        };
        this.props.onAdd(product);
    }

    render() {
        return (
            <div>
                <input type="text" id="name" onChange={this.handleChance} name="name" />
                <input type="text" id="category" onChange={this.handleChance} name="category" />
                <input type="text" id="price" onChange={this.handleChance} name="price" />
                <input type="button" value="add product" onClick={() => this.props.onAdd()} />
            </div>
        )
    }
}