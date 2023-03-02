import React from 'react'
import Arrows from './Arrows/Arrows'
import Lemon from '../../assets/Lemon.png'
import Sugar from '../../assets/Sugar.png'

const Fifth = () => {
  return (
    <section className='flex flex-col w-full h-screen'>
      <div className='flex flex-col w-[28rem] m-auto '>
        <div className='flex flex-col gap-5'>
          <p>Por el momento los unicos ingredientes que vas a necesitar son Limones y Azucar, todo lo demas lo vas a sacar de tu casa. Vas a la tienda y compras:</p>
          <div className='flex flex-row items-center'>
            <img src={Lemon} alt="" className='w-24'/>
            <p>Limones $40/kilo -{'>'}5 kilos -{'>'}200 pesos</p>
          </div>
          <div className='flex flex-row items-center'>
            <img src={Sugar} alt="" className='w-24'/>
            <p>Azucar $25/kilo -{'>'}1 kilo -{'>'}25 pesos</p>
          </div>
          <div className='bg-secondary rounded-3xl border-black border-2 p-2 w-fit'>
            <p>Activos=pasivo+capital contable</p>
          </div>
        </div>
        <Arrows />
      </div>
    </section>
  )
}

export default Fifth