"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Sidenav from "./Sidenav";
import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

function Header() {
  const Scrolled =  useScroll()
  return (
    <header className={cn("w-full fixed py-1 bg-[#fffcf5c6] h-[10%] z-[99] glass",
    Scrolled && "border-b shadow-lg"
    )}>
      <div className="mx-auto flex h-16 max-w-[91vw] items-center gap-2 px-2 sm:px-6 lg:px-10 poller-one-regular justify-between">
        <Link href="/">
          <div className="flex ">
            {/* <Image src="/elixirLogo2.svg" alt="logo" width={50} height={50} /> */}
            <Image src="/ElixirLogo2.svg" alt="logo" width={50} height={50} />

            {/* <h1 className="flex items-center text-[1.5vw] text-bold mt-8">Elixir</h1> */}
          </div>
        </Link>
        <div className="flex  items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-12 text-sm  list-none poppins-semibold capitalize">
              <li>
                <Link
                  className="text-black transition hover:text-gray-500/75 no-underline"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-black transition hover:text-gray-500/75 no-underline"
                  href="/Programs"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  className="text-black transition hover:text-gray-500/75 no-underline"
                  href="/About"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className="text-black transition hover:text-gray-500/75 no-underline"
                  href="/Contact"
                >
                  {" "}
                  Contact
                </Link>
              </li>
              <li>
                <a href="#ourServices" className="hidden rounded-full bg-[#4D2C5E] px-5 py-2.5 text-sm font-medium  transition  sm:block poppins-bold text-white">
                  Get started
                </a>
              </li>
            </ul>
          </nav>
          {/* <button id="hamburger-menu" className="md:hidden">
      <span className="hamburger-icon">  <Image src="./hamburger.svg" alt="ham" height={40} width={40} /></span>
    </button> */}
          <div className="md:block">
            <Sidenav />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

// import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom

// const Header = () => {
//   const [isActive, setIsActive] = useState(false);

//   const toggleMenu = () => {
//     setIsActive(!isActive);
//   };

//   return (
//     <header className="max-w-[100vw] my-5">
//       <div className="mx-auto flex h-16 max-w-[91vw] items-center gap-2 px-2 sm:px-6 lg:px-10 poller-one-regular justify-between">
//         <Link href="/">
//           <div className="flex">
//             {/* Your Logo */}
//             <Image src="/ElixirLogo2.svg" alt="logo" width={50} height={50} />
//           </div>
//         </Link>

//         {/* Hamburger Button */}
//         <button id="hamburger-menu" className="md:hidden" onClick={toggleMenu}>
//           <span className="hamburger-icon md:hidden"> <Image src="./hamburger.svg" alt="ham" height={40} width={40} /></span>
//         </button>

//         <nav id="main-nav" aria-label="Global" className={`hidden md:flex ${isActive ? 'active' : ''}`}>
//           <ul className="flex items-center gap-12 text-sm list-none poppins-semibold capitalize">
//             <li>
//               <Link className="text-black transition hover:text-gray-500/75 no-underline" href="/">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link className="text-black transition hover:text-gray-500/75 no-underline" href="/Programs">
//                 Programs
//               </Link>
//             </li>
//             <li>
//               <Link className="text-black transition hover:text-gray-500/75 no-underline" href="/About">
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link className="text-black transition hover:text-gray-500/75 no-underline" href="/Contact">
//                 Contact
//               </Link>
//             </li>
//             <li>
//               <a
//                 className="hidden rounded-full bg-[#4D2C5E] px-5 py-2.5 text-sm font-medium transition sm:block poppins-bold text-white"
//                 href="#"
//               >
//                 Get Started
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
