import React from "react";
import { Link } from "react-router-dom";
import Footer from './Footer.jsx';
// logos import
import reactLogo from "../assets/skills/react.svg";
import javaScriptLogo from "../assets/skills/javaScript.svg";
import bootstrapLogo from "../assets/skills/bootstrap.svg";
import tailwindLogo from "../assets/skills/tailwindcss.svg";
import css3Logo from "../assets/skills/css3.svg";
import html5Logo from "../assets/skills/html5.svg";
import phpLogo from "../assets/skills/php.svg";
import symfonyLogo from "../assets/skills/symfony.svg";
import wordpressLogo from "../assets/skills/wordPress.svg";
import gitLogo from "../assets/skills/git.svg";
import illustrator_Logo from "../assets/skills/illustrator.svg";
import ligthroom_logo from "../assets/skills/ligthroom.svg";
import photoshop_logo from "../assets/skills/photoshop.svg";
import adobeXD_logo from "../assets/skills/adobe_xd.svg";
import england_flag from "../assets/skills/england_flag.svg";
import france_flag from "../assets/skills/france_flag.svg";
import spain_flag from "../assets/skills/spain_flag.svg";



const Skills = () => {
    return (
        <main className="bg-neutral-50">
          <div className="mx-[10%] pt-24 bg-neutral-50">
            <section className="overflow-hidden bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h2 className="not-italic tracking-widest uppercase text-sky-900 2xl:text-6xl md:text-5xl text-4xl font-bdbrick -mr-[5%]">Skills</h2>
                <h3 className="text-base font-semibold leading-6 text-slate-900">Web development</h3>
                <p className="max-w-2xl mt-1 text-sm text-slate-500">With skills in UI Design and Photography.</p>
              </div>
              <div className="border-t border-slate-200">
                <dl>
                  <div className="px-4 py-5 bg-slate-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium uppercase text-slate-500">Front-end</dt>
                    <dd className="mt-1 text-sm text-slate-900 sm:col-span-2 sm:mt-0">
                      <div className="flex flex-wrap justify-start gap-x-2 sm:gap-x-0">
                        <div className="flex flex-col items-center w-24 p-4 mr-0 border-2 rounded-md sm:mr-16 border-slate-100">
                        <img src={reactLogo} className="rounded-md w-9 h-9" alt="React logo"/>
                        <p>React JS</p>
                        </div>
                        <div className="flex flex-col items-center w-24 p-4 mr-0 border-2 rounded-md sm:mr-16 border-slate-100">
                        <img src={javaScriptLogo} className="rounded-md w-9 h-9" alt="JavaScript logo"/>
                        <p>JavaScript</p>
                        </div>
                        <div className="flex flex-col items-center w-24 p-4 mt-6 mr-0 border-2 rounded-md sm:mr-16 border-slate-100 lg:mt-0">
                        <img src={bootstrapLogo} className="rounded-md w-9 h-9" alt="Bootstrap logo"/>
                        <p>Bootstrap</p>
                        </div>
                        <div className="flex flex-col items-center w-24 p-4 mt-6 mr-0 border-2 rounded-md sm:mr-16 border-slate-100 lg:mt-0">
                        <img src={tailwindLogo} className="rounded-md w-9 h-9" alt="Tailwindcss logo"/>
                        <p>Tailwindcss</p>
                        </div>
                        <div className="flex flex-col items-center w-24 p-4 mt-6 mr-0 border-2 rounded-md sm:mr-16 border-slate-100 lg:mt-0">
                        <img src={css3Logo} className="rounded-md w-9 h-9" alt="Css3 logo"/>
                        <p>Css3</p>
                        </div>
                        <div className="flex flex-col items-center w-24 p-4 mt-6 mr-16 border-2 rounded-md lg:mt-0 border-slate-100">
                        <img src={html5Logo} className="rounded-md w-9 h-9" alt="html5 logo"/>
                        <p>Html5</p>
                        </div>
                      </div> 
                    </dd>
                  </div>
                  <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium uppercase text-slate-500">Back-end</dt>
                    <dd className="mt-1 text-sm text-slate-900 sm:col-span-2 sm:mt-0">
                      <div className="flex justify-start gap-x-2 sm:gap-x-0">
                        <div className="flex flex-col items-center w-24 p-4 mr-0 border-2 rounded-md sm:mr-16 border-slate-100">
                        <img src={phpLogo} className="rounded-md w-9 h-9" alt="PHP logo"/>
                        <p>PHP</p>
                        </div>
                        <div className="flex flex-col items-center w-24 p-4 mr-0 border-2 rounded-md border-slate-100 sm:mr-16 ">
                        <img src={symfonyLogo} className="rounded-md w-9 h-9" alt="Symfony framework logo"/>
                        <p>Symfony</p>
                        </div>
                      </div>
                    </dd>
                  </div>
                  <div className="px-4 py-5 bg-slate-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium uppercase text-slate-500">CMS</dt>
                    <dd className="mt-1 text-sm text-slate-900 sm:col-span-2 sm:mt-0">
                      <div className="flex justify-start">
                        <div className="flex flex-col items-center w-24 p-4 border-2 rounded-md border-slate-100">
                          <img src={wordpressLogo} className="rounded-md w-9 h-9" alt="Bootstrap logo"/>
                          <p>Wordpress</p>
                        </div>
                      </div>
                    </dd>
                  </div>
                  <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium uppercase text-slate-500">Worflow</dt>
                    <dd className="mt-1 text-sm text-slate-900 sm:col-span-2 sm:mt-0">
                    <div className="flex justify-start">
                      <div className="flex flex-col items-center w-24 p-4 border-2 rounded-md border-slate-100">
                        <img src={gitLogo} className="rounded-md w-9 h-9" alt="git distributed version control system logo"/>
                        <p>Git</p>
                      </div>
                    </div>
                    </dd>
                  </div>
                  <div className="px-4 py-5 bg-slate-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium uppercase text-slate-500">UI Design</dt>
                    <dd className="mt-1 text-sm text-slate-900 sm:col-span-2 sm:mt-0">
                      <div className="flex flex-wrap justify-start gap-x-2 sm:gap-x-0">
                          <div className="flex flex-col items-center w-24 p-4 mr-0 border-2 rounded-md sm:mr-16 border-slate-100">
                          <img src={photoshop_logo} className="rounded-md w-9 h-9" alt="Adobe Photoshop logo"/>
                            <p>Photoshop</p>
                          </div>
                          <div className="flex flex-col items-center w-24 p-4 mr-0 border-2 rounded-md sm:mr-16 border-slate-100">
                            <img src={illustrator_Logo} className="rounded-md w-9 h-9" alt="Adobe Illustrator logo"/>
                            <p>Illustrator</p>
                          </div>
                          <div className="flex flex-col items-center w-24 p-4 mr-0 border-2 rounded-md sm:mr-16 border-slate-100">
                          <img src={adobeXD_logo} className="rounded-md w-9 h-9" alt="Adobe XD logo"/>
                            <p>Adobe xd</p>
                          </div>
                      </div>
                    </dd>
                  </div>
                  <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium uppercase text-slate-500">Photography</dt>
                    <dd className="mt-1 text-sm text-slate-900 sm:col-span-2 sm:mt-0">
                      <div className="flex justify-start gap-x-2 sm:gap-x-0">
                          <div className="flex flex-col items-center w-24 p-4 mr-0 border-2 rounded-md sm:mr-16 border-slate-100">
                          <img src={ligthroom_logo} className="rounded-md w-9 h-9" alt="Adobe Ligtroom logo"/>
                          <p>Ligthroom</p>
                          </div>
                          <div className="flex flex-col items-center w-24 p-4 mr-16 border-2 rounded-md border-slate-100">
                          <img src={photoshop_logo} className="rounded-md w-9 h-9" alt="Adobe Photoshop logo"/>
                          <p>Photoshop</p>
                          </div>
                        </div>
                      </dd>
                  </div>
                  <div className="px-4 py-5 bg-slate-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium uppercase text-slate-500">Languages</dt>
                    <dd className="mt-1 text-sm text-slate-900 sm:col-span-2 sm:mt-0">
                      <div className="flex justify-start">
                          <div className="flex flex-col items-center w-24 p-4 mr-0 border-2 rounded-md sm:mr-16 border-slate-100">
                          <img src={england_flag} className="rounded-md w-9 h-9" alt="England flag"/>
                          <p>English</p>
                          </div>
                          <div className="flex flex-col items-center w-24 p-4 mr-0 border-2 rounded-md sm:mr-16 border-slate-100">
                          <img src={france_flag} className="rounded-md w-9 h-9" alt="France flag"/>
                          <p>French</p>
                          </div>
                          <div className="flex flex-col items-center w-24 p-4 border-2 rounded-md border-slate-100">
                          <img src={spain_flag} className="rounded-md w-9 h-9" alt="Spain flag"/>
                          <p>Spanish</p>
                          </div>
                        </div>
                    </dd>
                  </div>
                </dl>
              </div>
            </section>

            <div className="flex justify-between mt-8 mb-12 md:mb-20 md:justify-start">
              <Link to="/portfolio"  className="inline-flex items-center px-3 py-2 mr-5 text-sm font-semibold rounded-md shadow-sm ring-1 ring-inset ring-slate-300 text-[12px] lg:text-sm hover:bg-sky-900 border-2 border-secondary hover:text-white text-sky-900 uppercase tracking-wider p-2.5 cursor-pointer transition duration-700 ease-in-out ">
                Visit my 
                <span className="px-1">
                Portfolio
                </span>
              </Link> 
              <Link to="/contact" className="inline-flex items-center px-3 py-2 text-[12px] lg:text-sm font-semibold rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900 hover:bg-sky-900 bg-secondary hover:text-white text-white uppercase tracking-wider p-2.5 cursor-pointer transition duration-700 ease-in-out ring-1 ring-inset ring-slate-300 border-2 border-secondary">
                Contact me
              </Link>
            </div>
          </div>
          
          <footer><Footer/></footer>
        </main>
    );
};

export default Skills;