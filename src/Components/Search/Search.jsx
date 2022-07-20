import React from 'react';
import styles from './Search.module.scss'

const Search = (props) => {
    return (
        <section className={styles.search}>
            <div className={styles.wrapper}>
                <div className={styles.inputSearch}>
                    <label><img src="/img/icons/search.svg" alt=""/></label>
                    <input type="text" placeholder='Поиск...'/>
                </div>
                <button className={styles.btnAddCity}>+</button>
            </div>
        </section>
    );
};

export default Search;