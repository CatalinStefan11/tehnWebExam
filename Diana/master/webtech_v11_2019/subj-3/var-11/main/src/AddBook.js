import React from 'react';

export default class AddBook extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bookTitle: '',
            bookType: '',
            bookPrice: 0
        };
    }

    render(){
        return (
        <div>
            
            <input type="text" id="book-title" name="book-title" onChange={this.handleChange}/>
            <input type="text" id="book-type" name="book-type" onChange={this.handleChange}/>
            <input type="text" id="book-price" name="book-price" onChange={this.handleChange}/>
            <input type="button" value="add book" onClick={this.handleAdd}/>
            
        </div>
        );
    }
    handleChange=(event)=>{
        if(event.target.name==="book-title")
            this.setState({
                bookTitle:event.target.value
            })
        if(event.target.name==="book-type")
            this.setState({
                bookType:event.target.value
            })
        if(event.target.name==="book-price")
            this.setState({
                bookPrice:event.target.value
            })
    }
    handleAdd = () => {
        let item = {...this.state};
        this.props.itemAdded(item);
    }
}