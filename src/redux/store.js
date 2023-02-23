import { configureStore } from '@reduxjs/toolkit'
import ViewReducer from './reducers/ViewSlice'
import DataReducer from './reducers/DataSlice'

export const store = configureStore({
  reducer: {
    view: ViewReducer,
    data: DataReducer
  },
})