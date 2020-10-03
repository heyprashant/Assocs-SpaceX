import React, { Component, useState } from "react";
import Button from "../../UI/Button/Button";
import styles from "./LaunchYears.module.css";
import Router from "next/router";
import Link from "next/link";

// const LaunchYears = props => {
//     const { LaunchYear, setLaunchYear} = useState(null);

//     const onClickHandler = year =>{
//         if(LaunchYear === year){
//             setLaunchYear(null)
//         }
//         else{
//             setLaunchYear(year);
//         }

//         Router.push('?'+ this.state.active);
//     }

//     const years = [];
//         for(let i=2006; i<=2020; i++) {
//             years.push(i);
//         }

//     let launchYears = years.map( year => <Button name={year} onClicked={()=> onClickHandler(year)} style={LaunchYear == year} />);
//     return(
//         <div className={styles.container}>
//             <span className= {styles.header}>
//                 Launch Year
//                 <div className={styles.borderBottom}></div>
//             </span>
//             {launchYears}

//         </div>
//     );

// }

class LaunchYears extends Component {
  state = {
    active: null,
  };

  onClickHandler = (year) => {
    if (this.state.active === year) {
      this.setState({ active: null });
      this.props.yearHandler(null)
    } else {
      this.setState({ active: year });
      this.props.yearHandler(year)
    }
    
  };

  render() {
    const years = [];
    for (let i = 2006; i <= 2020; i++) {
      years.push(i);
    }

    let launchYears = years.map((year) => (
      <Button
        key={year}
        name={year}
        onClicked={() => this.onClickHandler(year)}
        style={this.state.active == year}
      />
    ));
    return (
      <div className={styles.container}>
        <span className={styles.header}>
          Launch Year
          <div className={styles.borderBottom}></div>
        </span>
        {launchYears}
      </div>
    );
  }
}

export default LaunchYears;
