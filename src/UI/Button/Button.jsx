import React from 'react';
import styles from './Button.module.scss'

const Button = (props) => {
    const {className, ...otherProps} = props;

    return (
        <button className={`${styles.btn} ${props.className}`} {...otherProps}>
            {props.children}
        </button>
    );
};

export default Button;