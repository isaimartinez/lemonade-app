import React from 'react'
import Arrows from './Arrows/Arrows'

const Fifth = () => {
  return (
    <section className='flex flex-col w-full h-screen'>
      <div className='flex flex-col w-96 m-auto '>
        <div className='flex flex-col gap-5'>
          <p>Por el momento van a ser los unicos ingredientes que vas a necesitar, ya que vas a usar material y agua que ya tienes. Vas a la tienda y compras:</p>
          <p>Limones---$40 pesos/kilo--{'>'}5 kilos--{'>'}200 pesos 
            Azucar-----$25 pesos/kilo--{'>'}1 kilo--{'>'}25 pesos
          </p>
          <p>Tu receta por el momento es:</p>
          <p>1 Litro de agua</p>
          <p>1 Litro de agua</p>
          <p>12 limones, 200 gr de azucar. (4 porciones)</p>
        </div>
        <Arrows />
      </div>
    </section>
  )
}

export default Fifth