import React, {useContext, useState} from 'react';
import Modal from "../../UI/Modal/Modal";
import Button from "../../UI/Button/Button";

import {CitiesContext} from "../../CitiesContext/CitiesContext";

import styles from './Search.module.scss'

const Search = (props) => {
    const [city, setCity] = useState('');
    const [isFound, setIsFound] = useState(true);
    const [cities, dispatchCities] = useContext(CitiesContext);

    const API_KEY = 'fc912576cdd213b8b286adfc2dc7ad1a';

    const searchHandle = (event) => {
        event.preventDefault()
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`)
            .then((res) => res.json())
            .then(json => {
                if (json.length > 0) {
                    setCity('');
                    dispatchCities({
                        type: 'ADD_CITY',
                        city: city
                    })
                } else {
                    setIsFound(false);
                }
            })
    }

    const closeNotFoundHandler = (event) => {
        event.preventDefault();
        setIsFound(true);
    }

    const closeisIncludesHandler = (event) => {
        event.preventDefault();
        dispatchCities({type: 'CLOSE_WARNING_INCLUDES'})
    }

    return (
        <React.Fragment>
            {
                !isFound && (
                    <Modal>
                        <div className={styles.isIncludesWrapper}>
                            <h4>Город не найден!!</h4>
                            <p>Повторите попытку. Возможно вы опечатались, будьте внимательнее🙃</p>
                            <button onClick={(event) => closeNotFoundHandler(event)}>Ok</button>
                        </div>
                    </Modal>
                )
            }
            {
                cities.isIncludes && (
                    <Modal>
                        <div className={styles.isIncludesWrapper}>
                            <h4>Этот город уже добавлен!!</h4>
                            <button onClick={(event) => closeisIncludesHandler(event)}>Ok</button>
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
                    <Button disabled={!city} onClick={searchHandle}>+</Button>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Search;