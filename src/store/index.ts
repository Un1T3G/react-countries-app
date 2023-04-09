import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducers'
import { countriesApi } from 'src/services/countriesApi'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
