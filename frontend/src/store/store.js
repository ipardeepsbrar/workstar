import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import errorSlice from './errorSlice'
import menuButtonSlice from './menuButtonSlice'

const store = configureStore({
  reducer: {
    menuButton: menuButtonSlice.reducer,
    auth: authSlice.reducer,
    error: errorSlice.reducer
  }
})

export default store