import React, { Component } from 'react';
import Filters from '../Filters/Filters';
import LaunchPrograms  from '../LaunchPrograms/LaunchPrograms';
import styles from './Layout.module.css';

class Layout extends Component {
    

    render() {
        return (<div className = {styles.Layout} >
            <h1>SpaceX Launch Programs</h1>
            <Filters />
            <LaunchPrograms />
        </div>);
    }
}

export default Layout;