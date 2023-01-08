import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'authSlice',
  initialState: {
    token: null
  },
  reducers: {
      logIn: (state, action) => {
        state.token = action.payload.token;
        localStorage.setItem('token', action.payload.token)
        
      },
      logOut: (state, action) => {
        state.token = null
        localStorage.removeItem('token');
      },

      register: (state, action) => {
        state.token = action.payload.token;
        localStorage.setItem('token', action.payload.token)
        
      },

      setToken: (state, action) => {
        state.token = action.payload
      }
  }
})

// Action creators are generated for each case reducer function
export const authActions = authSlice.actions

export default authSlice