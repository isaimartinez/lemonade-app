import React from 'react'
import Arrows from './Arrows/Arrows'
import {BalanceGeneral} from '..'

const Third = () => {
  return (
    <section className='flex flex-col w-full h-screen'>
      <div className='flex flex-col w-[28rem] m-auto '>
        <div className='flex flex-col gap-10'>
          <p>La tabla de balance general te ensena que activos, pasivos y capital contable tienes.</p>
          <BalanceGeneral />
          <div className='bg-secondary rounded-3xl border-black border-2 p-2 w-fit'>
            <p>Activos=pasivo+capital contable</p>
          </div>
        </div>
        <Arrows />
      </div>
    </section>
  )
}

export default Third