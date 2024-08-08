import React from 'react';
import useAuth from '../Hooks/useAuth/useAuth'
import { FaUserGraduate } from 'react-icons/fa';

const Dashboard = () => {

    const {user} = useAuth()

    return (
        <div>
            <div className='flex'>
                <div className='w-52 border min-h-screen'>
                    <div>
                        <h1>MC Computer</h1>
                    </div>
                    <div>
                    <FaUserGraduate className='text-4xl' />
                    </div>
                </div>
                <div className='w-full border min-h-screen'>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;