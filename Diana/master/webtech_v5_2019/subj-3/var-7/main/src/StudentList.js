import React from 'react';
import AddStudent from './AddStudent'

export class StudentList extends React.Component {
    constructor(){
        super();
        this.state = {
            students: []
        };
    }
    add=(student)=>{
        var temp=this.state.students;
        temp.push(student);
        this.setState({
            students:temp
        })
    }
    render(){
        return (
            <div>
                <AddStudent onAdd={this.add}/>
            </div>
        )
    }
}