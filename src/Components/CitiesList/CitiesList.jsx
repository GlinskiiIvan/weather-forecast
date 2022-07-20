import React, {useEffect, useState} from 'react';
import styles from './CitiesList.module.scss'
import CityCard from "./CityCard/CityCard";

{/*
                        temp - температура
                        main - облачно/солнечно т.д.
                        icon
*/}

const CitiesList = (props) => {
    // const [data, setData] = useState('');
    // const city = 'Ust-Kamenogorsk';
    // const API_KEY = 'fc912576cdd213b8b286adfc2dc7ad1a';
    // useEffect(() => {
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    //         .then(res => res.json())
    //         .then(json => setData(json))
    //     const lat = data.coord.lat;
    //     const lon = data.coord.lon;
    //     fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${API_KEY}`)
    //         .then(res => res.json())
    //         .then(json => setData(json))
    //
    // }, [])
    // console.log('data-2', data)

    return (
        <section>
            <div className={styles.citiesList}>
                <CityCard />
                <CityCard />
                <CityCard />
                <CityCard />
                <CityCard />
                <CityCard />
                <CityCard />
            </div>
        </section>
    );
};

export default CitiesList;