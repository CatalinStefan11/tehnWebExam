import React, { Component } from 'react'

class Robot extends Component {
  
  constructor(props){
    super(props)
    
  }
  handleClick=()=>{
    let {item}=this.props
    this.props.onSelect(item.id)
  }
  
  
  render() {
  	let {item} = this.props
    return (
      <div>
  		Hello, my name is {item.name}. I am a {item.type} and weigh {item.mass}
  		<input type="button" value="select" onClick={this.handleClick}/>
      </div>
    )
  }
}

export default Robot
