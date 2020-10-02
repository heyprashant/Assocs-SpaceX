import React, { Component } from 'react';
import styles from './Filters.module.css';
import LaunchYears from './LaunchYears/LaunchYears';
import SuccessLaunch from './SuccessLaunch/SucessLaunch';
import SuccessLanding from './SucessLanding/SucessLanding';

class Filters extends Component {

    render() {
        return (
        <div className= {styles.container}>    
            <h2 className={styles.header}>Filters</h2>
            <LaunchYears yearHandler={this.props.launchYear}/>
            <SuccessLaunch  SuccessHandler={this.props.launchSuccess} />
            <SuccessLanding landHandler={this.props.landSuccess}/>
        </div>);
    }
}

export default Filters;