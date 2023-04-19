import React from "react";
import { Outlet } from 'react-router-dom'
import Header from "./Header";

export default function SharedLayout() {
    return(
        <>
            <header>
                <Header />
            </header>
            
            <Outlet />
        </>
    )
}