import React from 'react'
import { isAuthenticated } from './FakeAuth'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />
  }
  return children
}


export default ProtectedRoute
