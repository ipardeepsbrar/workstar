import { createSlice } from '@reduxjs/toolkit'

const menuButtonSlice = createSlice({
  name: 'menuButton',
  initialState: {
    menuOpen: false
  },
  reducers: {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      toggleMenu: state => {
        state.menuOpen = !state.menuOpen
      }
  }
})

// Action creators are generated for each case reducer function
export const toggleMenuActions = menuButtonSlice.actions

export default menuButtonSlice