import React from 'react';
import styles from './DailyList.module.scss'
import Day from "./Day/Day";

const DailyList = (props) => {
    return (
        <div className={styles.dailyListWrapper}>
            <h2>Прогноз на 7 дней:</h2>
            <div className={styles.dailyList}>
                <Day />
                <Day />
                <Day />
                <Day />
                <Day />
                <Day />
                <Day />
            </div>
        </div>
    );
};

export default DailyList;