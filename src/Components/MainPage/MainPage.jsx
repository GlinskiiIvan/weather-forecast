import React from 'react';
import PromoText from "../PromoText/PromoText";
import Search from "../Search/Search";
import CitiesList from "../CitiesList/CitiesList";

const MainPage = (props) => {
    return (
        <React.Fragment>
            <PromoText />
            <Search />
            <CitiesList />
        </React.Fragment>
    );
};

export default MainPage;