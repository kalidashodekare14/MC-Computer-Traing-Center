import React from 'react';
import Titles from '../../Hooks/Title/Titles';
import { MdOutlineStackedLineChart } from "react-icons/md";
import { FaUsersCog } from 'react-icons/fa';
import { GrCertificate } from 'react-icons/gr';

const Facilities = () => {
    return (
        <div className='my-20'>
            <Titles>Our Facilities</Titles>
            <div className='mx-5 space-y-10 lg:space-y-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:mx-32 my-20'>
                <div className='relative  text-center space-y-3  border border-[#20d7ab] p-3'>
                    <div className='absolute top-0 transform left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl p-5 rounded-full bg-[#20d7ab]'>
                        <MdOutlineStackedLineChart />
                    </div>
                    <h1 className=' font-bold pt-5'>CAREER DEVELOPMENT COURSES</h1>
                    <p className=' text-[14px] text-[#727272]'>provide essential skills and networking opportunities to help students build successful careers.</p>
                </div>
                <div className='relative  text-center space-y-3  border border-[#20d7ab] p-3'>
                    <div className='absolute top-0 transform left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl p-5 rounded-full bg-[#20d7ab]'>
                        <FaUsersCog />
                    </div>
                    <h1 className=' font-bold pt-5'>LIVE TIME SUPPORT</h1>
                    <p className=' text-[14px] text-[#727272]'>offers continuous assistance to ensure you have the help you need at any moment.</p>
                </div>
                <div className='relative  text-center space-y-3  border border-[#20d7ab] p-3'>
                    <div className='absolute top-0 transform left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl p-5 rounded-full bg-[#20d7ab]'>
                        <GrCertificate />
                    </div>
                    <h1 className=' font-bold pt-5'>ONLINE CERTIFICATE VERIFICATION</h1>
                    <p className=' text-[14px] text-[#727272]'> allows instant and secure validation of your credentials anytime, anywhere.</p>
                </div>
                <div className='relative  text-center space-y-3  border border-[#20d7ab] p-3'>
                    <div className='absolute top-0 transform left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl p-5 rounded-full bg-[#20d7ab]'>
                        <MdOutlineStackedLineChart />
                    </div>
                    <h1 className=' font-bold pt-5'>CAREER DEVELOPMENT COURSES</h1>
                    <p className=' text-[14px] text-[#727272]'>provide essential skills and networking opportunities to help students build successful careers.</p>
                </div>
            </div>
        </div>
    );
};

export default Facilities;