import React from 'react';
import styles from './Day.module.scss'

const Day = (props) => {
    return (
        <div className={styles.day}>
            <h4>Понедельник</h4>
            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" className={styles.icon}/>
            <p>34 &#8451;</p>
            <p>Дождь</p>
        </div>
    );
};

export default Day;