import React,{useState} from 'react'
import {Banner, Button, ModalBalanceGeneral, ModalEstadoResultados} from '../../components'

const BeforeNextStep = () => {
  const [isModalBalanceGeneral, setIsModalBalanceGeneral] = useState(false)
  const [isModalEstadoResultados, setIsModalEstadoResultados] = useState(false)

  return (
    <>
    <section className='flex flex-col items-center h-screen w-screen'>
      <div className='flex flex-col items-center w-[28rem] m-auto gap-5'>
        <p>Duda sobre los dos documentos financieros?</p>
        <div className='flex flex-row gap-4'>
          <div>
            <Button label={"Balance General"} onClick={() => {setIsModalBalanceGeneral(true)}}/>
          </div>
          <div>
            <Button label={"Estado de Resultados"} onClick={() => setIsModalEstadoResultados(true)}/>
          </div>
        </div>
        <div className='flex flex-row justify-center items-center'>
            <Button label={"Continuar"} />
        </div>
      </div>
    </section>
    <ModalBalanceGeneral isModalBalanceGeneral={isModalBalanceGeneral} setIsModalBalanceGeneral={setIsModalBalanceGeneral}/>
    <ModalEstadoResultados isModalEstadoResultados={isModalEstadoResultados} setIsModalEstadoResultados={setIsModalEstadoResultados}/>
    </>
  )
}

export default BeforeNextStep