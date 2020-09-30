import React from 'react';
import Styles from './Button.module.css'

const button = (props)=>{

    return (
        <button className={props.style? Styles.active : Styles.btn}  onClick={props.onClicked}> {props.name} </button>
        );
}

export default button;