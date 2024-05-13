import Image from "next/image";
import React from "react";
import Team from "./_components/Team";

function About() {
  return (
    <div>
      {/* part 1 */}
      <div className=" m-[5vw] md:flex ">
        <div className="md:w-[45vw] flex justify-center">
          <Image
            src="./about1.svg"
            alt="svg"
            width={200}
            height={200}
            className="md:w-[45vw] md:h-[30vw] items-center"
          />
        </div>
        <div className="mt-[20px] text-wrap md:w-[45vw] h-[max] flex  items-start leading-7 md:mt-[3vw] ">
          <span>
            <h1 className="text-center md:mb-[3vw] text-[#286AEA] text-bold poppins-title uppercase md:text-[2rem] ">
              {" "}
              About <span className="text-black">us</span>
            </h1>
            <h2 className=" text-[14px] md:text-[18px]  font-mono">
              Empowering the Future. We're not just an edtech startup; we're the
              gateway to success in a competitive world. With our revolutionary
              learning services, we propel students towards their dream
              positions in the dynamic industries of Embedded Systems, VLSI,
              Robotics, and EV. Join us and let's redefine your journey to
              excellence.
            </h2>
          </span>
        </div>
      </div>
      {/* part 2 */}
      <div className=" m-[5vw] md:flex  md:flex-row flex flex-col-reverse ">
        <div className="mt-[20px] md:ml-[70px] text-wrap md:w-[45vw] h-[max] flex items-start leading-7 md:mt-[3vw]">
          <span>
            <h1 className="text-center md:mb-[3vw] text-[#286AEA] text-bold poppins-title uppercase md:text-[2rem] ">
              {" "}
              Our<span className="text-black">{"  "}Vision</span>
            </h1>
            <h2 className=" text-[14px] md:text-[18px]  font-mono">
              Our vision at Elixir is to seamlessly merge theory and practice in
              Embedded Systems, VLSI, Robotics, and EV education. We empower
              students to excel in competitive sectors by transforming learning
              into practical mastery
            </h2>
          </span>
        </div>
        <div className="md:w-[45vw] flex justify-center">
          <Image
            src="./about1.svg"
            alt="svg"
            width={200}
            height={200}
            className="md:w-[45vw] md:h-[30vw] items-center"
          />
        </div>
      </div>
      {/* part 3 */}
      {/* <div className=" m-[5vw] md:flex ">
        <div className="md:w-[45vw] flex justify-center">
          <Image
            src="./about1.svg"
            alt="svg"
            width={200}
            height={200}
            className="md:w-[45vw] md:h-[30vw] items-center hidden md:block"
          />
        </div>
        <div className="mt-[20px] text-wrap md:w-[45vw] h-[max] flex  items-start leading-7 md:mt-[3vw]">
          <span>
            <h1 className="text-center md:mb-[3vw] text-[#286AEA] text-bold poppins-title uppercase md:text-[2rem] ">
              {" "}
              About <span className="text-black">us</span>
            </h1>
            <h2 className=" text-[14px] md:text-[18px]  font-mono">
              Empowering the Future. We're not just an edtech startup; we're the
              gateway to success in a competitive world. With our revolutionary
              learning services, we propel students towards their dream
              positions in the dynamic industries of Embedded Systems, VLSI,
              Robotics, and EV. Join us and let's redefine your journey to
              excellence.
            </h2>
          </span>
        </div>
      </div> */}
      <Team />
    </div>
  );
}

export default About;
