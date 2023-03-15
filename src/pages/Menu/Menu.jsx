import React from 'react'
import {Button, Banner} from '../../components'
import { useNavigate } from "react-router-dom";

const Menu = () => {
const navigate = useNavigate()

const navTour = () => {
  navigate('/tour')
}

return (
    <section className='flex flex-col items-center h-screen w-screen'>
      <div className='flex flex-col items-center gap-4 m-auto'>
        <div>
          <p className='text-2xl'>Menu</p>
        </div>
        <div>
          <Banner> 
            <div className='flex flex-col justify-center items-center'>
              <p>11 de Marzo 2023  </p>
              <p>Semana 11</p>
            </div>
          </Banner>
        </div>
        <div className='flex flex-row gap-10 bg-red-200 w-full'>
          <Button label="Atrás" onClick={navTour} />
          <Button label="Avanzar" onClick={navTour}/>
        </div>
        <div>
          <Button label="Mas" onClick={navTour}/>
        </div>
      </div>
    </section>
  )
}

export default Menu