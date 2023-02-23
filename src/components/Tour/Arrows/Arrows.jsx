import React from 'react'
import {FaCaretRight, FaCaretLeft} from 'react-icons/fa'
import { useArrows } from './useArrows'

const Arrows = () => {
  const {dispatch, tourView, setTourView, onPressArrows} = useArrows()

  return (
    <div className='flex justify-around mt-10 flex-row'>
      <div className='flex cursor-pointer'
        onClick={() =>onPressArrows("l")}
      >
        <FaCaretLeft size={45} /> 
      </div>
      <div className='flex cursor-pointer'
        onClick={() =>onPressArrows("r")}
      >
        <FaCaretRight size={45}/>
      </div>
    </div>
  )
}

export default Arrows