import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({ auth, children }) => {

    if (auth === false) {
        return <Navigate to="/login" replace />
    }

    // return <children/>  to render only one component
    return children ? children : <Outlet />
}

export default ProtectedRoute