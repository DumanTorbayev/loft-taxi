import React from 'react';
import styles from './error.module.scss'
import PropTypes from "prop-types";

export const ErrorMessage = ({children}) => {
    return (
        <span className={styles.message}>
            {children}
        </span>
    );
};

ErrorMessage.propTypes = {
    children: PropTypes.node.isRequired
}