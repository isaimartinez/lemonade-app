import React from 'react'
import {BalanceGeneral} from '..'
import Arrows from './Arrows/Arrows'

const Sixth = () => {
  return (
    <section className='flex flex-col w-full h-screen'>
      <div className='flex flex-col w-96 m-auto '>
        <div className='flex flex-col gap-10'>
          <p>Tu tabla general se ve asi:</p>
          <BalanceGeneral />
        </div>
        <Arrows />
      </div>
    </section>
  )
}

export default Sixth