import React from 'react';
import clientLogoList from '../data/clientLogoList';


const Clients = () => {


    return (
        <>
            <section className="pb-20 bg-slate-100">
                {/* Title */}
                <div className="w-4/12 text-right border-t-8 lg:w-1/5 border-sky-900">
                    <h2 className="text-base font-normal tracking-widest underline normal-case md:text-xl lg:text-3xl xl:text-4xl text-sky-900 underline-offset-12 decoration-4 decoration-secondary">Commissions</h2>
                </div>
                <div className="flex flex-col items-center w-full mt-12 sm:mt-20">
                    <div>
                    <h1 className="text-3xl not-italic tracking-widest text-center uppercase sm:text-4xl 2xl:text-6xl md:text-5xl font-bdbrick text-secondary">Companies who trust me
                    </h1>
                    </div> 
                </div>
                {/* End Title */}
                
                {/* Client's logo grid */}
                <div className="mt-12 sm:mt-20 mx-[10%]">
                    <div className="grid items-center max-w-lg grid-cols-2 py-16 mx-auto mt-10 shadow sm:py-24 md:px-8 bg-neutral-50 gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 sm:rounded-lg">
                        {clientLogoList.map((clientLogo) => (
                            <div key={clientLogo.id} className="flex flex-col items-center">
                                <div>
                                    <img src={clientLogo.image} alt={clientLogo.alt} className="w-24 border-2 rounded-md border-slate-100" />
                                </div>
                                <div className='text-sm sm:text-base'>{clientLogo.company}</div>
                                <div className='text-xs sm:text-sm'>{clientLogo.companyDescription}</div>                   
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Clients;