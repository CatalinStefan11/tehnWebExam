import React from 'react';
import AddBook from './AddBook'; 

export default class BookList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
          };
    }
    added=(book)=>{
        let data_temp=this.state.data;
        data_temp.push(book);
        this.setState({
            data:data_temp
        })
    }
    render() {
        return (
            <div>
                <AddBook itemAdded={this.added}/>
            </div>
        );
    }
}