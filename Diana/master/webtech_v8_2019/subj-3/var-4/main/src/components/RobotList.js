import React, { Component } from 'react'
import RobotStore from '../stores/RobotStore'
import Robot from './Robot'

// TODO: adăugați posibilitatea de a filtra roboții după name și type
// filtrarea se face pe baza a 2 text input-uri și se produce la fiecare tastă apăsată

// TODO: add the possiblity to filter robots according to name and type
// filtering is done via 2 text inputs and happens whenever a key is pressed

class RobotList extends Component {
	constructor(){
		super()
		this.state = {
			robots : [],
			nameFilter:'',
			typeFilter:''
		}
	}
	componentDidMount(){
		this.store = new RobotStore()
		this.setState({
			robots : this.store.getRobots()
		})
		this.store.emitter.addListener('UPDATE', () => {
			this.setState({
				robots : this.store.getRobots()
			})			
		})
	}
	handleChange=(event) => {
		this.setState({
			[event.target.name]:event.target.value
		})
	}
	render() {
		let robots=this.state.robots.filter((robots) => robots.name.indexOf(this.state.nameFilter)!==-1)
									.filter((robots) => robots.type.indexOf(this.state.typeFilter)!==-1)
		return (
			<div>
				<div>
					<input type="text" id="nameFilter" name="nameFilter" onChange={this.handleChange}/>
					<input type="text" id="typeFilter" name="typeFilter" onChange={this.handleChange}/>
				</div>
				{
					robots.map((e, i) => 
						<Robot item={e} key={i} />
					)
				}
			</div>
		)
	}
}

export default RobotList
