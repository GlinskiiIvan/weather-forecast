import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import styles from './App.module.scss';
import MainPage from "../MainPage/MainPage";
import CityPage from "../CityPage/CityPage";

function App() {
  return (
    <div className={styles.container}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/city/:city" element={<CityPage />} />
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
