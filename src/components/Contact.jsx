import React from 'react';
//Pictures imports
import contactLeft from "../assets/imgContact/contactLeft.svg";
import contactRight from "../assets/imgContact/contactRight.svg";
import contactPicSmallScreen from "../assets/imgContact/contact_sm.png";
import waveSkyBlue from "../assets/imgContact/wave_skyblue.svg"

import ContactFooter from './ContactFooter';


const Contact = () => {
    return (
        <>
            <main className="flex flex-col w-full mt-20 lg:h-[calc(100vh - 24rem)]">
                <div className="mx-[10%]">
                    <div className="flex justify-end w-full">
                        <div className="flex flex-col items-center">
                            <h2 className="mt-8 not-italic tracking-widest uppercase text-sky-900 2xl:text-6xl md:text-5xl text-4xl  font-bdbrick -mr-[5%]">Get in touch</h2>
                            {/* envelope heroicons */}
                            <a target="_blank" href="mailto:tala.aguirre@gmail.com" rel="noreferrer" className="relative inline-flex mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 p-1 text-white transition-all rounded-md cursor-pointer bg-secondary hover:bg-sky-900">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                <div className="absolute top-0 right-0 flex w-3 h-3 -mt-1 -mr-1">
                                    <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-sky-900"></span>
                                    <span className="relative inline-flex w-3 h-3 rounded-full bg-sky-900"></span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
               
                <div className="hidden lg:flex lg:justify-center lg:w-full">
                    <div className="w-[calc(100%_/_2)] h-auto">
                        <img src={contactLeft} alt="contact design from the left"/>
                    </div>
                        
                    <div className="w-[calc(100%_/_2)] h-auto">
                        <img src={contactRight} alt="contact design from the rigth"/>
                    </div> 
                </div>
                
                {/* Contact presentation in tablets ans smaller screens */}
                <div className='flex flex-col'>
                    <div className='w-1/2 pl-[10%] xs:mt-12 lg:hidden'>
                        <img src={contactPicSmallScreen} alt="contact page presentation pic" className='w-2/3'/>
                    </div>
                <div className='self-end w-[70%] sm:w-1/2 xs:pl-20 pl-[10rem] lg:hidden'>
                        <img src={waveSkyBlue} alt="Decorative wave as Studio T.A is based in the coast" className='xs:w-16 w-[40%] sm:w-[30%]'/>
                    </div>
                    {/* Text and Decorative Waves in tablets ans smaller screens */}
                    <div className='self-start w-1/2 mt-6 ml-[40%] lg:hidden'>
                        <div className='w-1/2'>
                            <img src={waveSkyBlue} alt="Decorative wave as Studio T.A is based in the coast"/>
                        </div>
                        <div className='pt-4 pb-8'>
                            <p className='text-lg tracking-wider uppercase text-sky-900'>Web developper</p>
                            <p className='mb-5 text-sm tracking-wider text-slate-600'>with skills in <br/>UI Design & Photography</p>
                            <p className='mt-2 text-sm tracking-wider text-slate-600'>Based in Anglet,<br/> at the Basque Country</p>
                            <p className='mt-2 text-xs tracking-wider text-slate-600'>Fr - 64600</p>
                        </div>        
                    </div>
                </div> 
            </main>
            <footer className='w-full 3xl:absolute 3xl:left-0 3xl:bottom-0'>
                <ContactFooter />
            </footer>
        </>
    );
};

export default Contact;