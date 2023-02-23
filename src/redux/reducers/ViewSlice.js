import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  tourView: 0,
}

export const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    setTourView: (state, action) => {
      state.tourView = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setTourView } = viewSlice.actions

export default viewSlice.reducer