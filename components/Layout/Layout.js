import React, { Component } from 'react';
import Filters from '../Filters/Filters';
import LaunchPrograms  from '../LaunchPrograms/LaunchPrograms';
import styles from './Layout.module.css';

class Layout extends Component {
    

    render() {
        return (<div className = {styles.Layout} >
            <div><h1>SpaceX Launch Programs</h1></div>

            <div className = {styles.body}>
             <Filters /> 
             <LaunchPrograms />
             </div>

             <div className={styles.footer}>Developed by : Prashant</div>
        </div>);
    }
}

export default Layout;