import { AuthContext } from 'auth/authContext'
import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router';

export const PrivateRoute = (props) => {
    const { user } = useContext(AuthContext);

    return user.logged ? props.children : <Navigate to="/login" />
}
