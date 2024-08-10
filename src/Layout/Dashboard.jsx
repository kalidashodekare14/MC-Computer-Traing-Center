import React, { useState } from 'react';
import useAuth from '../Hooks/useAuth/useAuth'
import { FaHandRock, FaUserCheck, FaUserGraduate } from 'react-icons/fa';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { AiFillNotification } from 'react-icons/ai';
import { IoIosLogOut, IoIosMenu } from 'react-icons/io';

const Dashboard = () => {

    const { user, logOutSystem } = useAuth()
    const naviage = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    const handleLogOutSystem = () => {
        logOutSystem()
        naviage('/')
    }

    const toggleSidebar = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <div className='flex'>
                <div className={`bg-white fixed z-10 inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full '} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 space-y-3 pt-3 w-52 border min-h-screen`}>
                    <div className='border-b pb-5 flex justify-center items-center'>
                        <div className='flex justify-center items-center w-20 h-20 border rounded-2xl'>
                            <FaUserGraduate className='text-4xl' />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center '>
                        <div className='w-full border-b flex items-center space-x-2'>

                            <NavLink
                                to="/dashboard/profile"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "flex items-center p-3 space-x-2 w-full text-xl bg-[#20d7ab] text-white" : "flex items-center p-3 space-x-2 w-full text-xl"
                                }
                            >
                                <FaUserCheck className='text-3xl' />
                                <span>Profile</span>
                            </NavLink>
                        </div>
                        <div className='w-full border-b  flex items-center space-x-2'>
                            <NavLink
                                to="/dashboard/classes"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "flex items-center p-3 space-x-2 w-full text-xl bg-[#20d7ab] text-white" : "flex items-center p-3 space-x-2 w-full text-xl"
                                }
                            >
                                <MdOutlineOndemandVideo className='text-2xl' />
                                <span>Classes</span>
                            </NavLink>
                        </div>
                        <div className='w-full border-b  flex items-center space-x-2'>
                            <NavLink
                                to="/dashboard/support"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "flex items-center p-3 space-x-2 w-full text-xl bg-[#20d7ab] text-white" : "flex items-center p-3 space-x-2 w-full text-xl"
                                }
                            >
                                <FaHandRock className='text-2xl' />
                                <span>Support</span>
                            </NavLink>
                        </div>
                        <div className='w-full border-b flex items-center space-x-2'>
                            <NavLink
                                to="/dashboard/notish"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "flex items-center p-3 space-x-2 w-full text-xl bg-[#20d7ab] text-white" : "flex items-center p-3 space-x-2 w-full text-xl"
                                }
                            >
                                <AiFillNotification className='text-2xl' />
                                <span>Notish</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className='fixed bottom-5 p-[10px]'>
                        <div onClick={handleLogOutSystem} className='btn flex items-center space-x-3 w-full'>
                            <IoIosLogOut className='text-2xl' />
                            <h1 className='text-xl'>Logout</h1>
                        </div>
                    </div>
                </div>
                <div className='w-full border min-h-screen'>
                    <div className='md:hidden flex justify-end items-end p-3 border'>
                        <IoIosMenu className='text-3xl cursor-pointer' onClick={toggleSidebar}></IoIosMenu>
                    </div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;