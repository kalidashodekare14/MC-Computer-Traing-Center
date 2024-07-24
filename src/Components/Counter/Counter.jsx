import React from 'react';
import './Counter.css'
import { MdLibraryBooks, MdPlaylistAddCheckCircle } from 'react-icons/md';
import { PiStudentBold } from 'react-icons/pi';
import { GrCertificate } from 'react-icons/gr';
import CountUp from 'react-countup';

const Counter = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4  bg bg-fixed bg-center bg-cover h-[50vh] my-20'>
            <div className='text-white flex flex-col justify-center items-center'>
                <div className=' bg-[#20d7ab] text-3xl w-16 h-16 rounded-full flex justify-center items-center'>
                    <MdLibraryBooks className='' />
                </div>
                <h2 className='text-2xl'>Courses</h2>
                <p className='text-[25px] text-[#20d7ab]'>
                    <CountUp end={10} />
                    <span>+</span>
                </p>

            </div>
            <div className='text-white flex flex-col justify-center items-center'>
                <div className=' bg-[#20d7ab] text-3xl w-16 h-16 rounded-full flex justify-center items-center'>
                    <PiStudentBold />
                </div>
                <h2 className='text-2xl'>Students</h2>
                <p className='text-[25px] text-[#20d7ab]'>
                    <CountUp end={2000} />
                    <span>+</span>
                </p>
            </div>
            <div className='text-white flex flex-col justify-center items-center'>
                <div className=' bg-[#20d7ab] text-3xl w-16 h-16 rounded-full flex justify-center items-center'>
                    <GrCertificate />
                </div>
                <h2 className='text-2xl'>Cerfificate</h2>
                <p className='text-[25px] text-[#20d7ab]'>
                    <CountUp end={1500} />
                    <span>+</span>
                </p>

            </div>
            <div className='text-white flex flex-col justify-center items-center'>
                <div className=' bg-[#20d7ab] text-3xl w-16 h-16 rounded-full flex justify-center items-center'>
                    <MdPlaylistAddCheckCircle />
                </div>
                <h2 className='text-2xl'>Seccess</h2>
                <p className='text-[25px] text-[#20d7ab]'>
                    <CountUp end={1500} />
                    <span>+</span>
                </p>
            </div>
        </div>
    );
};

export default Counter;