import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface AppointmentState {
  appointments: Array<{
    id: string
    patientName: string
    doctorName: string
    department: string
    date: string
    time: string
    status: "pending" | "confirmed" | "cancelled"
  }>
  isLoading: boolean
}

const initialState: AppointmentState = {
  appointments: [],
  isLoading: false,
}

const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    addAppointment: (state, action) => {
      state.appointments.push(action.payload)
    },
    updateAppointmentStatus: (state, action: PayloadAction<{ id: string; status: string }>) => {
      const appointment = state.appointments.find((apt) => apt.id === action.payload.id)
      if (appointment) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        appointment.status = action.payload.status as any
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
  },
})

export const { addAppointment, updateAppointmentStatus, setLoading } = appointmentSlice.actions
export default appointmentSlice.reducer
