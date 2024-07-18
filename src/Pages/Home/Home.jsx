import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Director from '../../Components/Director/Director';
import Facilities from '../../Components/Facilities/Facilities';
import Counter from '../../Components/Counter/Counter';
import Gellery from '../../Components/Gellery/Gellery';
import Testimonials from '../../Components/Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Director></Director>
            <Facilities></Facilities>
            <Counter></Counter>
            <Gellery></Gellery>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;