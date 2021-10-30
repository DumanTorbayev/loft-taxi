import React, {useEffect} from 'react'
import {useActions} from './hooks/useActions'
import Constant from './constants'
import {RootRouter} from './components/RootRouter'

export const App = () => {
  const {login} = useActions()

  useEffect(() => {
    if (localStorage.getItem(Constant.AUTH)) {
      login()
    }
  }, [])

  return <RootRouter />
}
