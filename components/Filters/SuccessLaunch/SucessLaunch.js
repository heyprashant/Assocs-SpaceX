import React, { Component } from 'react';
import Button from '../../UI/Button/Button';

class SuccesLaunch extends Component {
    state={
        active: null
    }

    render(){

        
        return(
            <div>
                <p>Successful Launch</p>
                <Button name="True" onClicked={()=>{this.setState({active : true})}} style={this.state.active} />
                <Button name="False" onClicked={()=>{this.setState({active : false})}} style={this.state.active === false } />
            </div>
        );
    }
    
}

export default SuccesLaunch;