import React, { Component } from 'react';

class Filters extends Component {
    state = {
        launchYear: null,
        launchSuccess: null,
        landSuccess: null
    }

    render() {
        return (<div>
            <p>Launchyears</p>
            <p>SuccessLaunch</p>
            <p>SuccessLanding</p>
            
        </div>);
    }
}

export default Filters;