import React, { useState } from 'react';
import logo from "../assets/logo_tala_aguirre.png";
import { NavLink, Outlet } from "react-router-dom";



const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu);
    }
    const closeNavSmallScreenList = () =>{
        setToggleMenu(false);
    }

    return (
        <>
        <nav className="flex justify-between w-screen h-16 bg-sky-900 px-[10%] fixed top-0 left-0 z-40">
            <NavLink to="/">
                <img width={58} height={58} src={logo} alt="Studio TA / Tala Aguirre, web developer " className="py-1" />
            </NavLink>

            <ul className="hidden w-full lg:flex md:items-center md:justify-end main-nav">
                <li className='w-[10%] text-right text-base tracking-widest text-white cursor-pointer font-ibmPlexSans '>
                    <NavLink to="/skills" className="w-[10%] pb-1"> Skills</NavLink>
                </li>
                <li className='w-[10%] text-right text-base tracking-widest text-white cursor-pointer font-ibmPlexSans'>
                    <NavLink to="/portfolio"  className="pb-1">Projects</NavLink>      
                </li>
                <li className='w-[10%] text-right text-base tracking-widest text-white cursor-pointer font-ibmPlexSans'>
                    <NavLink to="/contact"  className="pb-1">Contact</NavLink>
                </li>
            </ul>
            {/* MOBILE MENU*/}
            {toggleMenu && (
                <ul className="absolute right-0 flex flex-col w-1/2 h-screen px-12 pt-40 border-t-4 border-l-8 border-secondary top-16 bg-sky-900 lg:hidden">
                    <li onClick={closeNavSmallScreenList} className='h-16 cursor-pointer'>
                        <NavLink to="/skills" className="pb-1 text-2xl leading-10 tracking-widest text-white font-proximaNova">Skills</NavLink>
                    </li>
                    <li className='h-16'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-secondary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    </li>
                    <li onClick={closeNavSmallScreenList} className='h-16 cursor-pointer border-secondary'>
                        <NavLink to="/portfolio" className="pb-1 text-2xl leading-10 tracking-widest text-white font-proximaNova"> Projects</NavLink>
                    </li>
                    <li className='h-16'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-secondary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    </li>
                    <li onClick={closeNavSmallScreenList} className='h-16 cursor-pointer border-secondary'>
                        <NavLink to="/contact" className="pb-1 text-2xl leading-10 tracking-widest text-white font-proximaNova"> Contact</NavLink>
                    </li>
                </ul>
            )}
            {/* Menu and x-mark heroicons Button */}
            <button onClick={toggleNavSmallScreen} className='transition-all cursor-pointer lg:hidden hover:text-secondary'>
                {toggleMenu ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white border-2 rounded-md border-secondary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg> :  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white w-9 h-9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
                }
            </button>
        </nav>
        <Outlet />
        </>
    );
};

export default Navbar;