import React from 'react';
import './index.scss'
import PropTypes from "prop-types";

export const Card = ({children}) => {
    return (
        <div className="card">
            {children}
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.node
}