import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useSelector, useDispatch } from 'react-redux'
import { setActivos } from '../../redux/reducers/DataSlice'

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

const BalanceGeneral = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  const {activos, pasivos} = state.data

  const maxLength = Math.max(activos.length, pasivos.length);


  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Activos</TableCell>
            <TableCell>Pasivos</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {[...Array(maxLength)].map((_, index) => (
            <TableRow key={index}>
              <TableCell>{<RenderCell item={activos[index]}/>}</TableCell>
              <TableCell>{<RenderCell item={pasivos[index]}/>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BalanceGeneral