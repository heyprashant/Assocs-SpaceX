import React, { Component } from 'react';
import LaunchProgram from './LaunchProgram/LaunchProgram';
import styles from './LaunchPrograms.module.css';

class LaunchPrograms extends Component {
    state= {
        data: []
    }
    componentDidMount() {
        this.setState({
            data: this.props.data
        })
        console.log(this.props.data);
       
    }
    render() {
        
        // let programs = this.props.data.map( mission => <LaunchProgram key={mission.flight_number} flightNumber={mission.flight_number}  />)
        return (<div className ={styles.LaunchPrograms}>
                <LaunchProgram></LaunchProgram>
        </div>);
    }
}

export default LaunchPrograms;