import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Banner.css'


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Button from '../../Hooks/Button/ButtonWhite';
import ButtonWhite from '../../Hooks/Button/ButtonWhite';

const Banner = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='banner bg-no-repeat bg-center bg-cover h-[100vh]'>
                        <div className='lg:mx-32 space-y-3 flex flex-col justify-center lg:w-[40%] h-[100vh]'>
                            <h1 className='lg:text-6xl text-white'>MC Computer</h1>
                            <h3 className='text-4xl text-[#D1D1D1]'>And Training Center</h3>
                            <p className='text-white'>Learn essential computer skills with our user-friendly courses.</p>
                            <ButtonWhite>Enroll Now</ButtonWhite>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='banner1 bg-no-repeat bg-center bg-cover h-[100vh]'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='banner2 bg-no-repeat bg-center bg-cover h-[100vh]'>

                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;