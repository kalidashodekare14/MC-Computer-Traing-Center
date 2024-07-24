import React from 'react';
import './Testimonials.css'
import Titles from '../../Hooks/Title/Titles';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img from '../../assets/gellery/img.avif'
import { FaUserNurse } from 'react-icons/fa';
import testimonial from '../../assets/tes.png'
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonials = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div className='my-10 bg-success bg-fixed text-white bg-center bg-cover bg-no-repeat h-[70vh] py-10'>
            <Titles>Student Testimonials</Titles>
            <div className='lg:mx-32 mx-3 my-10'>
                <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    autoPlaySpeed={8000}
                    infinite={true}
                    keyBoardControl={true}
                    draggable={true}
                    showDots={true}
                    swipeable={true}
                >
                    <div className='flex flex-col justify-center space-y-2 items-center h-[40vh] lg:me-5 bg-white'>
                        <img className='w-20' src={testimonial} alt="" />
                        <h1 className='text-3xl text-black'>William Jecson</h1>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={3}
                            readOnly
                        />
                        <p className='text-black text-center'>The courses provided me with the skills I needed to advance my career.</p>
                    </div>
                    <div className='flex flex-col justify-center space-y-2 items-center h-[40vh] lg:me-5 bg-white'>
                        <img className='w-20' src={testimonial} alt="" />
                        <h1 className='text-3xl text-black'>William Jecson</h1>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={4}
                            readOnly
                        />
                        <p className='text-black text-center'>The courses provided me with the skills I needed to advance my career.</p>
                    </div>
                    <div className='flex flex-col justify-center space-y-2 items-center h-[40vh] lg:me-5 bg-white'>
                        <img className='w-20' src={testimonial} alt="" />
                        <h1 className='text-3xl text-black'>William Jecson</h1>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={5}
                            readOnly
                        />
                        <p className='text-black text-center'>The courses provided me with the skills I needed to advance my career.</p>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Testimonials;