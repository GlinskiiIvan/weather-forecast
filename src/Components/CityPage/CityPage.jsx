import React from 'react';
import styles from './CityPage.module.scss'
import CurrentInfo from "./CurrentInfo/CurrentInfo";
import DailyList from "./DailyList/DailyList";

{/*
                        ✔ temp - температура
                        ✔ feels_like - ощущается
                        ✔ pressure - давление
                        ✔ humidity - влажность
                        ✔ main - облачно/солнечно т.д.
                        ✔ description
                        ✔ icon
*/}

const CityPage = (props) => {
    return (
        <React.Fragment>
            <CurrentInfo />

            <DailyList />
        </React.Fragment>
    );
};

export default CityPage;