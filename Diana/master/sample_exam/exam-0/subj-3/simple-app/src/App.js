import React, { Component } from 'react'
import './App.css'
import Message from './Message.js'
import MessageForm from './MessageForm.js'

class App extends Component {
  constructor(){
    super()
    this.state = {
      messages : [{
        content : 'first test message'
      },{
        content : 'second test message'
      }] 
    }
    this.addMessage = (message) => {
      let prevMessages = this.state.messages
      prevMessages.push(message)
      this.setState({
        messages : prevMessages
      })
    }
  }
  render() {
    return (
      <div>
        {this.state.messages.map((e,i) => <Message key={i} item={e}/>)}
        <MessageForm onAdd={this.addMessage} />
      </div>
    )
  }
}

export default App
