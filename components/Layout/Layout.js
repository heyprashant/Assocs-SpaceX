import React, { Component } from 'react';
import Filters from '../Filters/Filters';
import LaunchPrograms  from '../LaunchPrograms/LaunchPrograms';
import styles from './Layout.module.css';

class Layout extends Component {
    

    render() {
        return (
        <div className = {styles.container} >
            
            <h1 className={styles.header}>SpaceX Launch Programs</h1>
            

            <Filters />
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