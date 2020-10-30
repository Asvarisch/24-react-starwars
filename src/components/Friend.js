import React from 'react';
import style from '../css_modules/friend.module.css';

const Friend = props => {
    let styles = 'col-4 p-1 ';
    if (props.pos === 7) {
        styles += style.bottomLeft;
    }
    if (props.pos === 9) {
        styles += style.bottomRight;
    }
    return (
        <img className={styles} src={props.picture} alt="friend"/>
    );
};

export default Friend;