import React from 'react';
import styles from './CityCard.module.scss'

const CityCard = (props) => {
    return (
        <div className={styles.city}>
            <div className={styles.actions}>
                <button>edit</button>
                <button>X</button>
            </div>
            <div>
                <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" className={styles.icon}/>
                <h2 className={styles.cityName}>Ust-Kamenogorsk</h2>
                <p className={styles.description}>облачно/солнечно т.д.</p>
                <span className={styles.temp}>36 &#8451;</span>
            </div>
        </div>
    );
};

export default CityCard;