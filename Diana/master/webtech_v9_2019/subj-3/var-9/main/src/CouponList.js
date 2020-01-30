import React from 'react';
import AddCoupon from './AddCoupon';

export class CouponList extends React.Component {
    constructor(){
        super();
        this.state = {
            coupons: []
        };
    }
    
    add=(coupon)=>{
        var array=this.state.coupons;
        array.push(coupon);
        this.setState({
            coupons:array
        })
    }

    render(){
        return(
            <div>
                <div>
                    { 
                    this.state.coupons.map( (coupon,index) => 
                        ( <p key={index}> {coupon.category} </p> )
                        
                    )}
                </div>
                
                <AddCoupon onAdd={this.add}/>
                
            </div>
        )
    }
}