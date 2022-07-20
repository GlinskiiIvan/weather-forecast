import React, {useContext, useRef} from 'react';
import styles from './Search.module.scss'
import {CitiesContext} from "../../CitiesContext/CitiesContext";

const Search = (props) => {
    const searchRef = useRef();
    const [cities, dispatchCities] = useContext(CitiesContext);

    const searchHandle = (event) => {
        event.preventDefault()
        dispatchCities({
            type: 'ADD_CITY',
            city: searchRef.current.value
        })
        searchRef.current.value = '';
    }

    return (
        <section className={styles.search}>
            <div className={styles.wrapper}>
                <div className={styles.inputSearch}>
                    <label><img src="/img/icons/search.svg" alt=""/></label>
                    <input ref={searchRef} type="text" placeholder='Поиск...'/>
                </div>
                <button className={styles.btnAddCity} onClick={searchHandle}>+</button>
            </div>
        </section>
    );
};

export default Search;