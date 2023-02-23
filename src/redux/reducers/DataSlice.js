import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activos: [{
    label: "Efectivo", amount: 6000
  }],
  pasivos: [{
    label: "Inversión inicial", amount: 1000
  },{
    label: "Prestamo", amount: 5000
  },]
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setActivos: (state, action) => {
      state.activos = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setActivos } = dataSlice.actions

export default dataSlice.reducer