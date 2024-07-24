import React from 'react';
import { FaFacebook, FaFacebookF, FaInstagramSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='lg:h-[40vh] lg:px-32 pt-10 px-5 lg:space-x-5 grid grid-cols-1 lg:grid-cols-3 lg:gap-4 gap-10 bg-[#1a1a1a]'>
            <div className='text-white  space-y-5'>
                <h1 className='text-3xl'>MC Computer</h1>
                <p className=''>we are committed to providing high-quality education through our diverse range of online and offline courses.</p>
                <div className='flex space-x-3'>
                    <div className='bg-[#20d7ab] flex justify-center items-center w-[40px] h-[40px] rounded-full'>
                        <FaFacebookF className='text-2xl' />
                    </div>
                    <div className='bg-[#20d7ab] flex justify-center items-center w-[40px] h-[40px] rounded-full'>
                        <FaLinkedin className='text-2xl' />
                    </div>
                    <div className='bg-[#20d7ab] flex justify-center items-center w-[40px] h-[40px] rounded-full'>
                        <FaInstagramSquare className='text-2xl' />
                    </div>
                    <div className='bg-[#20d7ab] flex justify-center items-center w-[40px] h-[40px] rounded-full'>
                        <FaTwitter className='text-2xl' />
                    </div>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='text-white space-y-5'>
                    <h1 className='text-2xl'>Company</h1>
                    <ul className='space-y-2'>
                        <li>About</li>
                        <li>Courses</li>
                        <li>Gellery</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='text-white space-y-5'>
                    <h1 className='text-2xl'>Support</h1>
                    <ul className='space-y-2'>
                        <li>Online Support</li>
                        <li>Onffline Support</li>
                        <li>All Time help</li>
                        <li>All Time Available</li>
                    </ul>
                </div>
            </div>
            <div className='text-white space-y-5'>
                <h1 className='text-2xl'>Contact Us</h1>
                <div className='flex flex-col space-y-3'>
                    <input className='input input-bordered' type="text" placeholder='Enter Your Email' />
                    <button className='btn w-32'>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Footer;