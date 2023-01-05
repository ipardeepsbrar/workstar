import { createSlice } from '@reduxjs/toolkit'

const errorSlice = createSlice({
  name: 'errorSlice',
  initialState: {
    errorMessage: null
  },
  reducers: {
      setError: (state, action) => {
        state.errorMessage = action.payload
      }
  }
})

// Action creators are generated for each case reducer function
export const errorActions = errorSlice.actions

export default errorSlice