import React from 'react';
// import {useHistory} from 'react-router-dom'
import styles from './CityPage.module.scss'

import {useNavigate, useLocation} from "react-router-dom";

import CurrentInfo from "./CurrentInfo/CurrentInfo";
import DailyList from "./DailyList/DailyList";
import Button from "../../UI/Button/Button";

const CityPage = (props) => {
    const location = useLocation();
    const navigate = useNavigate();

    console.log(location.state.data)
    return (
        <React.Fragment>
            <Button className={styles.btnGoBack} onClick={() => navigate('/')}>Назад ⬅</Button>
            <CurrentInfo data={location.state.data.current} city={location.state.city} />
            <DailyList data={location.state.data.daily} />
        </React.Fragment>
    );
};

export default CityPage;