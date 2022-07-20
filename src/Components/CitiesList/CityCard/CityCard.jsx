import React from 'react';
import styles from './CityCard.module.scss'
import {CitiesContext} from "../../../CitiesContext/CitiesContext";
import {useEffect, useState, useContext} from "react";;

const CityCard = (props) => {
    const [cities, dispatchCities] = useContext(CitiesContext);
    const [data, setData] = useState('');
    const API_KEY = 'fc912576cdd213b8b286adfc2dc7ad1a';

    useEffect( () => {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${props.city}&limit=1&appid=${API_KEY}`)
            .then(res => res.json())
            .then(json => {
                const { lat, lon } = json[0];
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
                    .then(res => res.json())
                    .then(json => setData(json))
            })
    }, [])

    /*const {name, weather, main} = data;
    const {icon, description} = weather[0];
    const {temp} = main;*/

    const removeCityHandle = (event) => {
        event.preventDefault();
        console.log(props.city)
        dispatchCities({
            type: 'REMOVE_CITY',
            city: props.city
        })
    }

    return (
        <div className={styles.city}>
            <div className={styles.actions}>
                <button>edit</button>
                <button onClick={removeCityHandle}>X</button>
            </div>
            {props.city}
            {/*<div>
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" className={styles.icon}/>
                <h2 className={styles.cityName}>{name}</h2>
                <p className={styles.description}>{description}</p>
                <span className={styles.temp}>{Math.round(temp)} &#8451;</span>
            </div>*/}
        </div>
    );
};

export default CityCard;