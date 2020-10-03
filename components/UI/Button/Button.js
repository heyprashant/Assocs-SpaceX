import React from 'react';
import Styles from './Button.module.css'

const button = (props)=>{

    return (
        <button 
            className={props.style && !props.disabled ? Styles.active : Styles.btn}
            onClick={props.onClicked}
            disabled={props.disabled}
            > {props.name} </button>npm install --save-dev jest babel-jest babel-core babel-preset-env babel-preset-react
        );
}

export default button;