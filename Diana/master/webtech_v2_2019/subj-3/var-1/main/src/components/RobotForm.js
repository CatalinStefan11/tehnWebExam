import React from 'react';

class RobotForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            type:'',
            mass:''
        }
    }
    
    handleAdd=()=>this.props.onAdd({
      name:this.state.name,
      type:this.state.type,
      mass:this.state.mass
    })
    handleChange=(event)=>{
        this.setState({
           [event.target.name]:event.target.value 
        });
    }
    
    render() {
		return (
			<div>
				 <input name='name' id="name" type="text" onChange={this.handleChange}/>
				 <input name='type' id="type" type="text" onChange={this.handleChange}/>
				 <input name='mass' id="mass" type="text" onChange={this.handleChange}/>
				 <input type="button" value="add" onClick={this.handleAdd}/>
			
			</div>
		)
	}
}

export default RobotForm;