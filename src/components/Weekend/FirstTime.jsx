import React from 'react'
import {Banner, Button} from '../../components'
import { useNavigate } from "react-router-dom";

const FirstTime = ({setView}) => {
  const navigate = useNavigate()

  const handleContinue = () => {
    setView('Main')
  }

  return (
    <section className='flex flex-col items-center h-screen w-screen'>
      <div className='flex flex-col w-[28rem] m-auto gap-5 '>
        <p>Cada semana de ventas es automatica, y al final de la semana te van a dar tus resultados, con estos resultados tu vas a crear tus documentos financieros.</p>
        <p>En la proxima pantalla vas a ver la pantalla de fin de semana</p>
        <div className='flex flex-row gap-4'>
          <Banner>
            <div>
              <p>Los documentos financieros te dicen donde esta tu negocio</p>
            </div>
          </Banner>
          <Banner>
            <div>
              <p>Esta semana tenias 20 porciones en inventario</p>
            </div>
          </Banner>
        </div>
        <div className='flex flex-row justify-between items-center'>
          <div />
          <div>
            <Button label={"Continuar"} onClick={handleContinue}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FirstTime