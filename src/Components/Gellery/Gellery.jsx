import React, { useRef, useState } from 'react';
import Titles from '../../Hooks/Title/Titles';
// Import Swiper React components
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img from '../../assets/gellery/img.avif'
import img2 from '../../assets/gellery/img2.avif'
import img3 from '../../assets/gellery/img3.jpg'
import img4 from '../../assets/gellery/img4.avif'

const Gellery = () => {

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
        <div className='lg:mx-32 my-20'>
            <Titles>Our Gellery</Titles>
            <div className='mt-10'>
                <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    infinite={true}
                    keyBoardControl={true}
                    draggable={true}
                    showDots={true}
                    swipeable={true}
                >
                    <div className='h-[40vh] lg:me-5'>
                        <img className='h-full' src={img} alt="" />
                    </div>
                    <div className='h-[40vh] lg:me-5'>
                        <img className='h-full' src={img2} alt="" />
                    </div>
                    <div className='h-[40vh] lg:me-5'>
                        <img className='h-full' src={img3} alt="" />
                    </div>
                    <div className='h-[40vh] lg:me-5'>
                        <img className='h-full' src={img4} alt="" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Gellery;