import {useDispatch} from 'react-redux'
import {allActionCreators} from '../store'
import {bindActionCreators} from '@reduxjs/toolkit'

export const useActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(allActionCreators, dispatch)
}
