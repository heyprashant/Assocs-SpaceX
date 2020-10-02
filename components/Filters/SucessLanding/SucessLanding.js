import React, { Component } from 'react';
import Button from '../../UI/Button/Button';
import styles from './SucessLanding.module.css';

class SuccesLand extends Component {
    state={
        active: null
    }

    render(){

        return(
            <div className={styles.container}>
                 <span className= {styles.header}> 
                    Successful Landing
                    <div className={styles.borderBottom}></div> 
                </span> 

                <Button name="True" onClicked={()=>{this.setState({active : true})}} style={this.state.active} />
                <Button name="False" onClicked={()=>{this.setState({active : false})}} style={this.state.active === false } />
            </div>
        );
    }
    
}

export default SuccesLand;