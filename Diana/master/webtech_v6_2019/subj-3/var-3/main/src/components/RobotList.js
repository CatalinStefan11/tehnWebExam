import React, { Component } from 'react'
import RobotStore from '../stores/RobotStore'
import Robot from './Robot'
import RobotDetails from './RobotDetails'

// TODO : adăugați posibilitatea de a vizualiza detaliile unui robot
// RobotList are 2 stări una de detalii și una de listă
// se poate trece în starea de detalii printr-un buton pe fiecare robot
// se poate trece înapoi la listă printr-un buton de anulare

class RobotList extends Component {
	constructor(){
		super()
		this.state = {
			robots : [],
			selected:null
		}
		
		
	}
	selectRobot=(id)=>{
		this.store.selectRobot(id)
	}
	handleCancel = ()=>{
		this.setState({
			selected:null
		})
	}
	componentDidMount(){
		this.store = new RobotStore()
		this.setState({
			robots : this.store.getRobots(),
			selected:null
		})
		this.store.emitter.addListener('UPDATE', () => {
			this.setState({
				robots : this.store.getRobots(),
				selected:this.store.getSelected()
			})			
		})
	}
	render() {
		if(!this.state.selected)
			return (
				<div>		 
				{
					this.state.robots.map((e, i) => 
						<Robot item={e} key={i} onSelect={this.selectRobot}/>
					)
				}
				</div>
			)
		else{
				return (
			<RobotDetails item={this.state.selected} onCancel={this.handleCancel}/>
			)
		}
	}
}

export default RobotList
