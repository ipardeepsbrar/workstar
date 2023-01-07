import { createSlice } from '@reduxjs/toolkit'

const alertSlice = createSlice({
  name: 'alertSlice',
  initialState: {
    alertMessage: null
  },
  reducers: {
      setAlert: (state, action) => {
        state.alertMessage = action.payload
      }
  }
})

// Action creators are generated for each case reducer function
export const alertActions = alertSlice.actions

export default alertSlice