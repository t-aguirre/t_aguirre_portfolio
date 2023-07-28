import React from 'react';
import designsData from '../data/designsData';
import verticalDesignsData from '../data/verticalDesignsData';

const Design = () => {
    return (
        <section className="bg-slate-100">
          {/* Title */}
          <div className="w-4/12 mt-24 text-right border-t-8 md:w-1/5 border-sky-900">
            <h2 className="text-base font-normal tracking-widest underline normal-case md:text-xl lg:text-3xl xl:text-4xl text-sky-900 underline-offset-12 decoration-4 decoration-secondary">UI Design</h2>
          </div>
          <div className="flex flex-col items-center w-full mt-12 sm:mt-20">
            <div>
            <h1 className="text-3xl not-italic tracking-widest text-center uppercase sm:text-4xl 2xl:text-6xl md:text-5xl font-bdbrick text-secondary">Visual Aids / layouts
            </h1>
            </div> 
          </div>
          {/* End Title */}

          {/* Designs Grid*/}
          <div className="max-w-2xl px-4 pt-4 pb-16 mx-auto sm:pt-16 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
            {designsData.map((dataElement) => (
              <div key={dataElement.id} className="relative group">
                <div className="w-full overflow-hidden bg-gray-200 rounded-md min-h-80 aspect-w-16 aspect-h-9 lg:aspect-none lg:h-80">
                  <img
                    src={dataElement.imageSrc}
                    alt={dataElement.imageAlt}
                    className="object-cover object-center w-full h-full lg:h-full lg:w-full"
                  />
              </div>
              <div className="flex justify-between mt-4">
                  <div> 
                    <h3 className="text-sm text-gray-700 uppercase">
                      
                        <span aria-hidden="true" className="absolute inset-0" />
                        {dataElement.name}
                      
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{dataElement.description}</p>
                    <p className='mt-1 text-sm text-gray-500'>Design: {dataElement.design}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Vertical Picture */}
        <div className='w-8/12 pb-20 mx-auto sm:w-3/12'>
          {verticalDesignsData.map((verticalDesignsElement) => (
                <div key={verticalDesignsElement.id}>
                  <div className=''>
                    <img
                          src={verticalDesignsElement.imageSrc}
                          alt={verticalDesignsElement.imageAlt}
                          className="object-cover object-center w-full h-full rounded-md lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="flex justify-between mt-4">
                    <div>
                      <h3 className="text-sm text-gray-700 uppercase">
                          {verticalDesignsElement.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{verticalDesignsElement.description}</p>
                      <p className='mt-1 text-sm text-gray-500'>Design: {verticalDesignsElement.design}</p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </section>
    );
};

export default Design;