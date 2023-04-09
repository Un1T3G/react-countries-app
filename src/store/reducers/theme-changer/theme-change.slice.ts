import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  isDarkMode: false,
}

const themeChangerSlice = createSlice({
  name: 'themeChanger',
  initialState,
  reducers: {
    setDarkModeStatus(state, { payload }: PayloadAction<boolean>) {
      state.isDarkMode = payload
    },
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode
    },
  },
})

export const { toggleDarkMode, setDarkModeStatus } = themeChangerSlice.actions
export default themeChangerSlice.reducer
