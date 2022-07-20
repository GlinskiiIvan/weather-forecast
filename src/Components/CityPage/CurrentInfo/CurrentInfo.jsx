import React from 'react';
import styles from './CurrentInfo.module.scss'

const CurrentInfo = (props) => {
    if (!props.data) return ;
    /*const {name, weather, main} = props.data;
    const {temp, feels_like, pressure, humidity} = main;
    const {icon, description} = weather[0];
    const shortDescription = weather[0].main;*/

    const {weather, temp, feels_like, humidity, pressure} = props.data;
    const {icon, description} = weather[0];
    const shortDescription = weather[0].main;

    return (
        <div className={styles.cityWrapper}>
            <div className={styles.actions}>
                <button>edit</button>
                <button>X</button>
            </div>
            <div className={styles.cityContent}>
                <div className={styles.main}>
                    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" className={styles.icon}/>
                    <h2 className={styles.cityName}>{props.city}</h2>
                    <p className={styles.mainDescription}>{shortDescription}</p>
                    <span className={styles.temp}>{Math.round(temp)} &#8451;</span>
                </div>
                <div className={styles.description}>
                    <p><span>Ощущается как: </span>{Math.round(feels_like)} &#8451;</p>
                    <p><span>Облачность: </span>{description}</p>
                    <p><span>Атмосферное давление: </span>{pressure} kPa</p>
                    <p><span>Влажность: </span>{humidity} %</p>
                </div>
            </div>
        </div>
    );
};

export default CurrentInfo;