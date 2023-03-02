import React from 'react'
import Arrows from './Arrows/Arrows'

const FirstWeek = () => {
  return (
    <section className='flex flex-col w-full h-screen'>
      <div className='flex flex-col w-[28rem] m-auto '>
        <div className='flex flex-col gap-10'>
          <p>Con tu nuevo producto y material que conseguiste en tu casa (vasos, hielos, agua, etc.) te preparas para tu primera semana de ventas. 
En la proxima pantalla vas a poder ver el menu del cual vas a disponer semanalmente.</p>
        </div>
        <Arrows />
      </div>
    </section>
  )
}

export default FirstWeek