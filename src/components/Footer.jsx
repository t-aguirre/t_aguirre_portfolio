import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
             <div className="w-full h-24 p-4 md:py-4 bg-sky-900">
                <p className="text-xs tracking-widest text-center text-white sm:text-sm">All rights reserved <span className='md:text-base text-[12px]'>©</span> 2023 - Tala Aguirre, Studio TA</p>
                <hr className="w-8 h-0.5 mx-auto my-2 border-0 bg-[#a98e5d]"/>
                <p className="pt-1 text-xs tracking-widest text-center text-white uppercase transition duration-700 ease-in-out cursor-pointer hover:text-secondary"><Link to="/termsCopyright">Terms and Copyright</Link></p>
            </div>
    );
};

export default Footer; 