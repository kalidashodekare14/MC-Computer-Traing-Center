import React from 'react';
import { FaThList, FaUserGraduate } from 'react-icons/fa';
import useAuth from '../../../Hooks/useAuth/useAuth';
import useAxiosPublic from '../../../Hooks/useAxiosPublic/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const UserProfile = () => {

    const { user } = useAuth()
    const axiosSecure = useAxiosPublic()

    const { data: student_profile = {}, refetch } = useQuery({
        queryKey: ['student_profile', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/student-profile/${user.email}`)
            return res.data[0]
        }
    })

    const {name, email, dateOfBirth, address, citizen, gender, language, nationality, status, studentId} = student_profile
    console.log(student_profile)

    return (
        <div className='w-full min-h-screen bg-[#f5f5f6] px-10'>
            <div className='bg-white w-full  h-[100vh] shadow-lg px-10'>
                <div className='flex items-center space-x-5 shadow-lg p-5 '>
                    <div className='border w-28 h-28 flex justify-center items-center rounded-full'>
                        <FaUserGraduate className='text-4xl' />
                    </div>
                    <h1 className='text-2xl'>{name}</h1>
                </div>
                <div className='mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <div className='border p-3 shadow-lg'>
                        <h1>User Name</h1>
                        <p>{name}</p>
                    </div>
                    <div className='border p-3 shadow-lg'>
                        <h1>User Email</h1>
                        <p>{email}</p>
                    </div>
                </div>
                <div className=''>
                    <div className='flex justify-center items-center space-x-3 '>
                        <FaThList />
                        <h1 className='text-center my-5 text-2xl'>General Information</h1>
                    </div>
                    <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
                        <div className='shadow-lg'>
                            <div className='border  p-5'>
                                <p>Student Id</p>
                                <p>{studentId}</p>
                            </div>
                        </div>
                        <div className='shadow-lg'>
                            <div className='border  p-5'>
                                <p>Date Of Birth</p>
                                <p>{dateOfBirth}</p>
                            </div>
                        </div>
                        <div className='shadow-lg'>
                            <div className='border  p-5'>
                                <p>Gender</p>
                                <p>{gender}</p>
                            </div>
                        </div>
                        <div className='shadow-lg'>
                            <div className='border  p-5'>
                                <p>Address</p>
                                <p>{address}</p>
                            </div>
                        </div>
                        <div className='shadow-lg'>
                            <div className='border  p-5'>
                                <p>Citizen</p>
                                <p>{citizen}</p>
                            </div>
                        </div>
                        <div className='shadow-lg'>
                            <div className='border  p-5'>
                                <p>Natinality</p>
                                <p>{nationality}</p>
                            </div>
                        </div>
                        <div className='shadow-lg'>
                            <div className='border  p-5'>
                                <p>Language</p>
                                <p>{language}</p>
                            </div>
                        </div>
                        <div className='shadow-lg'>
                            <div className='border  p-5'>
                                <p>Status</p>
                                <p>{status}</p>
                            </div>
                        </div>
                    </div>
                    <div className='text-center my-5'>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;