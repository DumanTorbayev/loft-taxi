import React from 'react';
import './index.scss'

export const Button = ({children, onClick}) => {
    return (
        <button onClick={onClick} className="primary-btn">
            {children}
        </button>
    );
};