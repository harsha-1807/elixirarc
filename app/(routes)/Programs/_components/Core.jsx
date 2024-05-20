import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ReactPlayer from "react-player";

const Core = () => {
  const groupsData = [
    {
      title: "Embedded",
      imgSrc: "/",
      description:
        "Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.",
      T1: "What are Embedded Systems? ",
      T1content:
        "Embedded systems are specialized computer systems designed for a specific function. Unlike general-purpose computers, they can operate independently or as part of a larger system, often with minimal human intervention. They're the silent workhorses in many devices we use daily. ",
      T2: "What you will learn in embedded systems",
      T2content: [
        {
          title: "Programming Languages",
          description:
            "Proficiency in languages like C and C++, commonly used in embedded systems.",
        },
        {
          title: "Computer Architecture",
          description:
            "Understanding the structure and behavior of different computing systems.",
        },
        {
          title: "Software Engineering Tools",
          description:
            "Tools assisting in developing and maintaining software systems.",
        },
        {
          title: "System Programming",
          description: "Writing and maintaining system software.",
        },
        {
          title: "Hardware Design",
          description:
            "Learning about the design and structure of hardware used in embedded systems.",
        },
        {
          title: "Operating Systems",
          description:
            "Understanding how operating systems work, especially real-time operating systems.",
        },
        {
          title: "Data Structures",
          description: "Crucial for organizing and storing data efficiently.",
        },
        {
          title: "Microarchitecture",
          description: "The dataflow part of computer architecture.",
        },
        {
          title: "Networking",
          description:
            "Understanding how different systems communicate, especially for IoT devices.",
        },
        {
          title: "Machine Learning",
          description: "Some courses may cover embedded machine learning.",
        },
        {
          title: "Sensors and Motors",
          description: "Learning to embed sensors and motors into systems.",
        },
      ],
      T3: "Career Pathways After Studying Embedded Systems ",
      T3sub:
        "After studying embedded systems, students can pursue a variety of career paths. These include: ",
      T3content: [
        "Embedded Hardware Engineer",
        "Embedded Software Engineer",
        "Software Test Engineer",
        "System Software Engineer",
        "Embedded System Trainer",
        "Application Software Engineer",
        "Marketing and Sales Executive",
      ],
      Video:"https://youtu.be/Vt7kXpAaqGo?si=dsDIisAG9TN3U9B2"

    },
    {
      title: "VLSI",
      imgSrc: "/",
      description:
        "Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.",
      T1: "What is VLSI?",
      T1content:
        "VLSI stands for Very-Large-Scale Integration. It's a technology for creating integrated circuits (ICs) by combining millions or even billions of transistors onto a single chip. This technology is the foundation of the modern semiconductor industry and allows for circuits that are significantly smaller and faster than previous generations.",
      T2: "What you will learn in VLSI",
      T2content: [
        {
          title: "Digital Electronics",
          description: "Gain a solid foundation in digital logic and digital systems.",
        },
        {
          title: "Transistor-Level Design",
          description: "Design and analyze circuits at the transistor level.",
        },
        {
          title: "CMOS Technology",
          description:
            "Learn about Complementary Metal-Oxide-Semiconductor (CMOS) technology, a key technology in VLSI design and its applications.",
        },
        {
          title: "Fabrication Process",
          description: "Understand how VLSI chips are fabricated.",
        },
        {
          title: "Circuit Simulation",
          description: "Learn to use tools like SPICE for circuit simulation.",
        },
        {
          title: "Physical Design",
          description:
            "Convert a circuit description into a physical layout.",
        },
        {
          title: "Testing and Verification",
          description:
            "Ensure that the design meets the required specifications, a crucial part of VLSI development.",
        },
        {
          title: "System-on-Chip Design (SoC Design)",
          description:
            "An advanced field where an entire system is integrated onto a single chip.",
        },
        {
          title: "Low Power Design",
          description:
            "Learn techniques for designing low-power circuits, increasingly important for portable devices.",
        },
      ],
      T3: "Career Pathways After Studying VLSI",
      T3sub:
        "After studying VLSI, students can pursue a variety of career paths. These include:",
      T3content: [
        "VLSI Design Engineer",
        "ASIC Design Engineer",
        "Verification Engineer",
        "CAD Engineer",
        "Application Engineer",
        "Product Engineer",
        "Technical Marketing Engineer",
      ],
      Video:"/"

    },
    
    {
      title: "Robotics",
      imgSrc: "/",
      description:
        "Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.",
      T1: "What is Robotics?",
      T1content:
        "Robotics is an interdisciplinary field that integrates engineering, computer science, and other disciplines to design, build, operate, and use robots. Robots are machines capable of performing tasks autonomously or with partial human control, often mimicking or enhancing human capabilities. Robotics allows for automation of tasks ranging from simple assembly lines to complex surgeries and space exploration.",
      T2: "What you will learn in Robotics",
      T2content: [
        {
          title: "Materials to Build a Robot",
          description:
            "Understand the materials used in robot construction, including motors, controllers, parts, and tools.",
        },
        {
          title: "Tools for Robotics",
          description: "Learn the tools necessary for designing and building robots.",
        },
        {
          title: "Designing Robots",
          description:
            "Gain knowledge of mechanical and electrical engineering principles for robot design.",
        },
        {
          title: "Programming Robots",
          description:
            "Learn programming languages and algorithms to control robot behavior.",
        },
        {
          title: "Electronics and Circuit Skills",
          description: "Develop knowledge in electronics, essential for robot design and building.",
        },
        {
          title: "Sensors in Robotics",
          description:
            "Learn how to integrate sensors into robots to enable them to interact with their environment.",
        },
        {
          title: "Project-Based Robotics Applications",
          description: "Apply acquired skills in real-world robotics projects.",
        },
        {
          title: "Robotics Certification & Training",
          description:
            "Explore certifications and training programs to deepen your knowledge in robotics.",
        },
      ],
      T3: "Career Pathways After Studying Robotics",
      T3content: [
        "Robotics Engineer",
        "Robotics Technician",
        "Robotics Test Engineer",
        "Robotics System Engineer",
        "Robotics Software Engineer",
        "Robotics Operator",
        "Robotics Research Scientist",
        "Robotics Sales Engineer",
        "Robotics Specialist",
        "Robotics Project Manager",
      ],
      Video:"https://youtu.be/htjRUL3neMg?si=P0AtQljELfxzg5lT"
    },
    
    {
      title: "Electric Vehicle",
      imgSrc: "/",
      description:
        "Electric vehicles are revolutionizing transportation. They offer a cleaner and more sustainable alternative to traditional gasoline-powered vehicles.",
      T1: "What is EV?",
      T1content:
        "EV stands for Electric Vehicle. It's a vehicle that uses electricity as its primary power source. Unlike gasoline-powered vehicles, EVs have an electric motor and a battery instead of an internal combustion engine and gasoline tank. This makes them quieter, produces zero tailpipe emissions, and contributes to lower overall emissions.",
      T2: "What you will learn in EV Engineering",
      T2content: [
        {
          title: "Fundamentals of Electric Vehicles",
          description:
            "Understand how EVs operate, their life cycle, and the advantages they hold over traditional gasoline vehicles.",
        },
        {
          title: "Battery Technologies",
          description:
            "Gain knowledge about various battery technologies used in EVs, their applications, and battery management systems.",
        },
        {
          title: "Motor Design",
          description:
            "Learn about the design and operation principles of electric motors used in EVs.",
        },
        {
          title: "Power Electronics",
          description:
            "Understand the role of power electronics in controlling the flow of electrical energy within an EV.",
        },
        {
          title: "Charging Infrastructure",
          description:
            "Study the fundamentals of charging technologies, including fast charging, wireless charging, and battery swapping.",
        },
        {
          title: "Grid Integration",
          description:
            "Evaluate the challenges of integrating a large number of EVs into the existing electricity grid.",
        },
        {
          title: "Digital Control of Power Electronics",
          description:
            "Learn how to use digital controls to optimize the operation of power electronics in EVs.",
        },
        {
          title: "EV Modelling and Design",
          description:
            "Develop skills in modelling and designing electric vehicles for optimal performance.",
        },
      ],
      T3: "Career Pathways After Studying EV",
      T3content: [
        "Electric Vehicle Design Engineer",
        "Battery Systems Engineer",
        "Charging Infrastructure Engineer",
        "Power Electronics Engineer",
        "Motor Control Engineer",
        "Vehicle Testing Engineer",
        "Research and Development Engineer",
        "Electric Vehicle Systems Integration Engineer",
        "Electric Vehicle Project Manager",
      ],
      Video:"/"
    }    
  ];

  return (
    <div>
      {"  "}
      <div className="relative py-16 max-h-screen">
        <div className="container relative m-auto px-6 text-gray-500 md:px-12">
          <h2 className="text-2xl font-semibold text-black pb-6">
            <span className="text-[#286AEA]">Core </span>Courses
          </h2>
          <div className="grid gap-6 md:mx-auto md:w-10/12   md:grid-cols-2">
            {groupsData.map((group, index) => (
              <div key={index} className="coursecss ">
                <Image
                  className="mx-auto"
                  width={300}
                  height={100}
                  src={group.imgSrc}
                  alt="illustration"
                  loading="lazy"
                />
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  {group.title}
                </h3>
                <p>{group.description}</p>

                <Dialog className="custom-dialog ">
                  <DialogTrigger>
                    <Button>Know More</Button>
                  </DialogTrigger>
                  {/* <div className="w-[80vw]"> */}
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{group.title}</DialogTitle>
                    </DialogHeader>
                    <div className="w-full">
                      <h2 className="wtitle2">{group.T1}</h2>
                      <p>{group.T1content}</p>
                      <div className="">

                      <ReactPlayer
                        url={group.Video}
                        // playing="true"
                        
                        
                      />
                      </div>
                      <h2 className="title2 ">{group.T2}</h2>
                      <ul>
                        {group.T2content &&
                          group.T2content.map((item, index) => (
                            <li style={{ marginLeft: "2rem" }} key={index}>
                              <span className="topic1">{item.title}:</span>
                              {item.description}
                            </li>
                          ))}
                      </ul>
                      <h2 className="title4">{group.T3}</h2>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          color: "grey",
                          paddingBottom: "8px",
                        }}
                      >
                        {group.T3sub}
                      </p>
                      <ul className="pt-2 ul1">
                        {group.T3content &&
                          group.T3content.map((item, index) => (
                            <li style={{ marginLeft: "2rem" }}>{item}</li>
                          ))}
                      </ul>
                      
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Core;
