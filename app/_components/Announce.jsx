import Link from "next/link";
import React from "react";

function Announce() {
  return (
    <div className="md:h-[5vh] bg-[#543663] md:flex  md:items-center md:justify-center font-sans ">
      <h2 className="text-center text-stone-50 pl-2 ">
        📢🚨 Embed-X an 30 hours Industry end embedded system workshop (Limited
        seats) - Book your slot now
      </h2>

      <h2 className="text-center max-w-full">
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSf4cnFzWsZRVURtgX7B8wE1ILF8hjNjFbqWVHCLcQ12o-aNUg/viewform?usp=sf_link"
          className="text-[#FF7426] blinking-text text-center "
        >
          &nbsp; Click Here
        </Link>
      </h2>
    </div>
  );
}

export default Announce;
