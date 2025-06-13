"use client"

import type React from "react"

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleAppointmentModal } from "@/app/store/slices/uiSlice"
import { addAppointment } from "@/app/store/slices/appoinmentSlice"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { format } from "date-fns"
import { CheckCircle, ChevronLeft } from "lucide-react"
import { v4 as uuidv4 } from "uuid"
import Image from "next/image"
import type { RootState } from "@/app/store/store"

export default function AppointmentModal() {
  const dispatch = useDispatch()
  const { isAppointmentModalOpen } = useSelector((state: RootState) => state.ui)
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    // Basic Information
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "male",
    bloodGroup: "",
    maritalStatus: "",

    // Contact Information
    address: "",
    city: "",
    state: "",
    zipCode: "",

    // Guardian Information
    guardianName: "",
    guardianRelation: "",
    guardianPhone: "",

    // Medical Information
    symptoms: "",
    allergies: "",
    medications: "",
    medicalHistory: "",
    familyHistory: "",
    bloodPressure: "",
    height: "",
    weight: "",

    // Emergency Contact
    emergencyContact: "",
    emergencyRelation: "",
    emergencyPhone: "",
  })

  const doctors = [
    {
      id: "dr-sarah-johnson",
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      image: "/placeholder.svg?height=100&width=100",
      fee: 800,
      availableDays: [1, 3, 5], // Monday, Wednesday, Friday
      availableTimes: ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"],
    },
    {
      id: "dr-michael-chen",
      name: "Dr. Michael Chen",
      specialty: "Neurology",
      image: "/placeholder.svg?height=100&width=100",
      fee: 1000,
      availableDays: [2, 4], // Tuesday, Thursday
      availableTimes: ["10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM"],
    },
    {
      id: "dr-emily-rodriguez",
      name: "Dr. Emily Rodriguez",
      specialty: "Orthopedics",
      image: "/placeholder.svg?height=100&width=100",
      fee: 900,
      availableDays: [1, 2, 3, 4, 5], // Monday to Friday
      availableTimes: ["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"],
    },
    {
      id: "dr-david-thompson",
      name: "Dr. David Thompson",
      specialty: "Pediatrics",
      image: "/placeholder.svg?height=100&width=100",
      fee: 700,
      availableDays: [1, 3, 5], // Monday, Wednesday, Friday
      availableTimes: ["8:30 AM", "9:30 AM", "10:30 AM", "2:00 PM", "3:00 PM", "4:00 PM"],
    },
  ]

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
  const maritalStatuses = ["Single", "Married", "Divorced", "Widowed"]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date)
    setSelectedTime(null) // Reset time when date changes
  }

  const handleDoctorSelect = (doctorId: string) => {
    setSelectedDoctor(doctorId)
    setSelectedDate(undefined) // Reset date when doctor changes
    setSelectedTime(null) // Reset time when doctor changes
  }

  const getSelectedDoctor = () => {
    return doctors.find((doctor) => doctor.id === selectedDoctor)
  }

  const isDateAvailable = (date: Date) => {
    const doctor = getSelectedDoctor()
    if (!doctor) return false

    const day = date.getDay()
    // Convert day (0 = Sunday, 1 = Monday, etc.) to match doctor's availableDays
    const adjustedDay = day === 0 ? 7 : day // Make Sunday = 7 instead of 0
    return doctor.availableDays.includes(adjustedDay)
  }

  const getAvailableTimes = () => {
    const doctor = getSelectedDoctor()
    if (!doctor || !selectedDate) return []
    return doctor.availableTimes
  }

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    const doctor = getSelectedDoctor()
    if (!doctor || !selectedDate || !selectedTime) return

    const appointment = {
      id: uuidv4(),
      patientName: formData.fullName,
      doctorName: doctor.name,
      department: doctor.specialty,
      date: format(selectedDate, "PP"),
      time: selectedTime,
      status: "pending",
      patientInfo: formData,
      fee: doctor.fee,
    }

    dispatch(addAppointment(appointment))
    dispatch(toggleAppointmentModal())
    // Reset form
    setCurrentStep(1)
    setSelectedDoctor(null)
    setSelectedDate(undefined)
    setSelectedTime(null)
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      gender: "male",
      bloodGroup: "",
      maritalStatus: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      guardianName: "",
      guardianRelation: "",
      guardianPhone: "",
      symptoms: "",
      allergies: "",
      medications: "",
      medicalHistory: "",
      familyHistory: "",
      bloodPressure: "",
      height: "",
      weight: "",
      emergencyContact: "",
      emergencyRelation: "",
      emergencyPhone: "",
    })
  }

  return (
    <Dialog open={isAppointmentModalOpen} onOpenChange={() => dispatch(toggleAppointmentModal())}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Book an Appointment</DialogTitle>
        </DialogHeader>

        {/* Progress Steps */}
        <div className="flex justify-between mb-8 relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="relative z-10 flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= step ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"
                }`}
              >
                {step}
              </div>
              <div className="text-sm mt-2 font-medium text-gray-600">
                {step === 1 && "Select Doctor"}
                {step === 2 && "Choose Time"}
                {step === 3 && "Patient Info"}
                {step === 4 && "Review"}
              </div>
            </div>
          ))}
        </div>

        {/* Step 1: Select Doctor */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Select a Doctor</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {doctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-all ${
                    selectedDoctor === doctor.id
                      ? "border-blue-600 bg-blue-50 shadow-md"
                      : "border-gray-200 hover:border-blue-300"
                  }`}
                  onClick={() => handleDoctorSelect(doctor.id)}
                >
                  <div className="flex items-center space-x-4">
                    <Image
                      src={doctor.image || "/placeholder.svg"}
                      alt={doctor.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold">{doctor.name}</h4>
                      <p className="text-blue-600">{doctor.specialty}</p>
                      <p className="text-sm text-gray-500">Consultation Fee: ₹{doctor.fee}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <Button onClick={nextStep} disabled={!selectedDoctor} className="bg-blue-600 hover:bg-blue-700">
                Next
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Choose Date and Time */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Choose Date & Time</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label className="mb-2 block">Select Date</Label>
                <div className="border rounded-md p-4">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={handleDateSelect}
                    disabled={(date: number | Date) => {
                      // Disable past dates, weekends, and dates not available for the selected doctor
                      const dateObj = typeof date === "number" ? new Date(date) : date
                      const isPastDate = dateObj < new Date(new Date().setHours(0, 0, 0, 0))
                      return isPastDate || !isDateAvailable(dateObj)
                    }}
                    className="rounded-md border"
                  />
                </div>
              </div>

              <div>
                <Label className="mb-2 block">Select Time</Label>
                <div className="border rounded-md p-4 h-full">
                  {selectedDate ? (
                    <div className="grid grid-cols-2 gap-2">
                      {getAvailableTimes().map((time) => (
                        <div
                          key={time}
                          className={`p-2 border rounded-md text-center cursor-pointer ${
                            selectedTime === time ? "bg-blue-600 text-white border-blue-600" : "hover:border-blue-300"
                          }`}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-500">
                      Please select a date first
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={prevStep}>
                <ChevronLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
              <Button
                onClick={nextStep}
                disabled={!selectedDate || !selectedTime}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Next
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Patient Information */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Patient Information</h3>

            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid grid-cols-4">
                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
                <TabsTrigger value="medical">Medical</TabsTrigger>
                <TabsTrigger value="additional">Additional</TabsTrigger>
              </TabsList>

              {/* Basic Information */}
              <TabsContent value="basic" className="space-y-4 pt-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="patient@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                    <Input
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Gender *</Label>
                    <RadioGroup
                      defaultValue="male"
                      value={formData.gender}
                      onValueChange={(value: string) => handleRadioChange("gender", value)}
                    >
                      <div className="flex space-x-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="male" id="male" />
                          <Label htmlFor="male">Male</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="female" id="female" />
                          <Label htmlFor="female">Female</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other">Other</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bloodGroup">Blood Group</Label>
                    <Select
                      value={formData.bloodGroup}
                      onValueChange={(value: string) => handleSelectChange("bloodGroup", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select blood group" />
                      </SelectTrigger>
                      <SelectContent>
                        {bloodGroups.map((group) => (
                          <SelectItem key={group} value={group}>
                            {group}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="maritalStatus">Marital Status</Label>
                  <Select
                    value={formData.maritalStatus}
                    onValueChange={(value: string) => handleSelectChange("maritalStatus", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select marital status" />
                    </SelectTrigger>
                    <SelectContent>
                      {maritalStatuses.map((status) => (
                        <SelectItem key={status} value={status}>
                          {status}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </TabsContent>

              {/* Contact Information */}
              <TabsContent value="contact" className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="123 Main Street"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Mumbai"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder="Maharashtra"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">Zip Code</Label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder="400001"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-4">Guardian Information (if applicable)</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="guardianName">Guardian Name</Label>
                      <Input
                        id="guardianName"
                        name="guardianName"
                        value={formData.guardianName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guardianRelation">Relationship</Label>
                      <Input
                        id="guardianRelation"
                        name="guardianRelation"
                        value={formData.guardianRelation}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2 mt-4">
                    <Label htmlFor="guardianPhone">Guardian Phone</Label>
                    <Input
                      id="guardianPhone"
                      name="guardianPhone"
                      value={formData.guardianPhone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-4">Emergency Contact</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="emergencyContact">Name</Label>
                      <Input
                        id="emergencyContact"
                        name="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emergencyRelation">Relationship</Label>
                      <Input
                        id="emergencyRelation"
                        name="emergencyRelation"
                        value={formData.emergencyRelation}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2 mt-4">
                    <Label htmlFor="emergencyPhone">Phone Number</Label>
                    <Input
                      id="emergencyPhone"
                      name="emergencyPhone"
                      value={formData.emergencyPhone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </TabsContent>

              {/* Medical Information */}
              <TabsContent value="medical" className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="symptoms">Describe your symptoms or reason for the appointment</Label>
                  <Textarea
                    id="symptoms"
                    name="symptoms"
                    value={formData.symptoms}
                    onChange={handleInputChange}
                    placeholder="Please describe your symptoms"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="allergies">Any known allergies</Label>
                  <Textarea
                    id="allergies"
                    name="allergies"
                    value={formData.allergies}
                    onChange={handleInputChange}
                    placeholder="List any allergies"
                    rows={2}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="medications">List any medications you are currently taking</Label>
                  <Textarea
                    id="medications"
                    name="medications"
                    value={formData.medications}
                    onChange={handleInputChange}
                    placeholder="Current medications"
                    rows={2}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="medicalHistory">Previous medical conditions, surgeries, etc.</Label>
                  <Textarea
                    id="medicalHistory"
                    name="medicalHistory"
                    value={formData.medicalHistory}
                    onChange={handleInputChange}
                    placeholder="Medical history"
                    rows={2}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="familyHistory">Family history of diseases</Label>
                  <Textarea
                    id="familyHistory"
                    name="familyHistory"
                    value={formData.familyHistory}
                    onChange={handleInputChange}
                    placeholder="Family medical history"
                    rows={2}
                  />
                </div>
              </TabsContent>

              {/* Additional Information */}
              <TabsContent value="additional" className="space-y-4 pt-4">
                <h4 className="font-medium mb-4">Physical Measurements</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="bloodPressure">Blood Pressure</Label>
                    <Input
                      id="bloodPressure"
                      name="bloodPressure"
                      value={formData.bloodPressure}
                      onChange={handleInputChange}
                      placeholder="120/80"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="height">Height (cm)</Label>
                    <Input
                      id="height"
                      name="height"
                      value={formData.height}
                      onChange={handleInputChange}
                      placeholder="175"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input
                      id="weight"
                      name="weight"
                      value={formData.weight}
                      onChange={handleInputChange}
                      placeholder="70"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex justify-between">
              <Button variant="outline" onClick={prevStep}>
                <ChevronLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
              <Button
                onClick={nextStep}
                disabled={!formData.fullName || !formData.email || !formData.phone}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Next
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Review & Confirm */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Review & Confirm</h3>

            <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4">Appointment Summary</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-start">
                    <div className="font-medium w-24">Doctor:</div>
                    <div>{getSelectedDoctor()?.name}</div>
                  </div>
                  <div className="flex items-start">
                    <div className="font-medium w-24">Specialty:</div>
                    <div>{getSelectedDoctor()?.specialty}</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <div className="font-medium w-24">Date:</div>
                    <div>{selectedDate ? format(selectedDate, "PP") : ""}</div>
                  </div>
                  <div className="flex items-start">
                    <div className="font-medium w-24">Time:</div>
                    <div>{selectedTime}</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-blue-200">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Consultation Fee:</div>
                  <div className="text-lg font-semibold">₹{getSelectedDoctor()?.fee}</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4">Patient Information Summary</h4>
              <div className="grid md:grid-cols-2 gap-y-2 gap-x-6">
                <div className="flex items-start">
                  <div className="font-medium w-24">Name:</div>
                  <div>{formData.fullName}</div>
                </div>
                <div className="flex items-start">
                  <div className="font-medium w-24">Email:</div>
                  <div>{formData.email}</div>
                </div>
                <div className="flex items-start">
                  <div className="font-medium w-24">Phone:</div>
                  <div>{formData.phone}</div>
                </div>
                <div className="flex items-start">
                  <div className="font-medium w-24">Gender:</div>
                  <div>{formData.gender}</div>
                </div>
                <div className="flex items-start">
                  <div className="font-medium w-24">Blood Group:</div>
                  <div>{formData.bloodGroup || "Not specified"}</div>
                </div>
                <div className="flex items-start">
                  <div className="font-medium w-24">Emergency:</div>
                  <div>{formData.emergencyPhone || "Not specified"}</div>
                </div>
              </div>

              {formData.symptoms && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-start">
                    <div className="font-medium w-24">Symptoms:</div>
                    <div>{formData.symptoms}</div>
                  </div>
                </div>
              )}

              {formData.allergies && (
                <div className="mt-2">
                  <div className="flex items-start">
                    <div className="font-medium w-24">Allergies:</div>
                    <div>{formData.allergies}</div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={prevStep}>
                <ChevronLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
              <Button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700">
                Confirm Booking <CheckCircle className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
