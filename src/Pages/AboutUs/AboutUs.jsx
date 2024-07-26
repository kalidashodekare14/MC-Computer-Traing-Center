import React from 'react';
import training from '../../assets/train.jpg'
import plans from '../../assets/futures.avif'
import mision from '../../assets/mision.jpg'
import vision from '../../assets/vision.jpg'

import './AboutUs.css'
import { FaChartLine } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <div className='min-h-screen'>
            <div className='h-[60vh] flex justify-center items-center aboutImage bg-center bg-no-repeat bg-cover'>
                <h1 className='text-white text-5xl pb-3 border-b-4 border-[#20d7ab]'>About Us</h1>
            </div>
            {/* About Us Section */}
            <div className='my-20 flex justify-center items-center space-x-10'>
                <img className='w-[30rem] h-[50vh] rounded-lg' src={training} alt="" />
                <div className='w-[40%] space-y-3'>
                    <h1 className='text-4xl border-b-4 w-40 border-[#20d7ab]'>About Us</h1>
                    <h3 className='text-2xl'>
                        Welcome to
                        <span className='ms-2 text-[#20d7ab]'>MC Computer</span>
                    </h3>
                    <p className='text-[#727272]'>At MC Computer, we are dedicated to empowering individuals with the skills and knowledge needed to thrive in today's digital world. Whether you're a beginner eager to learn the basics or a seasoned professional looking to advance your expertise, our comprehensive range of courses is designed to cater to your needs.</p>
                    <button className='btn bg-opacity-0 border-[#20d7ab] hover:bg-[#20d7ab] hover:text-white'>Learn More</button>
                </div>
            </div>
            {/* Mision and Plans Section */}
            <div className='lg:mx-32 lg:my-20 flex justify-center items-center space-x-5'>
                <div className='border flex flex-col justify-center items-center'>
                    <div className='w-full'>
                        <img className='w-full' src={plans} alt="" /> 
                    </div>
                    <div className='-mt-10 flex justify-center items-center border-4 border-white shadow-lg bg-[#20d7ab]  text-white w-20 h-20 rounded-full text-4xl'>
                        <FaChartLine />
                    </div>
                    <div className='p-3 text-center space-y-3'>
                        <h1 className='text-3xl font-bold text-[#20d7ab]'>Futures Plans</h1>
                        <p>Our mission is to offer accessible, top-quality computer training for all learners.</p>
                    </div>
                </div>
                <div className='border flex flex-col justify-center items-center'>
                    <div className='w-full'>
                        <img className='w-full' src={plans} alt="" /> 
                    </div>
                    <div className='-mt-10 flex justify-center items-center border-4 border-white shadow-lg bg-[#20d7ab]  text-white w-20 h-20 rounded-full text-4xl'>
                        <FaChartLine />
                    </div>
                    <div className='p-3 text-center space-y-3'>
                        <h1 className='text-3xl font-bold text-[#20d7ab]'>Our Mission</h1>
                        <p>Our mission is to offer accessible, top-quality computer training for all learners.</p>
                    </div>
                </div>
                <div className='border flex flex-col justify-center items-center'>
                    <div className='w-full'>
                        <img className='w-full' src={plans} alt="" /> 
                    </div>
                    <div className='-mt-10 flex justify-center items-center border-4 border-white shadow-lg bg-[#20d7ab]  text-white w-20 h-20 rounded-full text-4xl'>
                        <FaChartLine />
                    </div>
                    <div className='p-3 text-center space-y-3'>
                        <h1 className='text-3xl font-bold text-[#20d7ab]'>Our Vision</h1>
                        <p>Our vision is to be the top center for empowering everyone with essential tech skills.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;