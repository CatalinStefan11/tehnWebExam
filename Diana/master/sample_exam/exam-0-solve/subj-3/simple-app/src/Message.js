import React, { Component } from 'react'
import './App.css'
import './Message.js'

class Message extends Component {
  render() {
    return (
      <div>
        {this.props.item.content}
      </div>
    )
  }
}

export default Message
