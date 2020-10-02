import React, { Component } from 'react';
import styles from './Filters.module.css';
import LaunchYears from './LaunchYears/LaunchYears';
import SuccessLaunch from './SuccessLaunch/SucessLaunch';
import SuccessLanding from './SucessLanding/SucessLanding';

class Filters extends Component {
    state = {
        launchYear: null,
        launchSuccess: null,
        landSuccess: null
    }

    render() {
        return (
        <div className= {styles.container}>    
            <h2 className={styles.header}>Filters</h2>
            <LaunchYears/>
            <SuccessLaunch/>
            <SuccessLanding/>
        </div>);
    }
}

export default Filters;