import { AuthContext } from 'auth/authContext'
import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router';

export const PublicRoute = (props) => {
    const { user } = useContext(AuthContext);

    return user.logged ? <Navigate to="/marvel" /> : props.children;
}
