import React from 'react';
import { AddCar } from './AddCar';

export class CarList extends React.Component {
    constructor(){
        super();
        this.state = {
            cars: []
        };
        this.add = (car) => {
            this.state.cars.push(car);
        }
    }   

    render(){
        return (
            <div>
                <h1>
                    A car list
                </h1>
                {
                    this.state.cars.map((e, i) => <div key={i}>
                        <h4>{e.make}</h4>
                        <h4>{e.model}</h4>
                        <h4>{e.price}</h4>
                    </div>)
                }
                <AddCar onAdd={this.add}></AddCar>
            </div>
        )
    }
}