import React from 'react';
import styles from './CityPage.module.scss'

import { useLocation } from "react-router-dom";

import CurrentInfo from "./CurrentInfo/CurrentInfo";
import DailyList from "./DailyList/DailyList";

const CityPage = (props) => {
    const location = useLocation();
    console.log(location.state.data)
    return (
        <React.Fragment>
            <CurrentInfo data={location.state.data.current} city={location.state.city} />
            <DailyList data={location.state.data.daily} />
        </React.Fragment>
    );
};

export default CityPage;