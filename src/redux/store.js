import { configureStore } from '@reduxjs/toolkit'
import ViewReducer from './reducers/ViewSlice'

export const store = configureStore({
  reducer: {
    view: ViewReducer
  },
})