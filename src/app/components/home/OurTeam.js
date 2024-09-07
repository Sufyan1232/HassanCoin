
"use client";
import React, { useState, useEffect } from 'react';
import rmap from '../../images/r4.JPG'; 
import team01 from '../../images/team.png'; 
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";



function OurTeam() {

  console.log("Muhammad Rasollah SallalahuAleWaslim");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen size
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Check the screen size when the component mounts
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='bg-[#081728] w-full py-[70px]'>

      <div style={{display: "flex", flexDirection: "1 column"}} className='flex justify-center'>
        <div className='bg-[#00c4f4] w-[10px] h-[10px] rounded-[30px] mt-1.5'></div>
        <div className='font-bold text-[#fff] text-[13px] mx-2'>OUR TEAM</div>
        <div className='bg-[#00c4f4] w-[10px] h-[10px] rounded-[30px] mt-1.5'></div>
      </div>
      <div style={{textAlign: "center"}} className='font-bold text-[#fff] text-[35px] flex justify-center mt-[20px] mx-[10px]'>The Leadership</div>
      <div className='font-bold text-[#00c4f4] text-[35px] flex justify-center ml-2'>Team</div>

      <div className='grid grid-cols-4'>
        <div>
          <div><img src={team01.src} /></div>
          <h3>Cameron Williamson</h3>
          <h5>Founder & CO</h5>
          <div className='grid grid-cols-4 gap-0 w-[150px]'>
             <FaFacebookF className='text-white hover:text-[#00c4f4]' />
             <FaTwitter className='text-white hover:text-[#00c4f4]' />
             <FaInstagram className='text-white hover:text-[#00c4f4]' />
             <FaYoutube className='text-white hover:text-[#00c4f4]' />


          </div>

        </div>
      </div>
 
  

    </div>
  );
}

export default OurTeam;
