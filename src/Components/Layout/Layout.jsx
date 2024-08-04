//Importing custom css: 
import Style from './Layout.module.css'


// Importing Components:
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useState, useEffect } from 'react';




//Importing Router Components:
import { Outlet, useLocation } from 'react-router-dom';



function Layout() {

    const location = useLocation();
    
    useEffect(() => {
        const title = location.pathname === '/' ? 'Home' : location.pathname.slice(1, );
        document.title = title.charAt(0).toUpperCase() + title.slice(1);
    }, [location]);

    return (
        <>
        <Navbar />
        <Outlet />
        <Footer />
        </>
    )
}

export default Layout