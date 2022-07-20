import React, {useContext, useEffect, useState} from 'react';
import styles from './CitiesList.module.scss'
import CityCard from "./CityCard/CityCard";
import {CitiesContext} from "../../CitiesContext/CitiesContext";

{/*
                        temp - температура
                        main - облачно/солнечно т.д.
                        icon
*/}

const CitiesList = (props) => {
    const [cities, dispatchCities] = useContext(CitiesContext);

    return (
        <section>
            <div className={styles.citiesList}>
                {cities.cities.map((city) => {
                    return <CityCard key={city} city={city} />
                })}
            </div>
        </section>
    );
};

export default CitiesList;