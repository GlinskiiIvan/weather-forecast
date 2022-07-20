import React, {useRef} from 'react';
import styles from './CityCard.module.scss'
import {CitiesContext} from "../../../CitiesContext/CitiesContext";
import {useEffect, useState, useContext} from "react";;

const CityCard = (props) => {
    const [cities, dispatchCities] = useContext(CitiesContext);
    const [data, setData] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const newCityRef = useRef();
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
    if (!data) return ;
    const {name, weather, main} = data;
    const {icon, description} = weather[0];
    const {temp} = main;

    const changeCityHandler = (event) => {
        event.preventDefault();
        setIsEdit(true);
    }
    const changeCityDoneHandler = (event) => {
        event.preventDefault();
        dispatchCities({
            type: 'CHANGE_CITY',
            oldCity: props.city,
            newCity: newCityRef.current.value
        })
        setIsEdit(false);
    }
    const changeCityCancelHandler = (event) => {
        event.preventDefault();
        setIsEdit(false);
    }

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
                <button onClick={changeCityHandler}>edit</button>
                <button onClick={removeCityHandle}>X</button>
            </div>
            <div>
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" className={styles.icon}/>
                {isEdit && <div>
                    <input className={styles.inputChange} type="text" ref={newCityRef}/>
                    <div className={styles.changeActions}>
                        <button className={styles.btnDone} onClick={changeCityDoneHandler}>✔</button>
                        <button className={styles.btnDone} onClick={changeCityCancelHandler}>X</button>
                    </div>
                </div>}
                {!isEdit && <h2 className={styles.cityName}>{name}</h2>}
                <p className={styles.description}>{description}</p>
                <span className={styles.temp}>{Math.round(temp)} &#8451;</span>
            </div>
        </div>
    );
};

export default CityCard;