import React from 'react';
import './index.scss'
import PropTypes from "prop-types";

export const ErrorMessage = ({children}) => {
    return (
        <span className="error-message">
            {children}
        </span>
    );
};

ErrorMessage.propTypes = {
    children: PropTypes.node
}