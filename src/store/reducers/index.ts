import { combineReducers } from '@reduxjs/toolkit'
import themeChangeSlice from './theme-changer/theme-change.slice'
import { countriesApi } from 'src/services/countriesApi'

export const rootReducer = combineReducers({
  themeChangeSlice,
  [countriesApi.reducerPath]: countriesApi.reducer
})
