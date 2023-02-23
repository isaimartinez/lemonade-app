import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const Menu = () => {
const navigate = useNavigate()

const navTour = () => {
  navigate('/tour')
}

return (
    <section className='flex w-full h-screen'>
      <div className='flex flex-col gap-10 m-auto'>
        <Button variant="outlined" onClick={navTour}>Continuar Partida</Button>
        <Button variant="outlined" onClick={navTour}>Nueva Partida</Button>
      </div>
    </section>
  )
}

export default Menu