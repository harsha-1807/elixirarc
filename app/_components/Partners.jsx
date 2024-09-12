import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Partners() {
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
      <span className="font-medium">Our</span> Partners
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
          <Image src="/simpery-logo.png" width={200} height={200}  className="max-w-full h-auto mx-auto rounded-full bg-gray-50  " alt="title image" />
        </div>
        <div className="pt-6 text-center">
          <p className="text-lg leading-normal font-bold mb-1">Simpery Academy</p>
          <Link href="https://www.instagram.com/simpery_business/">
          
          <p className="text-blue-500 underline hover:text-blue-700 font-bold text-md  rounded-md ">Learn More</p>
          </Link>

          
     
        </div>
     
      </div>
    </div>
    {/* 2 */}
    <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
      <div className="relative overflow-hidden  dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}>

        <div className="relative overflow-hidden px-6">
          <Image src="/iaaa.jpg" width={200} height={200}  className="max-w-full h-auto mx-auto rounded-full bg-gray-50  " alt="title image" />
        </div>
        <div className="pt-6 text-center">
          <p className="text-lg leading-normal font-bold mb-1">Institude of Aeronautics, Astronautics & Aviation - IAAA </p>
          <Link href="https://iaaaindia.com/">
          
          <p className="text-blue-500 underline hover:text-blue-700 font-bold text-md  rounded-md ">Learn More</p>
          </Link>

          
     
        </div>
     
      </div>
    </div>
    {/* 3 */}
    <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
      <div className="relative overflow-hidden  dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}>

        <div className="relative overflow-hidden px-6">
          <Image src="/semidesign.png" width={200} height={200}  className="max-w-full h-auto mx-auto rounded-full bg-gray-50  " alt="title image" />
        </div>
        <div className="pt-6 text-center">
          <p className="text-lg leading-normal font-bold mb-1">Semi Design</p>
          <Link href="https://semidesign.in/">
          
          <p className="text-blue-500 underline hover:text-blue-700 font-bold text-md  rounded-md ">Learn More</p>
          </Link>

          
     
        </div>
     
      </div>
    </div>
    {/* 4 */}
    <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
      <div className="relative overflow-hidden  dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}>

        <div className="relative overflow-hidden px-6">
          <Image src="/CHIP-WEB-LOGO-70x70.jpg" width={200} height={200}  className="max-w-full h-auto mx-auto rounded-full bg-gray-50  " alt="title image" />
        </div>
        <div className="pt-6 text-center">
          <p className="text-lg leading-normal font-bold mb-1">Chip Web Technologies </p>
          <Link href="https://chipwebtechnologies.com/">
          
          <p className="text-blue-500 underline hover:text-blue-700 font-bold text-md  rounded-md ">Learn More</p>
          </Link>

          
     
        </div>
     
      </div>
    </div>
    
  </div>
  {/* end row */}
</div>
</div>
  )
}

export default Partners