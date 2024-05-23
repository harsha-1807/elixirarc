import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Placement = () => {
  return (
    <div>
      <div className="py-16">
        <div className="container  m-auto px-6 text-gray-500 md:px-12 ">
          <h2 className="text-2xl font-semibold text-black pb-6">
            <span className="text-[#286AEA]">Placement </span>Programs
          </h2>
          <div className=" md:mx-auto md:w-[30rem] flex justify-center">
            <div className="coursecss">
            <Image
                className="mx-auto w-[max] h-[max]"
                width={300}
                height={100}
                src='/carrier.png'
                alt="illustration"
                loading="lazy"
              />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Carrer Guidance Mentorship
              </h3>
              <p>
                Dedicated mentorship by industry specilist with invaluable experience
              </p>
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placement;
