import React, { Component } from 'react';
import styles from './Filters.module.css';
import LaunchYears from './LaunchYears/LaunchYears';
import SuccessLaunch from './SuccessLaunch/SucessLaunch';
import SuccessLanding from './SuccessLanding/SucessLanding';

class Filters extends Component {

    render() {
        return (
        <div className= {styles.container}>    
            <h2 className={styles.header}>Filters</h2>
            <LaunchYears yearHandler={this.props.launchYear}/>
            <SuccessLaunch  SuccessHandler={this.props.launchSuccess} />
            <SuccessLanding landHandler={this.props.landSuccess} disable={this.props.disable}/>
        </div>);
    }
}

export default Filters;