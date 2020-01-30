import React,{Component} from 'react'

class RobotForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            type: '',
            mass: ''
        }
        this.handleChange = (evt) => {
            this.setState({
                [evt.target.name]: evt.target.value
            })
        }
        this.handleNameChange = (evt) =>{
            this.setState({
                name : evt.target.value
            })
        }

    }

    addRobot = () => {
        let robot = {
            name: this.state.name,
            type: this.state.type,
            mass: this.state.mass
        };
        this.props.onAdd(robot);
    }

    render() {
        return <div>
            <input type="text" id="name"  placeholder="name" onChange={this.handleChange} name="name" />
            <input type="text" id="type"  placeholder="type" onChange={this.handleChange} name="type" />
            <input type="text" id="mass"  placeholder="mass" onChange={this.handleChange} name="mass" />
            <input type="button" value="add" onClick={() => this.props.onAdd({
                name: this.state.name,
                type: this.state.type,
                mass: this.state.mass
            })} />
        </div>
    }
}

export default RobotForm