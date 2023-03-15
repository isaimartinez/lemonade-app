import React,{useState} from 'react'
import {Banner, Button, ModalBalanceGeneral, ModalEstadoResultados} from '../../components'

const MainWeekEnd = () => {
  const [isModalBalanceGeneral, setIsModalBalanceGeneral] = useState(false)
  const [isModalEstadoResultados, setIsModalEstadoResultados] = useState(false)
  return (
    <>
    <section className='flex flex-col items-center h-screen w-screen'>
      <div className='flex flex-col w-[28rem] m-auto gap-5 '>
        <p className='text-3xl'>Final de semana</p>
        <div className='flex flex-row gap-4'>
          <Banner>
            <div>
              <p>Resultados:</p>
              <p>16 porciones vendidas</p>
              <p>4 porciones restantes</p>
              <p>$320 ventas:</p>
              <p>$200 cuentas por cobrar</p>
              <p>$120 efectivo.</p>
            </div>
          </Banner>
          <Banner>
            <div>
              <p>8 de marzo 2023</p>
              <p>Semana n+1</p>
            </div>
          </Banner>
        </div>
        <div className='flex flex-row justify-around items-center'>
          <div className='flex items-center justify-center'>
            <Button label={"Balance General"} onClick={() => {setIsModalBalanceGeneral(true)}}/>            
          </div>
          <div className='flex items-center justify-center'>
            <Button label={"Estado de Resultados"} onClick={() => setIsModalEstadoResultados(true)}/>
          </div>
        </div>
        <div className='flex flex-row justify-around items-center'>
          <div className='flex items-center justify-center'>
            <Button label={"Flujo de Efectivos"}/>            
          </div>
          <div className='flex items-center justify-center'>
            <Button label={"Ganancia Retenida"}/>
          </div>
        </div>
      </div>
    </section>
    <ModalBalanceGeneral isModalBalanceGeneral={isModalBalanceGeneral} setIsModalBalanceGeneral={setIsModalBalanceGeneral}/>
    <ModalEstadoResultados isModalEstadoResultados={isModalEstadoResultados} setIsModalEstadoResultados={setIsModalEstadoResultados}/>
    </>
  )
}

export default MainWeekEnd