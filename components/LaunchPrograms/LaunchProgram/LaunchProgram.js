import React, { Component } from "react";
import Card from "../../UI/Card/Card";
import styles from './LaunchProgram.module.css';

class LaunchProgram extends Component {

  render() {
    return (
      <div className={styles.container}>
        <Card>
        
          <img src="https://images2.imgbox.com/ab/6f/3l4ib2QW_o.png" width='10%'></img>
          {/* <p>{this.props.flightNumber}</p>
          <p>{this.props.launchYear}</p>
          <p>{this.props.SuccesLaunch}</p>
          <p>{this.props.SuccesLanding}</p> */}
        </Card>
      </div>
    );
  }
}

export default LaunchProgram;
