import React from 'react'
import Arrows from './Arrows/Arrows'
import {BalanceGeneral} from '..'

const Third = () => {
  return (
    <section className='flex flex-col w-full h-screen'>
      <div className='flex flex-col w-96 m-auto '>
        <div className='flex flex-col gap-10'>
          <p>La tabla de balance general te ensena que activos, pasivos y capital contable tienes.</p>
          <BalanceGeneral />
          <p>Activos=pasivo+capital contable</p>
        </div>
        <Arrows />
      </div>
    </section>
  )
}

export default Third