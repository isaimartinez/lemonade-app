import React from 'react'
import {BalanceGeneral} from '..'
import Arrows from './Arrows/Arrows'

const NewBalanceSheet = () => {
  return (
    <section className='flex flex-col w-full h-screen'>
      <div className='flex flex-col w-[28rem] m-auto '>
        <div className='flex flex-col gap-10'>
          <p className='font-semibold text-2xl'>Tu Balance general ahora se ve asi</p>
          <BalanceGeneral />
          <div className='flex flex-row items-center justify-around gap-2'>
            <div className='flex flex-col bg-secondary rounded-3xl border-black border-2 p-2 '>
              <p className='text-lg font-semibold'>Receta: (La puedes cambiar luego)</p>
              <div>
                <p>1 litro de agua</p>
                <p>12 limones</p>
                <p>200g de azúcar</p>
                <p>4 porciones</p>
              </div>
            </div>
            <div className='flex w-36 h-36 bg-gray-400 border-2 items-center  rounded border-black'>
              <p className='text-lg font-semibold text-center'>En promedio hay 12 limones por kilo</p>
            </div>
          </div>
        </div>
        <Arrows />
      </div>
    </section>
  )
}

export default NewBalanceSheet