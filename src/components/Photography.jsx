
//Carrousel React Slick import
import React, { Component } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Pictures import
import vgPortrait from "../assets/photoBook/vgPortrait_talaAguirre.jpg";
import quiksilverSunglasses from "../assets/photoBook/quiksilverSunglasses_talaAguirre.jpg";
import bamWork from "../assets/photoBook/bamWork_talaAguirre.jpg";
import quiksilverWatch from "../assets/photoBook/quiksilverWatch_talaAguirre.jpg";



const Photography = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="pb-20">
             {/* Title */}
             <div className="w-4/12 text-right border-t-8 md:w-1/5 border-sky-900">
                    <h2 className="text-base font-normal tracking-widest underline normal-case md:text-xl lg:text-3xl xl:text-4xl text-sky-900 underline-offset-12 decoration-4 decoration-secondary">Photography</h2>
            </div>
            <div className="flex flex-col items-center w-full mt-4 mb-2">
                <div className="mt-12 mb-16 sm:mt-20 sm:mb-0">
                    <h1 className="text-3xl not-italic tracking-widest text-center uppercase sm:text-4xl 2xl:text-6xl md:text-5xl font-bdbrick text-secondary">Corporate / studio / outdoor</h1>
                    <ul className="w-full h-24 px-12 mt-10 sm:px-0 -pb-48 ">
                        <li className="flex items-center text-sm sm:text-2xl">
                            {/* check heroicons */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-secondary">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <h2 className="p-2">Shooting and Editing</h2>
                        </li>
                        <li className="flex items-center text-sm sm:text-2xl">
                            {/* check heroicons */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-secondary">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <h2 className="p-2">Optimization, composition, Color correction</h2>
                        </li> 
                        <li className="flex items-center text-sm sm:text-2xl">
                            {/* check heroicons */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-secondary">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <h2 className="p-2">Retouching and restoring</h2>
                        </li> 
                        <li className="flex items-center mb-10 text-sm sm:text-2xl">
                            {/* check heroicons */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-secondary">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <h2 className="p-2">Photomontage</h2>
                        </li>      
                    </ul>
                </div> 
            </div>
            {/* End Title */}
            
            <Slider {...settings} className="pt-10">
                <div>
                    <img src={vgPortrait} alt="Portrait by Tala Aguirre - All rights reserved"/>
                    <h3 className="text-sm font-light tracking-widest normal-case font-proximaNova text-slate-900">Client: <span className="tracking-widest uppercase">Ho5 Communication Agency</span></h3>
                </div>
                <div>
                    <img src={quiksilverSunglasses} alt="Quiksilver sunglasses by Tala Aguirre - All rights reserved"/>
                    <h3 className="text-sm font-light tracking-widest normal-case font-proximaNova text-slate-900">Client: <span className="tracking-widest uppercase">Quiksilver</span></h3>
                </div>
                <div>
                    <img src={bamWork} alt="Bam Work Interior by Tala Aguirre - All rights reserved"/>
                    <h3 className="text-sm font-light tracking-widest normal-case font-proximaNova text-slate-900">Client: <span className="tracking-widest uppercase">BAM </span></h3>
                </div>
                <div>
                <img src={quiksilverWatch} alt="Quiksilver Watch by Tala Aguirre - All rights reserved"/>
                    <h3 className="text-sm font-light normal-case font-proximaNova text-slate-900">Client: <span className="tracking-widest uppercase">Quiksilver</span></h3>
                </div>
            </Slider>
            {/* Link to visit the project */}
            <div className="flex justify-center">
                <a href='http://www.calameo.com/read/0020306547e8fed124c9f?authid=S0bnFQwLzG89#' target="_blank" className="inline-flex items-center mt-16 px-3 py-2 text-[12px] lg:text-sm font-semibold rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900 hover:bg-sky-900 bg-secondary hover:text-white text-white uppercase tracking-wider p-2.5 cursor-pointer transition duration-700 ease-in-out ring-1 ring-inset ring-slate-300 border-2 border-secondary">
                    visit my photography portfolio
                </a>
            </div>
        </section>
    );
};

export default Photography;