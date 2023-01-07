import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import alertSlice from './alertSlice'
import menuButtonSlice from './menuButtonSlice'

const store = configureStore({
  reducer: {
    menuButton: menuButtonSlice.reducer,
    auth: authSlice.reducer,
    alert: alertSlice.reducer
  }
})

export default store