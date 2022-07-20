import React from 'react';
import styles from './Day.module.scss'

//toLocaleString('ru-RU', { weekday: 'long'})
//toLocaleString('ru-RU').split(',')[0]
//new Date(props.data.dt).toLocaleString('ru-RU', { weekday: 'long'})

const Day = (props) => {
    const {weather, temp} = props.data;
    const {icon} = weather[0];
    const shortDescription = weather[0].main;
    const tempDay = temp.day;
    let weekday = new Date(props.data.dt * 1000).toLocaleString('ru-RU', { weekday: 'long'});
    let weekdayDate = new Date(props.data.dt * 1000).toLocaleString('ru-RU').split(',')[0];

    return (
        <div className={styles.day}>
            <h4>{weekday}</h4>
            <p>{weekdayDate}</p>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" className={styles.icon}/>
            <p>{Math.round(tempDay)} &#8451;</p>
            <p>{shortDescription}</p>
        </div>
    );
};

export default Day;