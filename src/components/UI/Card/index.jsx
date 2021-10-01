import React from 'react';
import styles from './card.module.scss'
import PropTypes from "prop-types";

export const Card = ({children}) => {
    return (
        <div className={styles.card}>
            {children}
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.node.isRequired
}