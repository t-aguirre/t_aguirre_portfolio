import React from 'react';
import { Link } from 'react-router-dom';
// Pictures import
import regard from "../assets/regard_tala_aguirre.jpg";
//Components Import
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-center w-screen pt-32 overflow-hidden bg-slate-200'>
                <main className='flex flex-col w-full px-5 mb-0 sm:h-screen lg:mb-20 xl:px-0 md:flex-row xl:mx-auto xl:w-4/5'>
                    {/* left div */}
                    <div className="md:w-4/5 h-[25rem] md:h-[40rem] bg-[url('/src/assets/pixels_pattern.svg')] bg-no-repeat mx-0">
                        <div className="relative flex flex-wrap mx-auto h-[18rem] sm:h-[28rem] w-[17rem] sm:w-[31rem] md:w-auto lg:h-[31rem] mb-7 md:mb-0">
                            <div className="bg-[#ece6ca] w-[95%] sm:w-3/4 absolute -top-[2rem] right-0 z-10 rounded-lg md:[26rem] lg:h-[33.5rem] py-8 px-4 sm:p-8">
                                <div>
                                    <h2 className="mt-3 text-2xl font-medium tracking-widest text-yellow-900 normal-case">Tala Aguirre</h2>
                                    <h1 className="text-4xl not-italic font-medium tracking-widest uppercase text-sky-900 2xl:text-6xl md:text-5xl font-bdbrick">Web Developer</h1>
                                    <h2 className="md:text-sm lg:text-base font-normal tracking-[0.2em] text-slate-600 normal-case">with skills in</h2>
                                    <h2 className="mt-10 md:text-base lg:text-2xl font-normal text-slate-600 normal-case tracking-[0.2em]"> UI Design & Photography</h2>
                                    <div className="mt-16">
                                        <Link to="/portfolio" className="hover:bg-sky-900 bg-secondary hover:text-white text-white uppercase tracking-wider p-2.5 cursor-pointer transition duration-700 ease-in-out rounded-md text-[12px] lg:text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900 font-semibold ring-1 ring-inset ring-slate-300 border-2 border-secondary" >Portfolio</Link>
                                    </div>
                                </div>
                            </div>

                        <div className="absolute top-0 start-0 sm:left-[20%] z-0 w-[16rem] h-[23rem] sm:w-[24.5rem] sm:h-[23rem] md:w-[80%] md:h-[25rem] lg:h-[34rem] bg-sky-900 rounded-lg"></div>
                            </div>
                        </div>
                        {/* rigth div */}
                        <div className="md:w-4/5 bg-[url('/src/assets/pixels_pattern.svg')] bg-no-repeat">
                            <div className="relative flex flex-wrap mx-auto h-[15rem] sm:h-[18rem] w-[17rem] sm:w-[31rem] md:w-auto lg:h-[30rem] mb-20 sm:mb-7 md:mb-0">
                                <img className="object-cover rounded-t-lg" src={regard} alt="The photographer's eye by Tala Aguirre - All rights reserved"/>
                                <p className="p-2 text-xs uppercase transition duration-700 ease-in-out border-2 rounded-r-lg cursor-pointer lg:text-base sm:p-7 text-sky-900 hover:bg-secondary hover:text-white hover:rounded-r-md hover:ring-1 hover:ring-inset hover:ring-slate-300 border-secondary ring-1 ring-inset ring-slate-300 bg-slate-200">
                                    <Link to="/contact" className="tracking-wider">Let's collaborate<br/> together in your project 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                    </Link>
                                </p>
                            </div>
                        </div>
                </main>
                <footer className="w-screen "><Footer/></footer>
            </div> 
        </>
    );
};

export default Home;