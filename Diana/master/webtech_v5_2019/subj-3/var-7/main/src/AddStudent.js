import React from 'react';

export class AddStudent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            surname: '',
            age: ''
        };
    }

    addStudent = () => {
        let student = {
            name: this.state.name,
            surname: this.state.surname,
            age: this.state.age
        };
        this.props.onAdd(student);
    }
    handleChange =(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    render(){
        return (
            <div>
                <input type="text" id="name" name="name" onChange={this.handleChange}/>
                <input type="text" id="surname" name="surname" onChange={this.handleChange}/>
                <input type="text" id="age" name="age" onChange={this.handleChange}/>
                <input type="button" value="add student" onClick={this.addStudent}/>
            </div>
        )
    }
}
export default AddStudent;