import React, { Component } from 'react'

class MessageForm extends Component {
  constructor(props){
  	super(props)
  	this.state = {
  		content : ''
  	}
  	this.handleChange=(event)=>{
    this.setState({
      [event.target.name]:event.target.value
    });
  }
  }
  
 
  render() {
    return (
      <div>
      <form>
      	<label htmlFor="content">Content</label>
        <input type="text" id="content" value={this.state.content} name="content" onChange={this.handleChange}/>
        <input type="button" value="+" onClick={()=>this.props.onAdd({content:this.state.content})} /> 
        </form>
      </div>
    )
  }
}

export default MessageForm
