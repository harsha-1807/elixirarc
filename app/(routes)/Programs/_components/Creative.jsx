import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Creative = () => {
  // Define an array of objects with data for each "group" element
  const groupsData = [
    {
      title: "Web development",
      imgSrc: "/Webdev.jpg",
      description: "Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis."
    },
    {
      title: "UI/UX",
      imgSrc: "/uiux.png",
      description: "Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis."
    },
    {
      title: "Video Editing",
      imgSrc: "/vediting.png",
      description: "Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis."
    }
  ];

  return (
    <div>
      <div className="relative py-16">
        <div className="container relative m-auto px-6 text-gray-500 md:px-12">
        <h2 className="text-2xl font-semibold text-black pb-6">
            <span className="text-[#286AEA]">Creative </span>Programs
          </h2>
          <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
            {/* Map over the groupsData array to render each "group" */}
            {groupsData.map((group, index) => (
              <div key={index} className="coursecss ">
                <Image
                className="mx-auto w-[max] h-[max]"
                width={300}
                height={100}
                src={group.imgSrc}
                alt="illustration"
                loading="lazy"
              />
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  {group.title}
                </h3>
                {/* <p>
                  {group.description}
                </p> */}
               
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creative;
