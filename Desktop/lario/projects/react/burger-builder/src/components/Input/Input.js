import React from 'react'

import styles from './Input.module.css'

const Input = (props) => {
    let inputElement = null

    switch (props.inputtype) {
        case ('input'):
            inputElement = <input className={styles.InputElement} {...props} />
            break;

        case ('textarea'):
            inputElement = <textarea {...props} />
            break;
    
        default:
           inputElement = <input {...props} />
    }

    return (
        <div className={styles.Input} >
            <label className={styles.Label} >{props.label}</label>
            {inputElement}
        </div>
    )
}

export default Input