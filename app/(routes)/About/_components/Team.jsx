import { Linkedin } from 'lucide-react';
import Image from 'next/image';

import Link from 'next/link';
import React from 'react';

const Team = () => {
  return (
    <div id="team" className="section relative pt-20 pb-8 md:pt-16 dark:bg-gray-800">
          <Image
          src="/design2Elixir.svg"
          alt="design"
          height={300}
          width={300}
          className="icons bottom-[0rem] d2 hidden md:block" 
        />
            <Image
          src="/design1Elixir.svg"
          alt="design"
          height={300}
          width={300}
          className="icons  hidden md:block"
        />
      <div className="container xl:max-w-6xl mx-auto px-4">
        {/* section header */}
        <header className="text-center mx-auto mb-12"> 
          <h2 className="text-2xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-100">
            <span className="font-medium">Our</span> Team
          </h2>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 60"
            style={{ margin: '0 auto', height: '35px' }}
            xmlSpace="preserve"
          >
            <circle
              cx="50.1"
              cy="30.4"
              r="5"
              className="stroke-primary"
              style={{ fill: 'transparent', strokeWidth: 2, strokeMiterlimit: 10 }}
            ></circle>
            <line
              x1="55.1"
              y1="30.4"
              x2="100"
              y2="30.4"
              className="stroke-primary"
              style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
            ></line>
            <line
              x1="45.1"
              y1="30.4"
              x2="0"
              y2="30.4"
              className="stroke-primary"
              style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
            ></line>
          </svg>
        </header>
        {/* end section header */}
        {/* row */}
        <div className="flex flex-wrap flex-row -mx-4 justify-center">
        <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
            <div className="relative overflow-hidden  dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}>

              <div className="relative overflow-hidden px-6">
                <Image src="/vishwa.jpg" width={200} height={200}  className="max-w-full h-auto mx-auto rounded-full bg-gray-50  " alt="title image" />
              </div>
              <div className="pt-6 text-center">
                <p className="text-lg leading-normal font-bold mb-1">Vishvanath</p>
                <p className="text-gray-500 leading-relaxed font-light">Founder CEO</p>
                <div className="mt-2 mb-5 space-x-2 flex justify-center">
                <Link href="https://www.linkedin.com/in/vishvanath07">
                  <Linkedin />
                  </Link>
                </div>
           
              </div>
           
            </div>
          </div>
          {/* 2 */}
          <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
            <div className="relative overflow-hidden  dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}>

              <div className="relative overflow-hidden px-6">
                <Image src="/aravindh.jpg"   width={200} height={200}   className="max-w-full h-auto mx-auto rounded-full bg-gray-50 " alt="title image" />
              </div>
              <div className="pt-6 text-center">
                <p className="text-lg leading-normal font-bold mb-1">Aravind</p>
                <p className="text-gray-500 leading-relaxed font-light">Co-founder CTO</p>
                <div className="mt-2 mb-5 space-x-2 flex justify-center">
                <Link href="https://www.linkedin.com/in/aravindhantv">
                  <Linkedin />
                  </Link>
                </div>
           
              </div>
           
            </div>
          </div>
          {/* 3 */}
          <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
            <div className="relative overflow-hidden  dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}>

              <div className="relative overflow-hidden px-6">
              {/* https://tailone.tailwindtemplate.net/src/Image/dummy/avatar1.png */}
                <Image src="/vicky.png"  width={200} height={200}  className="max-w-full h-auto mx-auto rounded-full bg-gray-50 " alt="title image" />
              </div>
              <div className="pt-6 text-center">
                <p className="text-lg leading-normal font-bold mb-1">Vikirthan</p>
                <p className="text-gray-500 leading-relaxed font-light">Co-founder CBO</p>
                <div className="mt-2 mb-5 space-x-2 flex justify-center">
                  <Link href="https://www.linkedin.com/in/vikirthan">
                  <Linkedin />
                  </Link>
                </div>
           
              </div>
           
            </div>
          </div>
        </div>
        {/* end row */}
      </div>
    </div>
  );
};

export default Team;
