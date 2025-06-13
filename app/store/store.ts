import { configureStore } from "@reduxjs/toolkit"
import appointmentSlice from "@/app/store/slices/appoinmentSlice"
import uiSlice from "./slices/uiSlice"

export const store = configureStore({
  reducer: {
    appointment: appointmentSlice,
    ui: uiSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

