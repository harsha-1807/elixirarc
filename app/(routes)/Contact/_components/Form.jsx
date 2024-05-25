"use client";
import React, { useState } from "react";
import Dots from "./Dots";
import Link from "next/link";
// import Link from "next/link";

const Form = () => {
  const [name, setname] = useState("");
  const [mail, setmail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setmessage] = useState("");
  const empty = "{empty}"


  const handleEmailClick = () => {
   const href = `mailto:contact.elixirarc@gmail.com?subject=New Member Alert!&body=Hi,I am ${name? name: empty}.My mail is ${mail? mail: empty}.My contact number : ${phone? phone: empty}.The message:${message? message:empty}`;
   window.location.href = href; // Open the email client
 };

  function handleChange(event) {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setname(value);
        break;
      case "mail":
        setmail(value);
        break;
      case "phone":
        setphone(value);
        break;
      case "message":
        setmessage(value);
        break;
      default:
        break;
    }
  }
  console.log(message);
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.tailgrids.com/tailgrids-fallback.css"
      />

      <section
        className="
 py-20 lg:py-[120px] overflow-hidden relative z-10"
      >
        <div className="container">
          <div className="flex flex-wrap lg:justify-between md:mx-10">
            <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
              <div className="max-w-[570px] mb-12 lg:mb-0">
                <span className="block mb-4 text-base  font-semibold text-[#764d8b]">
                  Contact Us
                </span>
                <h2
                  className="
                  text-dark
                  mb-6
                  uppercase
                  font-bold
                  text-[32px]
                  sm:text-[40px]
                  lg:text-[36px]
                  xl:text-[40px]
                  "
                >
                  GET IN TOUCH WITH US
                </h2>
                <p className="text-base text-body-color leading-relaxed mb-9">
                Thank you for your interest in our programs! Please take a moment to let us know that you are interested, and our team will contact you as soon as possible.
                

Thank you for your cooperation.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-5/12 px-4 ">
              <div className="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg">
                <form>
                  <div className="mb-6">
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                    />
                    
                  </div>
                  <div className="mb-6">
                    <input
                      type="email"
                      placeholder="Your Email"
                      name="mail"
                      value={mail}
                      onChange={handleChange}
                      className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="text"
                      name="phone"
                      value={phone}
                      onChange={handleChange}
                      placeholder="Your Phone"
                      className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                    />
                  </div>
                  <div className="mb-6">
                    <textarea
                      rows={6}
                      name="message"
                      value={message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                    ></textarea>
                  </div>
                  <div>
                  
                   
                      <button
                      onClick={handleEmailClick}
                        className="
                      w-full
                      text-white
                      bg-[#4D2C5E]
                      rounded
                      border border-primary
                      p-3
                      transition
                      hover:bg-opacity-90
                      "
                      >
                        Send
                      </button>
                    {/* </Link> */}
                    {/* </a> */}
                  </div>
                </form>
                <div>
                  <span className="absolute -top-10 -right-9 z-[-1]">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                        fill="#4D2C5E"
                      />
                    </svg>
                  </span>
                  <Dots />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
