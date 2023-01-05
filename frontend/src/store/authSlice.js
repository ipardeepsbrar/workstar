import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'authSlice',
  initialState: {
    loggedIn: false
  },
  reducers: {
      logIn: state => {
        // log in
        state.loggedIn = true
        
      },
      logOut: state => {
        state.loggedIn = false
      }
  }
})

// Action creators are generated for each case reducer function
export const authActions = authSlice.actions

export default authSlice