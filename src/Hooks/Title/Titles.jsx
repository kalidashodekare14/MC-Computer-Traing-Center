import React from 'react';

const Titles = ({children}) => {
    return (
        <div className='flex justify-center items-center'>
        <h1 className='text-3xl font-bold border-b-2 border-[#20d7ab]'>{children}</h1>
    </div>
    );
};

export default Titles;