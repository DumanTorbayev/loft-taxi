import React from 'react';
import './index.scss'
import {CircularProgress} from "@material-ui/core";
import {useStyles} from "../../../hooks/useStyles";

export const Button = ({children, onClick, disabled, preloader}) => {
    const classes = useStyles()

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`primary-btn ${disabled ? 'primary-btn--disabled' : ''}`}
        >
            {preloader ? <CircularProgress size={25} className={classes.btnPreloader}/> : null}
            {children}
        </button>
    );
};