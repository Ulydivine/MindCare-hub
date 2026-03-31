import { createBrowserRouter, Navigate } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage'
import Dashboard from '../pages/Dashboard'
import SelfAssessment from '../pages/SelfAssessment'
import BookingPage from '../pages/BookingPage'
import CommunityForum from '../pages/CommunityForum'
import ResourcesPage from '../pages/ResourcesPage'
import ProfilePage from '../pages/ProfilePage'

// Mock authentication check
const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true'
}

// Protected route wrapper
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />
  }
  return <>{children}</>
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: '/assessment',
    element: (
      <ProtectedRoute>
        <SelfAssessment />
      </ProtectedRoute>
    ),
  },
  {
    path: '/booking',
    element: (
      <ProtectedRoute>
        <BookingPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/forum',
    element: (
      <ProtectedRoute>
        <CommunityForum />
      </ProtectedRoute>
    ),
  },
  {
    path: '/resources',
    element: (
      <ProtectedRoute>
        <ResourcesPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/profile',
    element: (
      <ProtectedRoute>
        <ProfilePage />
      </ProtectedRoute>
    ),
  },
])
