import React, { Component } from 'react';
import Button from '../../UI/Button/Button';
import Styles from './LaunchYears.module.css'

class LaunchYears extends Component {
    state={
        active: null
    }

    onClickHandler= year =>{
        this.setState({active: year })
    }

    render(){
        const years = [];
        for(let i=2006; i<=2020; i++) {
            years.push(i);
        }
        let launchYears = years.map( year => <Button name={year} onClicked={()=> this.onClickHandler(year)} style={this.state.active == year} />);
        return(
            <div className={Styles.LaunchYears}>
                <p> Launch Year </p> 
                {launchYears}
            </div>
        );
    }
    
}

export default LaunchYears;