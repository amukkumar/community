import { configureStore } from '@reduxjs/toolkit'
import globalSlice from './features/globalSlice'

export const makeStore = () => {
    return configureStore({
        reducer: { global: globalSlice }
    })
}