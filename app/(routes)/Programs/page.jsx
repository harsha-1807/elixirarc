"use client";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Courses from "./_components/Courses";
import Core from "./_components/Core";
import Placement from "./_components/Placement";
import Creative from "./_components/Creative";
import Nullpage from "./_components/Nullpage";

function Programs() {
  const [SelectedCourse, setSelectedCourse] = useState("course0");
  const courseDetailsRef = useRef(null);

  const handleCourseSelect = (Course) => {
    setSelectedCourse(Course);

    if (courseDetailsRef.current) {
      courseDetailsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-center mt-5 text-2xl font-semibold ">
        Programs At <span className="text-[#286AEA]">Elixir</span>
      </h2>
      <Courses onCourseSelect={handleCourseSelect} />
      {/* <Creative/> */}

      {SelectedCourse && (
        <div
          className="course-details pt-16 max-h-max"
          id="details"
          ref={courseDetailsRef}
        >
          {SelectedCourse == "course0" && <Nullpage />}
          {SelectedCourse === "course1" && <Core />}
          {SelectedCourse === "course2" && <Placement />}
          {SelectedCourse === "course3" && <Creative />}
        </div>
      )}
    </div>
  );
}

export default Programs;
