import React from 'react';

export class AddCar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            make: '',
            model: '',
            price: ''
        }
        this.handleChance = (evt) => {
            this.setState({
                [evt.target.name] : evt.target.value
            })
        }
    }

    

    addCar = () => {
        let car = {
            make: this.state.make,
            model: this.state.model,
            price: this.state.price
        };
        this.props.onAdd(car);
    }

    render(){
        return (
            <div>
                <input type="text" id="make" onChange={this.handleChance} name="make" />
                <input type="text" id="model" onChange={this.handleChance} name="model" />
                <input type="text" id="price" onChange={this.handleChance} name="price" />
                <input type="button" value="add car" onClick={() => this.props.onAdd()} />
            </div>
        )
    }
}