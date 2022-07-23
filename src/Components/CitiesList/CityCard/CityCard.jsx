import React, {useRef} from 'react';
import {useEffect, useState, useContext} from "react";
import {Link} from "react-router-dom";
import Modal from "../../../UI/Modal/Modal";
import {CitiesContext} from "../../../CitiesContext/CitiesContext";

import styles from './CityCard.module.scss'

const CityCard = (props) => {

    const [cities, dispatchCities] = useContext(CitiesContext);
    const [newCity, setNewCity] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const API_KEY = 'fc912576cdd213b8b286adfc2dc7ad1a';
    const [data, setData] = useState('');

    useEffect( () => {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${props.city}&limit=1&appid=${API_KEY}`)
            .then(res => res.json())
            .then(json => {
                const { lat, lon } = json[0];
                fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${API_KEY}&units=metric&lang=ru`)
                    .then(res => res.json())
                    .then(json => setData(json))
            })

    }, [])

    if (!data) return ;
    console.log('data', data)

    const {weather, temp} = data.current;
    const {icon, description} = weather[0];

    const changeCityHandler = (event) => {
        event.preventDefault();
        setIsEdit(true);
    }
    const changeCityDoneHandler = (event) => {
        event.preventDefault();
        setNewCity('');
        dispatchCities({
            type: 'CHANGE_CITY',
            oldCity: props.city,
            newCity: newCity
        })
        setIsEdit(false);
    }
    const changeCityCancelHandler = (event) => {
        event.preventDefault();
        setIsEdit(false);
    }

    const removeCityHandle = (event) => {
        event.preventDefault();
        dispatchCities({
            type: 'REMOVE_CITY',
            city: props.city
        })
    }

    return (
        <React.Fragment>
            {isEdit && (
                <Modal>
                    <div className={styles.changeWrapper}>
                        <h4>Введите название города на который хотите заменить текущий.</h4>
                        <input className={styles.inputChange} type="text" value={newCity} onChange={(e) => setNewCity(e.target.value)}/>
                        <div className={styles.changeActions}>
                            <button className={styles.btnDone} onClick={changeCityDoneHandler} disabled={!newCity}>✔</button>
                            <button className={styles.btnDone} onClick={changeCityCancelHandler}>X</button>
                        </div>
                    </div>
                </Modal>
            )}
            <Link to={`/city/${props.city}`} state={{data: data, city: props.city}} className={styles.wrapper}>
                <div className={styles.city}>
                    <div className={styles.actions}>
                        <button onClick={changeCityHandler}>edit</button>
                        <button onClick={removeCityHandle}>X</button>
                    </div>
                    <div>
                        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" className={styles.icon}/>
                        <h2 className={styles.cityName}>{props.city}</h2>
                        <p className={styles.description}>{description}</p>
                        <span className={styles.temp}>{Math.round(temp)} &#8451;</span>
                    </div>
                </div>
            </Link>
        </React.Fragment>
    );
};

export default CityCard;