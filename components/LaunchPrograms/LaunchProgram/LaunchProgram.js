import React, { Component } from "react";
import Card from "../../UI/Card/Card";
import styles from './LaunchProgram.module.css';

class LaunchProgram extends Component {

  render() {
    return (
      <div className={styles.container}>
          
          <img className={styles.img} 
            src="https://images2.imgbox.com/ab/6f/3l4ib2QW_o.png" />
          
          <section className={styles.section}>
          <h3 style={{margin:"15px 0px 10px 0px" }}>Mission name </h3>
          <b>Mission Ids :</b>
          <ul style={{margin: "0px"}}>
            <li>Mission id 1</li>
            <li>Mission id 2</li>
            <li>Mission id 3</li>
          </ul>
          <p><b>Launch Year : </b> 2006 </p> 
          <p><b>Successful Launch: </b>true</p>
          <p><b>Successful Landing: </b>true</p>
          
          {/* <p>{this.props.flightNumber}</p>
          <p>{this.props.launchYear}</p>
          <p>{this.props.SuccesLaunch}</p>
          <p>{this.props.SuccesLanding}</p> */}
          </section>
      </div>
    );
  }
}

export default LaunchProgram;
