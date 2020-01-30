import React, { Component } from 'react'

// TODO : adăugați posibilitatea de a edita un robot 
// editarea se face prin intermediul unui robot cu 2 stări, una de vizualizare și una de editare

// TODO : add the posibility to edit a robot 
// editing is done via 2 states a view state and an edit state

class Robot extends Component {
	constructor(props){
		super(props)
		let {item}=this.props
		this.state={
			edit:false,
			name:item.name,
			type:item.type,
			mass:item.mass
		}
	}
	handleClick=()=>{
		this.setState({
			edit:true
		})
	}
	handleClickCancel=()=>{
		this.setState({
			edit:false
		})
	}
	handleClickSave=()=>{
		let {item}=this.props;
		this.props.onSave(item.id, 
		{
			name:this.state.name,
			type:this.state.type,
			mass:this.state.mass
		})
		this.setState({
			edit:false
		})
	}
	handleChange=(event)=>{
		this.setState({
			[event.target.name]:event.target.value
		})
	}
	render() {
		let {item} = this.props
		if(this.state.edit){
			return(<div>
			Hello, my name is
			<input type="text" id="name" name='name' value= {item.name} onChange={this.handleChange}/>.
			I am a 
				<input type="text" id="type" name='type' value= {item.type} onChange={this.handleChange}/>
			and weigh 
				<input type="text" id="mass" name='mass' value= {item.mass} onChange={this.handleChange}/>
				
				<input type="button" value="cancel" onClick={this.handleClickCancel}/>
				<input type="button" value="save" onClick={this.handleClickSave}/>
			</div>)
		}
		else{
		return (
			<div>
				Hello, my name is {item.name}. I am a {item.type} and weigh {item.mass}
				<input type="button" value="edit" onClick={this.handleClick}/>
				
			</div>
		)
	}}
}

export default Robot
