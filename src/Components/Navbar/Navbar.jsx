import React, { useContext } from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {


    const{user, logOut}= useContext(AuthContext);
    const handleLogOut = ()=>{
        logOut()
        .then()
        .catch()
      }


    const [isOpen, setIsOpen] = useState(false);

    const links = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 border-[#20d7ab] my-2 text-[#ffffffc3] transition-colors duration-300 transform dark:text-gray-200 hover:text-[#20d7ab] dark:hover:text-blue-400 md:mx-4 md:my-0" : "my-2 text-[#ffffffc3] transition-colors duration-300 transform dark:text-gray-200 hover:text-[#20d7ab] dark:hover:text-blue-400 md:mx-4 md:my-0"
            } >
            Home
        </NavLink>
        <NavLink
            to="/about-us"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 border-[#20d7ab] my-2 text-[#ffffffc3] transition-colors duration-300 transform dark:text-gray-200 hover:text-[#20d7ab] dark:hover:text-blue-400 md:mx-4 md:my-0" : "my-2 text-[#ffffffc3] transition-colors duration-300 transform dark:text-gray-200 hover:text-[#20d7ab] dark:hover:text-blue-400 md:mx-4 md:my-0"
            }>
            About Us
        </NavLink>
        <NavLink
            to="/courses"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 border-[#20d7ab] my-2 text-[#ffffffc3] transition-colors duration-300 transform dark:text-gray-200 hover:text-[#20d7ab] dark:hover:text-blue-400 md:mx-4 md:my-0" : "my-2 text-[#ffffffc3] transition-colors duration-300 transform dark:text-gray-200 hover:text-[#20d7ab] dark:hover:text-blue-400 md:mx-4 md:my-0"
            } >
            Courses
        </NavLink>
        <NavLink
            to="/gellery"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 border-[#20d7ab] my-2 text-[#ffffffc3] transition-colors duration-300 transform dark:text-gray-200 hover:text-[#20d7ab] dark:hover:text-blue-400 md:mx-4 md:my-0" : "my-2 text-[#ffffffc3] transition-colors duration-300 transform dark:text-gray-200 hover:text-[#20d7ab] dark:hover:text-blue-400 md:mx-4 md:my-0"
            } >
            Gellery
        </NavLink>
        <NavLink
            to="/contact-us"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 border-[#20d7ab] my-2 text-[#ffffffc3] transition-colors duration-300 transform dark:text-gray-200 hover:text-[#20d7ab] dark:hover:text-blue-400 md:mx-4 md:my-0" : "my-2 text-[#ffffffc3] transition-colors duration-300 transform dark:text-gray-200 hover:text-[#20d7ab] dark:hover:text-blue-400 md:mx-4 md:my-0"
            } >
            Contact Us
        </NavLink>
    </>

    return (
        <nav x-data="{ isOpen: false }" className="relative shadow dark:bg-gray-800">
            <div className="w-full  absolute  z-40 bg-[#05090d83] px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <a href="#">
                        <h1 className='font-bold text-2xl text-[#000000c3]'>MC Computer</h1>
                    </a>

                    <div className="flex lg:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            {isOpen ? (
                                <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (

                                <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                            )
                            }
                        </button>
                    </div>
                </div>

                <div className={`${isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'} absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}>
                    <div className="flex flex-col md:flex-row md:mx-6 bg-black lg:bg-opacity-0">
                        {links}
                    </div>


                    {
                        user? 
                        <>
                        
                    <button  onClick={handleLogOut} className="btn px-[30px] bg-[#20d7ab] text-white font-bold border-0">logOut</button>
                    
                        </>
                        :
                        <>
                        <Link to='/login'>
                    <button
                   
                    
                    className="btn px-[30px] bg-[#20d7ab] text-white font-bold border-0">login</button>
                    </Link>
                        </>
                    }

                    {/* <Link to='/login'>
                    <button className="btn px-[30px] bg-[#20d7ab] text-white font-bold border-0">login</button>
                    </Link> */}
                </div>
            </div>
        </nav>

    );
};

export default Navbar;