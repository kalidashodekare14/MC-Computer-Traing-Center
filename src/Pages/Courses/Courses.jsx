import React from 'react';
import './Courses.css'
import basicComputer from '../../assets/courses/basic.jpg'

const Courses = () => {
    return (
        <div className='min-h-screen'>
            <div className='lg:h-[60vh] h-[40vh] flex justify-center items-center courses bg-center bg-no-repeat bg-cover'>
                <h1 className='text-white text-5xl pb-3 border-b-4 border-[#20d7ab]'>Courses List</h1>
            </div>
            <div>
                <div>
                    <div className='w-80'>
                        <img className='w-full' src={basicComputer} alt="" />
                    </div>
                    <div>
                        <h1>Basic Computer</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;