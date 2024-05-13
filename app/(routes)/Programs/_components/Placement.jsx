import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Placement = () => {
  return (
    <div>
      <div className="py-16">
        <div className="container  m-auto px-6 text-gray-500 md:px-12">
          <h2 className="text-2xl font-semibold text-black pb-6">
            <span className="text-[#286AEA]">Placement </span>Courses
          </h2>
          <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
            <div className="coursecss">
            <Image
                className="mx-auto w-[max] h-[max]"
                width={300}
                height={100}
                src='/'
                alt="illustration"
                loading="lazy"
              />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Carrer Guidance Mentorship
              </h3>
              <p>
                Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at
                cum, consectetur ullam tempora ipsa iste officia sed officiis!
                Incidunt ea animi officiis.
              </p>
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placement;
