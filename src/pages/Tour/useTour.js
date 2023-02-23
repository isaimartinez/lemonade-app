import { useEffect } from "react"

import { useSelector, useDispatch } from 'react-redux'
import { setTourView } from '../../redux/reducers/ViewSlice'


export const useTour = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  const {tourView} = state.view




return { dispatch, tourView, setTourView}

}