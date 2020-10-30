import React from 'react';
import styles from '../css_modules/fargalaxy.module.css';
import {starsWarsInfo} from "../utils/Constants";

const StarWars = () => {
    return (
        <div className={styles.farGalaxy}>
            {starsWarsInfo}
        </div>
    );
};

export default StarWars;