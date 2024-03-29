import React from 'react'
import Arrows from './Arrows/Arrows'

const Welcome = () => {
  return (
    <section className='flex flex-col w-full h-screen'>
      <div className='flex flex-col w-[28rem] m-auto '>
        <div className='flex flex-col gap-10'>
          <p>Bienvenido</p>
          <p>Eres un emprendedor y acabas de empezar tu puesto de limonada. Vas a convertir tu puesto en una empresa de clase mundial, y al hacerlo vas a los terminos basicos de contaduria que son la base de todo negocio.</p>
        </div>
        <Arrows />
      </div>
    </section>
  )
}

export default Welcome