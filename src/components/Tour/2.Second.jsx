import React from 'react'
import Arrows from './Arrows/Arrows'
import {BalanceGeneral} from '..'

const Second = () => {
  return (
    <section className='flex flex-col w-full h-screen'>
      <div className='flex flex-col w-[28rem] m-auto '>
        <div className='flex flex-col gap-10'>
          <p>Para empezar tu negocio usas los $1000 pesos que tenias guardados en un calcetin.Ademas consigues que tu tio te preste $5000 pesos con un interes de 10%.</p>
          <p>Tu negocio entonces esta ordenado asi:</p>
          <BalanceGeneral />
        </div>
        <Arrows />
      </div>
    </section>
  )
}

export default Second