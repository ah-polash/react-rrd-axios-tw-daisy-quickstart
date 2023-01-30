import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from '../components/Footer';
import Header from '../components/Header';


export default function AdminLayouts() {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}
