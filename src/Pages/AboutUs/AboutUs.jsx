import React from 'react';
import training from '../../assets/train.jpg'
import plans from '../../assets/futures.avif'
import mision from '../../assets/mision.jpg'
import vision from '../../assets/vision.jpg'

import './AboutUs.css'
import { FaChartLine, FaGlobe } from 'react-icons/fa';
import { GrDocumentConfig } from 'react-icons/gr';

const AboutUs = () => {
    return (
        <div className='min-h-screen'>
            <div className='lg:h-[60vh] h-[40vh] flex justify-center items-center aboutImage bg-center bg-no-repeat bg-cover'>
                <h1 className='text-white text-5xl pb-3 border-b-4 border-[#20d7ab]'>About Us</h1>
            </div>
            {/* About Us Section */}
            <div className='my-20 flex flex-col lg:flex-row justify-center items-center lg:space-x-10 px-3 lg:px-0'>
                <img className='w-[30rem] h-[50vh] rounded-lg' src={training} alt="" />
                <div className='lg:w-[40%] text-center lg:text-left space-y-3 my-5'>
                    <h1 className='text-4xl border-b-4 w-40 border-[#20d7ab] m-auto lg:m-0'>About Us</h1>
                    <h3 className='text-2xl'>
                        Welcome to
                        <span className='ms-2 text-[#20d7ab]'>MC Computer</span>
                    </h3>
                    <p className='text-[#727272]'>At MC Computer, we are dedicated to empowering individuals with the skills and knowledge needed to thrive in today's digital world. Whether you're a beginner eager to learn the basics or a seasoned professional looking to advance your expertise, our comprehensive range of courses is designed to cater to your needs.</p>
                    <button className='btn bg-opacity-0 border-[#20d7ab] hover:bg-[#20d7ab] hover:text-white'>Learn More</button>
                </div>
            </div>
            {/* Mision and Plans Section */}
            <div className='lg:mx-32 lg:my-20 flex flex-col lg:flex-row justify-center items-center lg:space-x-5 space-y-5 lg:space-y-0 px-3 pb-10'>
                <div className='border flex flex-col justify-center items-center'>
                    <div className='w-full'>
                        <img className='w-full' src={plans} alt="" /> 
                    </div>
                    <div className='-mt-10 flex justify-center items-center border-4 border-white shadow-lg bg-[#20d7ab]  text-white w-20 h-20 rounded-full text-4xl'>
                        <FaChartLine />
                    </div>
                    <div className='p-3 text-center space-y-3'>
                        <h1 className='text-3xl font-bold text-[#20d7ab]'>Futures Plans</h1>
                        <p className='text-[#000000c3]'>We plan to expand courses, develop online learning, and build industry partnerships for training.</p>
                    </div>
                </div>
                <div className='border flex flex-col justify-center items-center'>
                    <div className='w-full'>
                        <img className='w-full' src={mision} alt="" /> 
                    </div>
                    <div className='-mt-10 flex justify-center items-center border-4 border-white shadow-lg bg-[#20d7ab]  text-white w-20 h-20 rounded-full text-4xl'>
                        <FaGlobe />
                    </div>
                    <div className='p-3 text-center space-y-3'>
                        <h1 className='text-3xl font-bold text-[#20d7ab]'>Our Mission</h1>
                        <p className='text-[#000000c3]'>Providing exceptional training and support to equip individuals with skills for a thriving digital future.</p>
                    </div>
                </div>
                <div className='border flex flex-col justify-center items-center'>
                    <div className='w-full'>
                        <img className='w-full ' src={vision} alt="" /> 
                    </div>
                    <div className='-mt-10 flex justify-center items-center border-4 border-white shadow-lg bg-[#20d7ab]  text-white w-20 h-20 rounded-full text-4xl'>
                        <GrDocumentConfig />
                    </div>
                    <div className='p-3 text-center space-y-3'>
                        <h1 className='text-3xl font-bold text-[#20d7ab]'>Our Vision</h1>
                        <p className='text-[#000000c3]'>Our vision is to be the top center for empowering everyone with essential tech skills.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;