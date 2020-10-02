import React, { Component } from 'react';
import Filters from '../Filters/Filters';
import LaunchPrograms  from '../LaunchPrograms/LaunchPrograms';
import styles from './Layout.module.css';
import Router from 'next/router';
import { route } from 'next/dist/next-server/server/router';

class Layout extends Component {
    state={
        launchYear: null,
        launchSuccess: null,
        landSuccess: null,
        data: null
    }
    componentDidUpdate() {
        let queryParams = ""; 
        if(this.state.launchSuccess!=null) {
            if(queryParams.length>0) {
                queryParams+='&';
            }
            queryParams += 'launch_success='+this.state.launchSuccess.toString();
        }
        if(this.state.landSuccess!=null) {
            if(queryParams.length>0) {
                queryParams+='&';
            }
            queryParams += 'land_success='+this.state.landSuccess.toString();
        }
        if(this.state.launchYear) {
            if(queryParams.length>0) {
                queryParams+='&';
            }
            queryParams += 'launch_year='+this.state.launchYear;
        }  
        if(queryParams){
            Router.push('?'+queryParams);
        }
                
    }

    onChangeYearHandler = year =>{
        this.setState({launchYear: year});
    }
    onChangeLaunchSuccessHanler = success =>{
        this.setState({launchSuccess: success});
    }
    onChangeLandSeccessHandler = success =>{
        this.setState({ landSuccess : success})
    }
    
    render() {
        return (
        <div className = {styles.container} >
            
            <h1 className={styles.header}>SpaceX Launch Programs</h1>
            

            <Filters 
                launchYear={this.onChangeYearHandler} 
                launchSuccess ={this.onChangeLaunchSuccessHanler}
                landSuccess ={this.onChangeLandSeccessHandler} />
             <section>
               <LaunchPrograms data={this.props.data} />
             </section>
             
            <footer className={styles.footer}>
                <p> <strong>Developed by :</strong>  Prashant </p>
            </footer>
        </div>);
    }
}

export default Layout;