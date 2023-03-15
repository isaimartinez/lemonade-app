import React from 'react'

const Button = ({label, onClick}) => {
  return (
    <div className='flex cursor-pointer items-center justify-center bg-secondary rounded-lg border-black border-2 p-2 w-full'
      onClick={onClick}
    >
      <p>{label}</p>
    </div>
  )
}

export default Button