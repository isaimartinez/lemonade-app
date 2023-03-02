import React from 'react'
import {useTour} from './useTour'
import {First, Second, Third, FirstInventory, NewBalanceSheet, FirstWeek} from '../../components'

const Tour = () => {
  const {dispatch, tourView, setTourView} = useTour()

  switch (tourView) {
    case 0:
      return (<First />)
    case 1:
      return (<Second />)
    case 2:
      return (<Third />)
    // case 3:
    //   return (<FirstInventory />)
    case 3:
      return (<FirstInventory />)
    case 4:
      return (<NewBalanceSheet />)
    case 5:
      return (<FirstWeek />)
    
    default:
      break;
  }
}

export default Tour