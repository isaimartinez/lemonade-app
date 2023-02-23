import React from 'react'
import {useTour} from './useTour'
import {First, Second, Third, Fourth, Fifth} from '../../components'

const Tour = () => {
  const {dispatch, tourView, setTourView} = useTour()

  switch (tourView) {
    case 0:
      return (<First />)
    case 1:
      return (<Second />)
    case 2:
      return (<Third />)
    case 3:
      return (<Fourth />)
    case 4:
      return (<Fifth />)
    
    default:
      break;
  }
}

export default Tour