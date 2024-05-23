"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Team from "./_components/Team";

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  });

  // useEffect(() => {
  //  
  //   const timer = setTimeout(() => {
  //     setIsVisible(true);
  //   }, 100);
  //   return () => clearTimeout(timer);
  // }, []);


  return (
    <div>
      <Image
        src="/icon1.svg"
        alt="icon"
        height={60}
        width={60}
        className="top-[10rem] left-[15rem] icons hidden md:block"
      />
        <Image
          src="/icon2.svg"
          alt="icon"
          height={70}
          width={70}
          className="bottom-[13rem] left-[15rem] icons hidden md:block"
          />
        <Image
          src="/icon3.svg"
          alt="icon"
          height={60}
          width={80}
          className="bottom-[10rem] left-[75rem] rotate-270 icons hidden md:block"
        />
          <Image
              src="/icon10.svg"
              alt="icon"
              height={60}
              width={60}
              className="top-[8rem] left-[75rem] icons  hidden md:block"
            />

          <h1 className="text-3xl font-bold mt-4 text-center ">Welcome to Elixir!</h1>
      <div className="flex items-center justify-center  h-[25rem] md:h-[12rem]  ">
        <div className="text-center md:w-[60%]">
          {/* part 1 */}
          <div className=" pt-[5rem]">
          <h2 className="text-2xl leading-normal mb-2  font-bold text-gray-800 dark:text-gray-100">
            <span className="font-medium">Our</span> Mission
          </h2>
            <p
              className={`transition-transform duration-1000 ease-out transform text-[1.25rem] font-medium ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-10 translate-y-full"
              }`}
            >
              Empowering the Future. We're not just an edtech startup. we're the
              gateway to success in a competitive world. With our revolutionary
              learning services, we propel students towards their dream
              positions in the dynamic industries of Embedded Systems, VLSI,
              Robotics, and EV. Join us and let's redefine your journey to
              excellence.
            </p>
          </div>
        </div>
      </div>


      {/* part 2 */}
      <div className="flex items-center justify-center h-[25rem] md:h-[20rem] ">
        <div className="text-center md:w-[60%]">
          {/* <h1 className="text-3xl font-bold mb-4">Welcome to Elixir!</h1> */}
          <div className="mt-8">
            {/* <h2 className="text-2xl font-semibold mb-6">Our Vision</h2> */}
            <h2 className="text-2xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-100">
            <span className="font-medium">Our</span> Vision
          </h2>
            <p
              className={`transition-transform duration-1000 ease-out transform text-[1.25rem] font-medium ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-full"
              }`}
            >
                 Our vision at Elixir is to seamlessly merge theory and practice in
              Embedded Systems, VLSI, Robotics, and EV education. We empower
              students to excel in competitive sectors by transforming learning
              into practical mastery
            </p>
          </div>
        </div>
      </div>
      
      <Team />
    </div>
  );
}

export default About;
