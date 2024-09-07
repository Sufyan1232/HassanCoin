// "use client";

// import Image from 'next/image';
// import { useState } from 'react';
// import { Link as ScrollLink } from 'react-scroll'; // Import from react-scroll
// import logo from '../../images/logo.png';
// import close from '../../images/close.png';
// import menu from '../../images/menu.png';

// function Header() {
//   const [navbar, setNavbar] = useState(false);
//   return (
//     <div>
//       <nav className="w-full bg-black fixed top-0 left-0 right-0 z-10">
//         <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
//           <div>
//             <div className="flex items-center justify-between py-3 md:py-5 md:block">
//               {/* LOGO */}
//               <a href="/">
//                 <img width="150px" src={logo.src} alt="Logo" />
//               </a>
//               {/* HAMBURGER BUTTON FOR MOBILE */}
//               <div className="md:hidden">
//                 <button
//                   className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
//                   onClick={() => setNavbar(!navbar)}
//                 >
//                   {navbar ? (
//                     <Image src={close.src} width={30} height={30} alt="Close Menu" />
//                   ) : (
//                     <Image
//                       src={menu.src}
//                       width={30}
//                       height={30}
//                       alt="Open Menu"
//                       className="focus:border-none active:border-none"
//                     />
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div>
//             <div
//               className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
//                 navbar ? 'p-12 md:p-0 block' : 'hidden'
//               }`}
//             >
//               <ul className="h-screen md:h-auto items-center justify-center md:flex">
//                 <li className="pb-6 text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-#018e99 border-#018e99 md:hover:text-#018e99 md:hover:bg-transparent" style={{ fontSize: '13px' }}>
//                   <ScrollLink
//                     to="home"
//                     smooth={true}
//                     duration={500}
//                     onClick={() => setNavbar(false)}
//                     className="cursor-pointer" // Add cursor-pointer class here
//                   >
//                     HOME
//                   </ScrollLink>
//                 </li>
//                 <li className="pb-6 text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-#018e99 border-#018e99 md:hover:text-#018e99 md:hover:bg-transparent" style={{ fontSize: '13px' }}>
//                   <ScrollLink
//                     to="about"
//                     smooth={true}
//                     duration={500}
//                     onClick={() => setNavbar(false)}
//                     className="cursor-pointer" // Add cursor-pointer class here
//                   >
//                     ABOUT US
//                   </ScrollLink>
//                 </li>
//                 <li className="pb-6 text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-#018e99 border-#018e99 md:hover:text-#018e99 md:hover:bg-transparent" style={{ fontSize: '13px' }}>
//                   <ScrollLink
//                     to="sales"
//                     smooth={true}
//                     duration={500}
//                     onClick={() => setNavbar(false)}
//                     className="cursor-pointer" // Add cursor-pointer class here
//                   >
//                     SALES
//                   </ScrollLink>
//                 </li>
//                 <li className="pb-6 text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-#018e99 border-#018e99 md:hover:text-#018e99 md:hover:bg-transparent" style={{ fontSize: '13px' }}>
//                   <ScrollLink
//                     to="roadmap"
//                     smooth={true}
//                     duration={500}
//                     onClick={() => setNavbar(false)}
//                     className="cursor-pointer" // Add cursor-pointer class here
//                   >
//                     ROADMAP
//                   </ScrollLink>
//                 </li>
//                 <li className="pb-6 text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-#018e99 border-#018e99 md:hover:text-#018e99 md:hover:bg-transparent" style={{ fontSize: '13px' }}>
//                   <ScrollLink
//                     to="blogs"
//                     smooth={true}
//                     duration={500}
//                     onClick={() => setNavbar(false)}
//                     className="cursor-pointer" // Add cursor-pointer class here
//                   >
//                     BLOGS
//                   </ScrollLink>
//                 </li>
//                 <li className="pb-6 text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-#018e99 border-#018e99 md:hover:text-#018e99 md:hover:bg-transparent" style={{ fontSize: '13px' }}>
//                   <ScrollLink
//                     to="contactus"
//                     smooth={true}
//                     duration={500}
//                     onClick={() => setNavbar(false)}
//                     className="cursor-pointer" // Add cursor-pointer class here
//                   >
//                     CONTACT US
//                   </ScrollLink>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Header;




"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Import from react-scroll
import logo from '../../images/logo.png';
import close from '../../images/close.png';
import menu from '../../images/menu.png';

