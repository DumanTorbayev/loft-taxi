import React from 'react'
import usePortal from 'react-useportal'
import PropTypes from 'prop-types'

export const CustomPortal = ({children}) => {
  const {Portal} = usePortal({
    bindTo: document && document.getElementById('alert-portal'),
  })

  return <Portal>{children}</Portal>
}

CustomPortal.propTypes = {
  children: PropTypes.node.isRequired,
}
