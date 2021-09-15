import React from 'react';
import './index.scss'
import {CircularProgress} from "@material-ui/core";
import {useStyles} from "../../../hooks/useStyles";
import PropTypes from "prop-types";

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

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    preloader: PropTypes.bool,
}