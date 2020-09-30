import React, { Component } from 'react';
import Card from '../UI/Card/Card';
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
        return (<div>
            <Card>
            <h2>Filters</h2>
            <LaunchYears/>
            <SuccessLaunch/>
            <SuccessLanding/>
            </Card>
        </div>);
    }
}

export default Filters;