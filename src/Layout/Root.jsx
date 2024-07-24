import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const Root = () => {

    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')


    return (
        <div>
            <div className='relative'>
                {
                    noHeaderFooter || <Navbar></Navbar>
                }
            </div>
            <Outlet></Outlet>
            {
                noHeaderFooter || <Footer></Footer>
            }
        </div>
    );
};

export default Root;