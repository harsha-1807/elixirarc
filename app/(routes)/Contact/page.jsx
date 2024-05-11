import React from "react";
import Form from "./_components/Form";
import Image from "next/image";

function Contact() {
  return (
    <div>
      <Image
          src="/icon10.svg"
          alt="icon"
          height={60}
          width={60}
          className="icon1  icons  hidden md:block"
        />
        <Image
          src="/icon2.svg"
          alt="icon"
          height={70}
          width={70}
          className="icon2 icons hidden md:block"
        />
        <Image
          src="/icon3.svg"
          alt="icon"
          height={60}
          width={80}
          className="icon3 icons hidden md:block"
        />
        <Image
          src="/icon1.svg"
          alt="icon"
          height={60}
          width={60}
          className="icon4 icons hidden md:block"
        />
      <Form />
    </div>
  );
}

export default Contact;
