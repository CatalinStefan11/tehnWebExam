import React from 'react'

class RobotDetails extends React.Component{
    
    render(){
        let {item}=this.props
        return(
            <div>
                Details for {item.name}
                <input type="button" value="cancel" onClick={()=>this.props.onCancel()}/>
            </div>
            )
    }
    
}
export default RobotDetails