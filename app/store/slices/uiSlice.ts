import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface UIState {
  isMobileMenuOpen: boolean
  isAppointmentModalOpen: boolean
  currentTheme: "light" | "dark"
}

const initialState: UIState = {
  isMobileMenuOpen: false,
  isAppointmentModalOpen: false,
  currentTheme: "light",
}

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen
    },
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMobileMenuOpen = action.payload
    },
    toggleAppointmentModal: (state) => {
      state.isAppointmentModalOpen = !state.isAppointmentModalOpen
    },
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.currentTheme = action.payload
    },
  },
})

export const { toggleMobileMenu, setMobileMenuOpen, toggleAppointmentModal, setTheme } = uiSlice.actions
export default uiSlice.reducer
