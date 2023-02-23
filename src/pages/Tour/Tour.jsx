import React from 'react'
import {useTour} from './useTour'
import {Welcome} from '../../components'

const Tour = () => {
  const {dispatch, tourView, setTourView} = useTour()

  switch (tourView) {
    case 0:
      return (<Welcome />)
  
    default:
      break;
  }
}

export default Tour