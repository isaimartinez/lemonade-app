import React from 'react'

const Banner = ({children}) => {
  return (
    <div className='flex justify-center bg-secondary rounded-lg border-black border-2 p-2 w-full skew-x-3		'>
      {children}
    </div>
  )
}

export default Banner