import React from 'react';
import styles from './auth-layout.module.scss';
import logo from '../../assets/images/logo-v.svg';
import PropTypes from "prop-types";

export const AuthLayout = ({children}) => {
    return (
        <div className={styles.container}>
            <div className={styles.lc}>
                <img src={logo} alt="Loft taxi" className={styles.logo}/>
            </div>
            <div className={styles.rc}>
                {children}
            </div>
        </div>
    );
};

AuthLayout.propTypes = {
    children: PropTypes.node.isRequired
}