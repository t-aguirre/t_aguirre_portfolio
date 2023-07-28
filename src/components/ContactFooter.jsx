import React from 'react';
import { Link } from 'react-router-dom';
import wave from "../assets/imgContact/wave.svg";


const ContactFooter = () => {
    return (
            <div className="w-full">
                <img src={wave} alt="decorative wave from studio T.A" />
                <div className="w-full h-24 py-4 bg-sky-900 -mt-0.5 xs:pb-10">
                    <p className="text-xs font-light tracking-widest text-center text-white sm:text-sm">All rights reserved <span className='text-base'>©</span> 2023 - Tala Aguirre, Studio TA</p>
                    <hr className="w-8 h-0.5 mx-auto my-2 border-0 bg-secondary"/>
                    <p className="pt-1 text-xs tracking-widest text-center text-white uppercase transition duration-700 ease-in-out cursor-pointer hover:text-secondary"><Link to="/termsCopyright" className="font-light">Terms and Copyright</Link></p>
                </div>
            </div>
    );
};

export default ContactFooter;