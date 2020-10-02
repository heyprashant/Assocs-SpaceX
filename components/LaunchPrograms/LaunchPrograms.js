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
        
        let programs = this.state.data.map( (item,index) => <LaunchProgram 
                        key={index} 
                        flightNumber={item.flight_number} 
                        missionName={item.mission_name} 
                        missionId={item.mission_id} 
                        launchYear={item.launch_year}
                        launchSuccess={item.launch_success}
                        imageSrc={item.links.mission_patch} 
                        launchLanding={item.launch_landing}/>)
        return (<
            div className ={styles.container}>
               {programs}

        </div>);
    }
}

export default LaunchPrograms;