import React from 'react';
// Image import
import pixelsDecoAbove from "../assets/pixels_above.svg";
import pixelsDecoBelow from "../assets/pixels_below.svg";

const TermsCopyright = () => {
    return (
        <div className='w-screen'>
            <header className="mx-[10%] mt-20 flex justify-center">
              <div className="flex flex-col items-center">
                <div className="-mr-[5%]">
                  <h2 className="mt-8 text-4xl not-italic tracking-widest uppercase text-sky-900 2xl:text-6xl md:text-5xl font-bdbrick">Terms and Copyright</h2>
                </div>
              </div>
            </header>
            <main>
                <div>
                  <img src={pixelsDecoAbove} className="w-20 mx-auto mt-12" alt='Pixels illustration to finish this Terms and Conditions page'/>
                </div>
                <div>
                  <img src={pixelsDecoBelow} className="w-20 mx-auto" alt='Pixels illustration to finish this Terms and Conditions page'/>
                </div>
              <div className='w-[80%] mx-auto bg-slate-200 rounded-lg p-8 mt-12'>
                <h2 className="mb-2 text-xl font-normal tracking-widest normal-case text-sky-900">Intellectual Property</h2>
                <p>All the intellectual property are protected by copyright. Please send a message through contact page to have more information about the pictures / illustrations licences.
                  You may not copy, reproduce, republish, disassemble, decompile, reverse engineer, download, post, broadcast, transmit, make available to the public, or otherwise use pictures / illustrations in any way except for your own personal, non-commercial use. In certain prescribed circumstances, you may adapt, alter or create a derivative work from any pictures / illustration in this web site for your own personal, non-commercial use, with the prior written permission of the author. 
                </p>

                <h2 className="mt-8 mb-2 text-xl font-normal tracking-widest normal-case text-sky-900">About Studio TA portfolio website</h2>
                <p>This website has been built with Vite and Tailwindcss.</p>
                <p>The monogram logo has been created with Adobe Illustrator.</p>
                <p>The home picture has been shooted in the studio.</p>
                <p>The website layout has been drawn with Adobe Photoshop.</p>

                <h2 className="mt-8 mb-2 text-xl font-normal tracking-widest normal-case text-sky-900">Privacy and data protection</h2>
                <p>Studio T.A complies with all applicable FR and EU data protection legislation in force in respect of any personal information you submit to us. The personal details you submit to us will only be used for the specified purposes indicated to you and will not be passed onto unauthorised third parties without your explicit consent. You can contact us to amend or remove any information you submit to us, or ask us to remove all of your personal information. Our Privacy Policy provides further information on your legal rights and how to exercise these.</p>

                <h2 className='mt-8 mb-2 text-xl font-normal tracking-widest normal-case text-sky-900'>Cookies Policy</h2>
                <p>This cookie usage policy will help you understand how we use cookies. It should be read in conjunction with the Privacy Policy above.</p>
                <p>Please note that the intellectual property rights in all content comprising or contained within this website address (URL) is owned by Studio T.A, and other copyright owners as specified. Please note that the intellectual property rights in all content comprising or contained within this website address (URL) is owned by Studio T.A, and other copyright owners as specified.</p>
                <p>For any questions about this information, please contact by email through the contact page of this website.</p>   
              </div>
              <div>
                <img src={pixelsDecoAbove} className="w-40 mx-auto mt-12" alt='Pixels illustration to finish this Terms and Conditions page'/>
              </div>
              <div>
                <img src={pixelsDecoBelow} className="w-40 mx-auto" alt='Pixels illustration to finish this Terms and Conditions page'/>
              </div>
            </main>
            
        </div>
    );
};

export default TermsCopyright;