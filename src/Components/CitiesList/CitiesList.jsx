import React, {useContext, useEffect, useState} from 'react';

import CityCard from "./CityCard/CityCard";

import styles from './CitiesList.module.scss'

import {CitiesContext} from "../../CitiesContext/CitiesContext";

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