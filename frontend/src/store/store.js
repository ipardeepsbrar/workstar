import { configureStore } from '@reduxjs/toolkit'
import menuButtonSlice from './menuButtonSlice'

const store = configureStore({
  reducer: {
    menuButton: menuButtonSlice.reducer
  }
})

export default store