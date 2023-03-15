import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useSelector, useDispatch } from 'react-redux'

const data = [{
  label: "Ventas",
  amount: "320"
},{
  label: "Costo de Bienes Vendidos",
  amount: "180"
},{
  label: "Beneficio Bruto",
  amount: "140"
},]

const RenderCell = ({item}) => {
  if(item) {
    const {label, amount} = item
    return(
      <div className='flex flex-row justify-between'>
        <p>{label}</p>
        <p>${amount}</p>
      </div>
    )
  }
}

const EstadoResultados = () => {
  return (<TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Estado de Resultados</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{<RenderCell item={item}/>}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default EstadoResultados