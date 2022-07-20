import React from 'react';
import styles from './CurrentInfo.module.scss'

const CurrentInfo = (props) => {
    return (
        <div className={styles.cityWrapper}>
            <div className={styles.actions}>
                <button>edit</button>
                <button>X</button>
            </div>
            <div className={styles.cityContent}>
                <div className={styles.main}>
                    <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" className={styles.icon}/>
                    <h2 className={styles.cityName}>Ust-Kamenogorsk</h2>
                    <p className={styles.mainDescription}>облачно/солнечно т.д.</p>
                    <span className={styles.temp}>36 &#8451;</span>
                </div>
                <div className={styles.description}>
                    <p><span>Ощущается как: </span>40 &#8451;</p>
                    <p><span>Облачность: </span>Небольшая облачность</p>
                    <p><span>Атмосферное давление: </span>1011</p>
                    <p><span>Влажность: </span>31</p>
                </div>
            </div>
        </div>
    );
};

export default CurrentInfo;