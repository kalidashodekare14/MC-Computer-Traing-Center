import React from 'react';

const ButtonBlack = ({children}) => {
    return (
        <div>
            <button className='btn bg-opacity-0 border border-[#20d7ab] hover:bg-[#20d7ab] hover:border-[#20d7ab] text-black w-32'>
                {children}
            </button>
        </div>
    );
};

export default ButtonBlack;