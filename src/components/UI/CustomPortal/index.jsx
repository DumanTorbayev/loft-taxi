import React from 'react'
import usePortal from 'react-useportal'

export const CustomPortal = ({children}) => {
  const {Portal} = usePortal({
    bindTo: document && document.getElementById('alert-portal'),
  })

  return <Portal>{children}</Portal>
}
