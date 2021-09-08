import React from 'react';
import './index.scss'

export const ErrorMessage = ({children}) => {
    return (
        <span className="error-message">
            {children}
        </span>
    );
};