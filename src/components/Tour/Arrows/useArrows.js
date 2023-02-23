import { useSelector, useDispatch } from 'react-redux'
import { setTourView } from '../../../redux/reducers/ViewSlice'

export const useArrows = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  const {tourView, maxTourView} = state.view


  const onPressArrows = (dir) => {
    if(dir == "l"){
      if( tourView > 0) {
        dispatch(setTourView(tourView-1))
      }
    }


    if(dir == "r"){
      if( tourView < maxTourView) {
        dispatch(setTourView(tourView+1))
      }
    }

    
  }

  return {dispatch, tourView, setTourView, onPressArrows}

}