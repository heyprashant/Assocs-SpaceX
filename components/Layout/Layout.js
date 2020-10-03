import React, { Component } from "react";
import Filters from "../Filters/Filters";
import LaunchPrograms from "../LaunchPrograms/LaunchPrograms";
import styles from "./Layout.module.css";
import Router from "next/router";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      launchYear: null,
      launchSuccess: null,
      landSuccess: null,
      data: props.data,
    };
  }
  componentDidMount() {
    Router.replace(Router.pathname, "/");
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.launchYear !== this.state.launchYear ||
      prevState.launchSuccess !== this.state.launchSuccess ||
      prevState.landSuccess !== this.state.landSuccess
    ) {
      let queryParams = "";

      if (this.state.launchSuccess != null) {
        if (queryParams.length > 0) {
          queryParams += "&";
        }
        queryParams += "launch_success=" + this.state.launchSuccess.toString();
      }
      if (this.state.landSuccess != null) {
        if (queryParams.length > 0) {
          queryParams += "&";
        }
        queryParams += "land_success=" + this.state.landSuccess.toString();
      }
      if (this.state.launchYear) {
        if (queryParams.length > 0) {
          queryParams += "&";
        }
        queryParams += "launch_year=" + this.state.launchYear;
      }

      if (queryParams) {
        Router.push("?" + queryParams);
      }

      if (queryParams == null) {
        this.setState({ data: this.props.data });
      } else {
        fetch(
          `https://api.spaceXdata.com/v3/launches?limit=100` + "&" + queryParams
        )
          .then((res) => res.json())
          .then((data) => {
            this.setState({ data: data });
          });
      }
    }
  }
  

  onChangeYearHandler = (year) => {
    this.setState({ launchYear: year });
  };

  onChangeLaunchSuccessHanler = (success) => {
    this.setState({ launchSuccess: success });
    if(!success) {
        this.setState({ landSuccess : null})
    }
  };

  onChangeLandSeccessHandler = (success) => {
    this.setState({ landSuccess: success });
  };

  render() {;
    return (
      <div className={styles.container}>
        <h1 className={styles.header}>SpaceX Launch Programs</h1>
        <Filters
          launchYear={this.onChangeYearHandler}
          launchSuccess={this.onChangeLaunchSuccessHanler}
          landSuccess={this.onChangeLandSeccessHandler}
          disable={this.state.launchSuccess===false}
        />
        <section>
          <LaunchPrograms data={this.state.data} successLanding={this.state.landSuccess} />
        </section>
        <footer className={styles.footer}>
            Developed by: 
            <p 
              style={{ fontFamily:"Gabriola" , marginLeft:"10px", fontSize:"28px"}}>
              Prashant </p>
        </footer>
      </div>
    );
  }
}

export default Layout;
