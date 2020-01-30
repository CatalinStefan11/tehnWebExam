import React from 'react';

export class AddCoupon extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            category: '',
            discount: '',
            availability: ''
        };
    }

    addCoupon = () => {
        let coupon = {
            category: this.state.category,
            discount: this.state.discount,
            availability: this.state.availability
        };
        this.props.onAdd(coupon);
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render(){
        return(
            <div>
                <input type="text" id="category" name="category" onChange={this.handleChange}/>
                <input type="text" id="discount" name="discount" onChange={this.handleChange}/>
                <input type="text" id="availability" name="availability" onChange={this.handleChange}/>
                <input type="button" value="add coupon" onClick={this.addCoupon}/>
            </div>
        )
    }
}
export default AddCoupon;