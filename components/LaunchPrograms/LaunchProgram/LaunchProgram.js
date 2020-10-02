import React, { Component } from "react";
import Card from "../../UI/Card/Card";
import styles from './LaunchProgram.module.css';

class LaunchProgram extends Component {

  render() {
    return (
      <div className={styles.container}>
          {/* https://images2.imgbox.com/ab/6f/3l4ib2QW_o.png */}
          <img className={styles.img} 
            src= {this.props.imageSrc} />

          <section className={styles.section}>
          <h3 style={{margin:"15px 0px 10px 0px" , lineHeight: "normal"}}>{this.props.missionName}#{this.props.flightNumber} </h3>
          <b>Mission Ids :</b>
          <ul style={{margin: "0px",  lineHeight: "normal"}}>
            {this.props.missionId.map((item, index)=>(
              <li key={index}>{item} </li>
            ))}
          </ul>
          <p><b>Launch Year : </b> {this.props.launchYear} </p> 
          <p><b>Successful Launch: </b>{this.props.launchSuccess? "True" : "False"}</p>
          <p><b>Successful Landing: </b>{this.props.launchLanding? "True" : "False" }</p>
          
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
