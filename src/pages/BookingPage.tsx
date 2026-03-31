import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Calendar, 
  Clock, 
  Video, 
  Phone, 
  MessageCircle, 
  Star,
  CheckCircle,
  Users,
  MapPin
} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { mockCounselors } from '../data/mockData'

const BookingPage: React.FC = () => {
  const [selectedCounselor, setSelectedCounselor] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [sessionType, setSessionType] = useState<'video' | 'phone' | 'text'>('video')
  const [isConfirmed, setIsConfirmed] = useState(false)

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ]

  const handleBooking = () => {
    if (selectedCounselor && selectedDate && selectedTime) {
      setIsConfirmed(true)
    }
  }

  const getSessionIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="h-5 w-5" />
      case 'phone': return <Phone className="h-5 w-5" />
      default: return <MessageCircle className="h-5 w-5" />
    }
  }

  const getSessionTypeName = (type: string) => {
    switch (type) {
      case 'video': return 'Video Call'
      case 'phone': return 'Phone Call'
      default: return 'Text Chat'
    }
  }

  if (isConfirmed) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation isAuthenticated={true} />
        
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Session Booked Successfully
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your counseling session has been scheduled
            </p>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8 max-w-2xl mx-auto">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Booking Details</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-medium">Counselor</p>
                    <p className="text-gray-600">
                      {mockCounselors.find(c => c.id === selectedCounselor)?.name}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-medium">Date</p>
                    <p className="text-gray-600">{selectedDate}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-medium">Time</p>
                    <p className="text-gray-600">{selectedTime}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  {getSessionIcon(sessionType)}
                  <div>
                    <p className="font-medium">Session Type</p>
                    <p className="text-gray-600">{getSessionTypeName(sessionType)}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard" className="btn-primary px-8 py-3">
                Back to Dashboard
              </Link>
              <button 
                onClick={() => {
                  setIsConfirmed(false)
                  setSelectedCounselor('')
                  setSelectedDate('')
                  setSelectedTime('')
                }}
                className="btn-secondary px-8 py-3"
              >
                Book Another Session
              </button>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation isAuthenticated={true} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Book a Counseling Session</h1>
          <p className="text-gray-600">
            Connect with licensed mental health professionals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Booking Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Select Counselor */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Select Counselor</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockCounselors.map((counselor) => (
                  <div
                    key={counselor.id}
                    onClick={() => counselor.available && setSelectedCounselor(counselor.id)}
                    className={`card cursor-pointer transition-all ${
                      selectedCounselor === counselor.id
                        ? 'border-primary-500 bg-primary-50'
                        : counselor.available
                        ? 'hover:border-primary-300'
                        : 'opacity-50 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <img
                        src={counselor.photo}
                        alt={counselor.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{counselor.name}</h3>
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(counselor.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">{counselor.rating}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {counselor.specialty.slice(0, 2).map((spec, index) => (
                            <span
                              key={index}
                              className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          {counselor.experience} years experience
                        </p>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <MapPin className="h-3 w-3" />
                          <span>{counselor.languages.join(', ')}</span>
                        </div>
                        {!counselor.available && (
                          <p className="text-sm text-red-600 font-medium">Currently unavailable</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Select Date & Time */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Select Date & Time</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Session Type */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Session Type</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { type: 'video', name: 'Video Call', icon: Video },
                  { type: 'phone', name: 'Phone Call', icon: Phone },
                  { type: 'text', name: 'Text Chat', icon: MessageCircle }
                ].map((option) => {
                  const Icon = option.icon
                  return (
                    <button
                      key={option.type}
                      onClick={() => setSessionType(option.type as any)}
                      className={`card p-6 text-center transition-all ${
                        sessionType === option.type
                          ? 'border-primary-500 bg-primary-50'
                          : 'hover:border-primary-300'
                      }`}
                    >
                      <Icon className="h-8 w-8 mx-auto mb-3 text-primary-600" />
                      <h3 className="font-semibold text-gray-900">{option.name}</h3>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Booking Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="card sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Booking Summary</h2>
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Counselor</p>
                  <p className="font-medium">
                    {selectedCounselor
                      ? mockCounselors.find(c => c.id === selectedCounselor)?.name
                      : 'Not selected'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Date</p>
                  <p className="font-medium">{selectedDate || 'Not selected'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Time</p>
                  <p className="font-medium">{selectedTime || 'Not selected'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Session Type</p>
                  <p className="font-medium">{getSessionTypeName(sessionType)}</p>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold">Session Fee</span>
                  <span className="text-2xl font-bold text-primary-600">Free</span>
                </div>
                <button
                  onClick={handleBooking}
                  disabled={!selectedCounselor || !selectedDate || !selectedTime}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Confirm Booking
                </button>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  All sessions are confidential and secure. Your privacy is our priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default BookingPage
