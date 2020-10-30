import React from 'react';
import styles from '../css_modules/footer.module.css';

const Footer = () => {
    return (
        <footer className="row align-items-center no-gutters">
            <div className="btn btn-danger col-2 offset-2 text-center">
                Send me an <span className={`${styles.email} text-uppercase small`}>email</span>
            </div>
        </footer>
    );
};

export default Footer;