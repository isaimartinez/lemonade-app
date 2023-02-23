import React from 'react'
import Arrows from './Arrows/Arrows'

const Fourth = () => {
  return (
    <section className='flex flex-col w-full h-screen'>
      <div className='flex flex-col w-96 m-auto '>
        <div className='flex flex-col gap-10'>
          <p>Ahora que sabes que sabes que hay y de quien es, puede seguir con tu mision de dominar el mundo a traves de una corporacion de limonada. Para tu producto tienes que comprar 2 ingredientes principales para tu receta.</p>
          <p>Limones</p>
          <p>Azucar</p>
        </div>
        <Arrows />
      </div>
    </section>
  )
}

export default Fourth