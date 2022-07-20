import React from 'react';
import styles from './PromoText.module.scss'

const PromoText = (props) => {
    return (
        <section>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Выберите местоположение.</h2>
                <p className={styles.description}>Найдите город в котором вы хотите узнать подробную информацию о погоде.</p>
            </div>
        </section>
    );
};

export default PromoText;