function Header() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="w-full bg-black fixed top-0 left-0 right-0 ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <a href="/">
                <img width="150px" src={logo.src} alt="Logo" />
              </a>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src={close.src} width={30} height={30} alt="Close Menu" />
                  ) : (
                    <Image
                      src={menu.src}
                      width={30}
                      height={30}
                      alt="Open Menu"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="pt-5 h-screen md:h-auto items-center justify-center md:flex">
                <li className="pb-6 text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-#018e99 border-#018e99 md:hover:text-#018e99 md:hover:bg-transparent" style={{ fontSize: '13px' }}>
                  <ScrollLink
                    to="home"
                    smooth={true}
                    duration={500}
                    onClick={() => setNavbar(false)}
                    className="cursor-pointer" // Add cursor-pointer class here
                  >
                    HOME
                  </ScrollLink>
                </li>
                <li className="pb-6 text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-#018e99 border-#018e99 md:hover:text-#018e99 md:hover:bg-transparent" style={{ fontSize: '13px' }}>
                  <ScrollLink
                    to="about"
                    smooth={true}
                    duration={500}
                    onClick={() => setNavbar(false)}
                    className="cursor-pointer" // Add cursor-pointer class here
                  >
                    ABOUT US
                  </ScrollLink>
                </li>
                <li className="pb-6 text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-#018e99 border-#018e99 md:hover:text-#018e99 md:hover:bg-transparent" style={{ fontSize: '13px' }}>
                  <ScrollLink
                    to="sales"
                    smooth={true}
                    duration={500}
                    onClick={() => setNavbar(false)}
                    className="cursor-pointer" // Add cursor-pointer class here
                  >
                    SALES
                  </ScrollLink>
                </li>
                <li className="pb-6 text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-#018e99 border-#018e99 md:hover:text-#018e99 md:hover:bg-transparent" style={{ fontSize: '13px' }}>
                  <ScrollLink
                    to="roadmap"
                    smooth={true}
                    duration={500}
                    onClick={() => setNavbar(false)}
                    className="cursor-pointer" // Add cursor-pointer class here
                  >
                    ROADMAP
                  </ScrollLink>
                </li>
                <li className="pb-6 text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-#018e99 border-#018e99 md:hover:text-#018e99 md:hover:bg-transparent" style={{ fontSize: '13px' }}>
                  <ScrollLink
                    to="blogs"
                    smooth={true}
                    duration={500}
                    onClick={() => setNavbar(false)}
                    className="cursor-pointer" // Add cursor-pointer class here
                  >
                    BLOGS
                  </ScrollLink>
                </li>
                <li className="pb-6 text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-#018e99 border-#018e99 md:hover:text-#018e99 md:hover:bg-transparent" style={{ fontSize: '13px' }}>
                  <ScrollLink
                    to="contactus"
                    smooth={true}
                    duration={500}
                    onClick={() => setNavbar(false)}
                    className="cursor-pointer" // Add cursor-pointer class here
                  >
                    CONTACT US
                  </ScrollLink>
                </li>
                <li className="pb-5 flex justify-center md:justify-end mt-4 md:mt-0">
                <button className="px-6 py-2 border-2 border-blue-500 rounded-full text-white bg-transparent hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
                  Buy Now
                </button>
              </li>
              </ul>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;



// "use client"; // Add this at the top
// import React, { useState } from 'react';
// import Link from 'next/link';
// import styles from './Header.module.css';
// import logo from '../../images/logo.png'

// const Header = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
//     <header className={styles.header}>
//       <div className={styles.logo}>
//         <Link href="/"><img src={logo.src} alt="Logo" /></Link>
//       </div>
//       <button className={styles.navToggle} onClick={toggleNav}>
//         ☰
//       </button>
//       <nav className={`${styles.nav} ${isNavOpen ? styles.navOpen : ''}`}>
//         <Link href="/about">Home</Link>
//         <Link href="/services">SERVICES</Link>
//         <Link href="/contact">TOKEN UTILITY</Link>
//         <Link href="/contact">TOKEN</Link>
//         <Link href="/contact">FAQ</Link>
//         <Link href="/contact">CONTACT</Link>
//       </nav>
//       <div className={`${styles.auth} ${isNavOpen ? styles.navOpen : ''}`}>
//         <Link href="/login">Login</Link>
//         <Link href="/register">Register</Link>
//       </div>
//     </header>
//   );
// };

// export default Header;
