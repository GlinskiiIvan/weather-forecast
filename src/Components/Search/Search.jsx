import React, {useContext, useState} from 'react';
import styles from './Search.module.scss'
import {CitiesContext} from "../../CitiesContext/CitiesContext";

const Search = (props) => {
    const [city, setCity] = useState('');
    const [cities, dispatchCities] = useContext(CitiesContext);

    const searchHandle = (event) => {
        event.preventDefault()
        dispatchCities({
            type: 'ADD_CITY',
            city: city
        })
        setCity('');
    }

    return (
        <section className={styles.search}>
            <div className={styles.wrapper}>
                <div className={styles.inputSearch}>
                    <label><img src="/img/icons/search.svg" alt=""/></label>
                    <input value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder='Поиск...'/>
                </div>
                <button disabled={!city} className={styles.btnAddCity} onClick={searchHandle}>+</button>
            </div>
        </section>
    );
};

export default Search;