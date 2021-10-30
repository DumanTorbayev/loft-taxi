import React from 'react'
import styles from './button.module.scss'
import {CircularProgress} from '@material-ui/core'
import {useStyles} from '../../../hooks/useStyles'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export const Button = ({children, onClick, disabled, preloader}) => {
  const classes = useStyles()

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classnames(styles.primary, {
        [styles.primaryDisabled]: disabled,
      })}
    >
      {preloader ? (
        <CircularProgress size={25} className={classes.btnPreloader} />
      ) : null}
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  preloader: PropTypes.bool,
}
