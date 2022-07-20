import React, {useContext} from 'react';
import styles from './App.module.scss';
import PromoText from "../PromoText/PromoText";
import Search from "../Search/Search";
import CitiesList from "../CitiesList/CitiesList";

function App() {
  return (
    <div className={styles.container}>
        <PromoText />
        <Search />
        <CitiesList />

        {/*<CityPage />*/}

    </div>
  );
}

export default App;
