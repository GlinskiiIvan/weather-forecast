import React from 'react';
import styles from './DailyList.module.scss'
import Day from "./Day/Day";

const DailyList = (props) => {
    // console.log(props.data)
    return (
        <div className={styles.dailyListWrapper}>
            <h2>Прогноз на 7 дней:</h2>
            <div className={styles.dailyList}>
                {props.data.map((day) => <Day key={day.dt} data={day} />)}
            </div>
        </div>
    );
};

export default DailyList;