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

const BalanceGeneral = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  const {activos, pasivos} = state.data

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
          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell>
              {
                activos.map((item,i) => (
                  <div>
                    <p>{item.label} ${item.amount}</p>
                  </div>
                ))
              }
            </TableCell>
            <TableCell>
              {
                pasivos.map((item,i) => (
                  <div>
                    <p>{item.label} ${item.amount}</p>
                  </div>
                ))
              }
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BalanceGeneral