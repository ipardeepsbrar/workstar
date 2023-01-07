import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'authSlice',
  initialState: {
    loggedIn: false,
    token: null
  },
  reducers: {
      logIn: (state, action) => {
        // log in
        state.token = action.payload.token
        state.loggedIn = true
        
      },
      logOut: (state, action) => {
        state.loggedIn = false
        state.token = null
      }
  }
})

// Action creators are generated for each case reducer function
export const authActions = authSlice.actions

export default authSlice