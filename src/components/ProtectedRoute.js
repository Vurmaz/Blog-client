import React from "react";
import { Navigate } from "react-router-dom";
import { getCookie } from "../api";

export default function ProtectedRoute({ children }) {

    if(!getCookie('username')){
        return <Navigate to='/login'/>
    }
    return children
}