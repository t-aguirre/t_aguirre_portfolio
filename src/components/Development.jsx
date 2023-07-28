import React from 'react';

import firstProjectData from '../data/firstProjectData';
import secondProjectData from '../data/secondProjectData';
import thirdProjectData from '../data/thirdProjectData';
// projects pictures
import wildstoneLoginOpened from "../assets/projects/wildstoneLoginOpened.jpg";
import wildstoneBattleGround from "../assets/projects/wildstoneBattleGround.jpg";
import convertitHome from "../assets/projects/convertit_home.jpg";
import convertitContact from "../assets/projects/convertit_contact.jpg";
import blogTechNews from "../assets/projects/blog_tech.jpg";
import blogTechBiblio from "../assets/projects/blog_tech_biblio.jpg";
//decoration pictures
import pixelsDecoAbove from "../assets/pixels_above.svg";
import pixelsDecoBelow from "../assets/pixels_below.svg";



const Development = () => {
    return (
        <section>
          {/* Title */}
          <div className="w-4/12 mt-24 text-right border-t-8 md:w-1/5 border-sky-900">
            <h2 className="text-base font-normal tracking-widest underline normal-case md:text-xl lg:text-3xl xl:text-4xl text-sky-900 underline-offset-12 decoration-4 decoration-secondary"> Development</h2>
          </div>
          <div className="flex flex-col items-center w-full mt-12 sm:mt-20">
            <div>
            <h1 className="text-3xl not-italic tracking-widest text-center uppercase sm:text-4xl 2xl:text-6xl md:text-5xl font-bdbrick text-secondary">Web / web mobile
            </h1>
            </div> 
          </div>
          {/* End Title */}
          
          {/* FIRST PROJECT GRID */}
          <div className='mx-[10%]'>
            {/* Left size of the grid: description */}
            <div className="grid items-center max-w-2xl grid-cols-1 px-4 py-24 mx-auto gap-y-16 gap-x-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-sky-900 sm:text-4xl">Wildstone</h2>
                <p className="mt-4 text-gray-500">
                  Wildstone is a team project for the Wild Code School. It's aims to introduce the users to the world of Hearthstone with a simpler version of the game.
                </p>
                <dl className="grid grid-cols-1 mt-16 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                  {firstProjectData.map((feature) => (
                    <div key={feature.name} className="pt-4 border-t border-gray-200">
                      <dt className="font-medium text-gray-900">{feature.name}</dt>
                      <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>           
                    </div>
                  ))}
                  </dl>
                  {/* Link to visit the project */}
                  <a href='https://github.com/t-aguirre/WildStone' target="_blank" className="inline-flex items-center mt-16 px-3 py-2 text-[12px] lg:text-sm font-semibold rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900 hover:bg-sky-900 bg-secondary hover:text-white text-white uppercase tracking-wider p-2.5 cursor-pointer transition duration-700 ease-in-out ring-1 ring-inset ring-slate-300 border-2 border-secondary">
                  visit
                  </a>
              </div>
              {/* Right size of the grid: pictures */}
              <div className="grid grid-cols-1 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                <img
                src={wildstoneLoginOpened} 
                alt="Wildstone project picture: login opened"
                className="bg-gray-100 border-2 border-gray-400 border-solid rounded-lg shadow-md shadow-gray-400"
                />
                <img
                src={wildstoneBattleGround} 
                alt="Wildstone project picture: login opened"
                className="bg-gray-100 border-2 border-gray-400 border-solid rounded-lg shadow-md shadow-gray-400"
                />
              </div>
            </div>
          </div>
          <div>
            <img src={pixelsDecoAbove} className="w-24 mx-auto mt-12" alt='Pixels illustration between two projects'/>
          </div>

          {/* SECOND PROJECT GRID */}

          <div className="bg-slate-50">
            <div>
              <img src={pixelsDecoBelow} className="w-24 mx-auto" alt='Pixels illustration between two projects'/>
            </div>
            {/* Right size of the grid: description */}
            <div className="grid items-center max-w-2xl grid-cols-1 px-4 py-24 mx-auto gap-y-16 gap-x-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
              <div className='md:order-2'>
                <h2 className="text-3xl font-bold tracking-tight text-sky-900 sm:text-4xl">Convertit</h2>
                <p className="mt-4 text-gray-500">
                  Convertit is also a team project for the Wild Code School. It's an image converter with the possibility to store user's pictures.
                </p>
                <dl className="grid grid-cols-1 mt-16 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                  {secondProjectData.map((feature) => (
                    <div key={feature.name} className="pt-4 border-t border-gray-200">
                      <dt className="font-medium text-gray-900">{feature.name}</dt>
                      <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>           
                    </div>
                  ))}
                </dl>
                {/* Link to visit the project */}
              <a href='https://github.com/t-aguirre/2022-09-biarritz-convert-it' target="_blank" className="inline-flex items-center mt-16 px-3 py-2 text-[12px] lg:text-sm font-semibold rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900 hover:bg-sky-900 bg-secondary hover:text-white text-white uppercase tracking-wider p-2.5 cursor-pointer transition duration-700 ease-in-out ring-1 ring-inset ring-slate-300 border-2 border-secondary">
              visit
              </a>
            </div>
            {/*Left size of the grid: pictures */}
            <div className="grid grid-cols-1 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                <img
                src={convertitHome} 
                alt="Wildstone project picture: login opened"
                className="bg-gray-100 border-2 border-gray-400 border-solid rounded-lg shadow-md shadow-gray-400"
                />
                <img
                src={convertitContact} 
                alt="Wildstone project picture: login opened"
                className="bg-gray-100 border-2 border-gray-400 border-solid rounded-lg shadow-md shadow-gray-400"
                />
              </div>
            </div>
            <div>
              <img src={pixelsDecoAbove} className="w-24 mx-auto mt-12" alt='Pixels illustration between two projects'/>
            </div>
          </div>
          {/* End Second Project Section */}
              

          {/* THIRD PROJECT GRID */}
            
            <div className="bg-white">
              <div>
                <img src={pixelsDecoBelow} className="w-24 mx-auto" alt='Pixels illustration between two projects'/>
              </div>
              {/* Left size of the grid: description */}
              <div className="grid items-center max-w-2xl grid-cols-1 px-4 py-24 mx-auto gap-y-16 gap-x-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-sky-900 sm:text-4xl">Le blog de la veille technologique</h2>
                  <p className="mt-4 text-gray-500">
                    La veille technologique du Web is a blog project for a team personal use. It's a technology watch feeded by the team with tips, issues and bibliography interesting for their projects.
                  </p>
                  <dl className="grid grid-cols-1 mt-16 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                    {thirdProjectData.map((feature) => (
                      <div key={feature.name} className="pt-4 border-t border-gray-200">
                        <dt className="font-medium text-gray-900">{feature.name}</dt>
                        <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>           
                      </div>
                    ))}
                  </dl>
                  {/* Link to visit the project */}
                  <a href='https://clever-cohen.82-165-69-60.plesk.page/' target="_blank" className="inline-flex items-center mt-16 px-3 py-2 text-[12px] lg:text-sm font-semibold rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900 hover:bg-sky-900 bg-secondary hover:text-white text-white uppercase tracking-wider p-2.5 cursor-pointer transition duration-700 ease-in-out ring-1 ring-inset ring-slate-300 border-2 border-secondary">
                  visit
                  </a>
                </div>
              {/*Rigth size of the grid: pictures */}
              <div className="grid grid-cols-1 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                  <img
                  src={blogTechNews} 
                  alt="La veille Technologique blog's screenshot: Home page"
                  className="bg-gray-100 border-2 border-gray-400 border-solid rounded-lg shadow-md shadow-gray-400"
                  />
                  <img
                  src={blogTechBiblio} 
                  alt="La veille Technologique blog's screenshot: Bibliography page"
                  className="bg-gray-100 border-2 border-gray-400 border-solid rounded-lg shadow-md shadow-gray-400z"
                  />
                </div>
            </div>
          </div>
          {/* END Third project grid */}
        </section>
    );
};

export default Development;