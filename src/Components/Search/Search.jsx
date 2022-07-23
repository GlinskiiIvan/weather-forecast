import React, {useContext, useState} from 'react';
import Modal from "../../UI/Modal/Modal";
import {CitiesContext} from "../../CitiesContext/CitiesContext";

import styles from './Search.module.scss'

const Search = (props) => {
    const [city, setCity] = useState('');
    const [cities, dispatchCities] = useContext(CitiesContext);

    const searchHandle = (event) => {
        event.preventDefault()
        setCity('');
        dispatchCities({
            type: 'ADD_CITY',
            city: city
        })
    }

    const closeWarningHandler = (event) => {
        event.preventDefault();
        dispatchCities({type: 'CLOSE_WARNING_INCLUDES'})
    }

    return (
        <React.Fragment>
            {
                cities.cityIncludes && (
                    <Modal>
                        <div className={styles.warningWrapper}>
                            <h4>Этот город уже добавлен!!</h4>
                            <button onClick={(event) => closeWarningHandler(event)}>Ok</button>
                        </div>
                    </Modal>
                )
            }
            <section className={styles.search}>
                <div className={styles.wrapper}>
                    <div className={styles.inputSearch}>
                        <label><img src="/img/icons/search.svg" alt=""/></label>
                        <input value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder='Поиск...'/>
                    </div>
                    <button disabled={!city} className={styles.btnAddCity} onClick={searchHandle}>+</button>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Search;