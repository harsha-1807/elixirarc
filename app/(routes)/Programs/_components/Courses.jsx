import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Courses = ({onCourseSelect}) => {
  const handleCourseClick = (course) => {
    onCourseSelect(course);
  };

  return (
    <div>
      <div className=" py-16" style={{padding:"4rem 0rem"}}>
        <div className="container  m-auto px-6 text-gray-500 md:px-12">
          <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
            <div className="coursecss" onClick={(event) => handleCourseClick("course1",event)}>
            <Image
                className="mx-auto "
                width={300}
                height={100}
                src="/"
                alt="illustration"
                loading="lazy"
                style={{ borderRadius: '6px' }}
              />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Core
              </h3>
              <p>
                Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at
                cum, consectetur ullam tempora ipsa iste officia sed officiis!
                Incidunt ea animi officiis.
              </p>
   
            </div>

            <div className="coursecss" onClick={(event) => handleCourseClick("course2",event)} >
            <Image
                className="mx-auto "
                width={300}
                height={100}
                src="/"
                alt="illustration"
                loading="lazy"
                style={{ borderRadius: '6px' }}
              />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Placement Services
              </h3>
              <p>
                Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at
                cum, consectetur ullam tempora ipsa iste officia sed officiis!
                Incidunt ea animi officiis.
              </p>
            </div>
            <div className="coursecss " onClick={(event) => {
                event.stopPropagation();
                handleCourseClick("course3");
              }}>
              <Image
                className="mx-auto "
                width={300}
                height={100}
                src="/"
                alt="illustration"
                loading="lazy"
                style={{ borderRadius: '6px' }}
              />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Creative
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

export default Courses;
