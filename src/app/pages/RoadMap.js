
// "use client";
// import React, { useState, useEffect } from 'react';
// import rmap from '../images/r4.JPG'; 


// function RoadMap() {

//   console.log("Muhammad Rasollah SallalahuAleWaslim");
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     // Function to check screen size
//     const handleResize = () => {
//       if (window.innerWidth <= 768) {
//         setIsMobile(true);
//       } else {
//         setIsMobile(false);
//       }
//     };

//     // Check the screen size when the component mounts
//     handleResize();

//     // Add event listener for window resize
//     window.addEventListener('resize', handleResize);

//     // Clean up event listener on component unmount
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <div className='bg-[#081728] w-[100%] py-[70px]'>

//       <div style={{display: "flex", flexDirection: "1 column"}} className='flex justify-center'>
//         <div className='bg-[#00c4f4] w-[10px] h-[10px] rounded-[30px] mt-1.5'></div>
//         <div className='font-bold text-[#fff] text-[13px] mx-2'>OUR ROADMAP</div>
//         <div className='bg-[#00c4f4] w-[10px] h-[10px] rounded-[30px] mt-1.5'></div>
//       </div>
//       <div style={{textAlign: "center"}} className='font-bold text-[#fff] text-[35px] flex justify-center mt-[20px] mx-[10px]'>Bigtech Strategy And</div>
//       <div style={{display: "flex", flexDirection: "1 column"}} className='flex justify-center'>
//         <div className='font-bold text-[#fff] text-[35px]'>Project</div>
//         <div className='font-bold text-[#00c4f4] text-[35px] ml-2'>Plan</div>
//       </div>
  


//       {isMobile ? (
//         <div className='flex justify-center'>
//           {/* Render roadmap image for mobile view */}
//           <img src={rmap.src} alt="Roadmap" />
//         </div>
//       ) : (
//         <div>
//           {/* Render desktop view */}
//           <div style={{display: "flex", flexDirection: "1 column", marginTop: "50px"}}>
//          <div>
//           <h4 className='font-bold text-[#00c4f4] ml-[20px] w-[150px] mr-[50px] mt-[130px] text-[14px]'>MID OF Q4 2021</h4>
//         </div>
//         <div className='border-l-[1.5px] border-l-[#e646b3] pl-[10px] w-[350px] h-[180px]'>
//           <h4 className='font-bold text-[#fff]'>Research</h4>
//           <p className='text-[13px] text-[#c7c5c5] w-[250px]'>
//           SubQuery Builders/Grants Program
//           SQT Network contract internal MVP
//           Coordinator and client SDK
//           </p>
//           <h4 className='font-bold text-[#f48a00] ml-[100px] mr-[10px] mt-[50px] text-[14px]'>MID OF Q4 2021</h4>
//         </div>
//         <div className='border-l-[1.5px] border-l-[#46e65b] pl-[10px] w-[350px] h-[180px]'>
//           <h4 className='font-bold text-[#fff]'>Research</h4>
//           <p className='text-[13px] text-[#c7c5c5] w-[250px]'>
//           SubQuery Builders/Grants Program
//           SQT Network contract internal MVP
//           Coordinator and client SDK
//           </p>
//           <h4 className='font-bold text-[#0059f4] ml-[100px] mr-[10px] mt-[50px] text-[14px]'>MID OF Q4 2021</h4>
//         </div>
//         <div className='border-l-[1.5px] border-l-[#f48a00] pl-[10px] w-[400px] h-[180px]'>
//           <h4 className='font-bold text-[#fff]'>Research</h4>
//           <p className='text-[13px] text-[#c7c5c5] w-[250px]'>
//           SubQuery Builders/Grants Program
//           SQT Network contract internal MVP
//           Coordinator and client SDK
//           </p>
//           <h4 className='font-bold text-[#e646b3] ml-[100px] mr-[10px] mt-[50px] text-[14px]'>MID OF Q4 2021</h4>
//         </div>        
//       </div>

//       <div style={{display: "flex", flexDirection: "1 column"}} className='bg-slate-700  h-[7px]' >
//         {/* <div className=' bg-[#46b9e6] ml-[40px] mt-[-10px] rounded-[30px] w-[20px] h-[20px]'></div>
//         <div className=' bg-[#e646a6] ml-[150px] mt-[-10px] rounded-[30px] w-[20px] h-[20px]'></div>
//         <div className=' bg-[#f48a00] ml-[142px] mt-[-10px] rounded-[30px] w-[20px] h-[20px]'></div>
//         <div className=' bg-[#46e65e] ml-[170px] mt-[-10px] rounded-[30px] w-[20px] h-[20px]'></div>
//         <div className=' bg-[#4651e6] ml-[137px] mt-[-10px] rounded-[30px] w-[20px] h-[20px]'></div>
//         <div className=' bg-[#f48a00] ml-[175px] mt-[-10px] rounded-[30px] w-[20px] h-[20px]'></div>
//         <div className=' bg-[#f400bf] ml-[135px] mt-[-10px] rounded-[30px] w-[20px] h-[20px]'></div> */}
       
//       </div>

//       <div style={{display: "flex", flexDirection: "1 column"}}>
//         <div className='border-l-[1.5px] border-l-[#46b9e6] ml-[50px] pl-[10px] w-[360px] h-[180px]'>
//           <h4 className='font-bold text-[#f400bf] ml-[100px] mr-[10px] mt-[30px] text-[14px]'>MID OF Q4 2021</h4>
//           <h4 className='font-bold text-[#fff] mt-[50px]'>Research</h4>
//           <p className='text-[13px] text-[#c7c5c5] w-[250px]'>
//           SubQuery Builders/Grants Program
//           SQT Network contract internal MVP
//           Coordinator and client SDK
//           </p>
//         </div>
//         <div className='border-l-[1.5px] border-l-[#f48a00] pl-[10px] w-[380px] h-[180px]'>
//           <h4 className='font-bold text-[#46e65e] ml-[100px] mr-[10px] mt-[30px] text-[14px]'>MID OF Q4 2021</h4>
//           <h4 className='font-bold text-[#fff] mt-[50px]'>Research</h4>
//           <p className='text-[13px] text-[#c7c5c5] w-[250px]'>
//           SubQuery Builders/Grants Program
//           SQT Network contract internal MVP
//           Coordinator and client SDK
//           </p>
//         </div>
//         <div className='border-l-[1.5px] border-l-[#4651e6] pl-[10px] w-[385px] h-[180px]'>
//           <h4 className='font-bold text-[#f48a00] ml-[100px] mr-[10px] mt-[30px] text-[14px]'>MID OF Q4 2021</h4>
//           <h4 className='font-bold text-[#fff] mt-[50px]'>Research</h4>
//           <p className='text-[13px] text-[#c7c5c5] w-[250px]'>
//           SubQuery Builders/Grants Program
//           SQT Network contract internal MVP
//           Coordinator and client SDK
//           </p>
//         </div>
//         <div className='border-l-[1.5px] border-l-[#f400bf] pl-[10px] w-[360px] h-[180px]'>
//           <h4 className='font-bold text-[#00e8f4] ml-[100px] mr-[10px] mt-[30px] text-[14px]'>MID OF Q4 2021</h4>
//           <h4 className='font-bold text-[#fff] mt-[50px]'>Research</h4>
//           <p className='text-[13px] text-[#c7c5c5] w-[250px]'>
//           SubQuery Builders/Grants Program
//           SQT Network contract internal MVP
//           Coordinator and client SDK
//           </p>
//         </div>        
//       </div>

//         </div>
//       )}
//     </div>
//   );
// }

// export default RoadMap;

"use client";
import React, { useState, useEffect } from 'react';
import rmap from '../images/r4.JPG'; 

function RoadMap() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check the screen size on component mount and update on resize
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='bg-[#081728] w-[100%] py-[70px]'>
      <div className='flex justify-center'>
        <div className='bg-[#00c4f4] w-[10px] h-[10px] rounded-full mt-1.5'></div>
        <div className='font-bold text-[#fff] text-[13px] mx-2'>OUR ROADMAP</div>
        <div className='bg-[#00c4f4] w-[10px] h-[10px] rounded-full mt-1.5'></div>
      </div>

      <div className='text-center font-bold text-[#fff] text-[35px] flex justify-center mt-[20px] mx-[10px]'>
        Bigtech Strategy And
      </div>
      <div className='flex justify-center'>
        <div className='font-bold text-[#fff] text-[35px]'>Project</div>
        <div className='font-bold text-[#00c4f4] text-[35px] ml-2'>Plan</div>
      </div>

      {isMobile ? (
        <div className='flex justify-center'>
          <img src={rmap.src} alt="Roadmap" className="w-full h-auto" />
        </div>
      ) : (
        <div className='mt-[50px]'>
          {/* Render desktop view */}
          <div style={{display: "flex", flexDirection: "1 column", marginTop: "50px"}}>
         <div>
          <h4 className='font-bold text-[#00c4f4] ml-[20px] w-[150px] mr-[50px] mt-[130px] text-[14px]'>MID OF Q4 2021</h4>
        </div>
        <div className='border-l-[1.5px] border-l-[#e646b3] pl-[10px] w-[350px] h-[180px]'>
          <h4 className='font-bold text-[#fff]'>Research</h4>
          <p className='text-[13px] text-[#c7c5c5] w-[250px]'>
          SubQuery Builders/Grants Program
          SQT Network contract internal MVP
          Coordinator and client SDK
          </p>
          <h4 className='font-bold text-[#f48a00] ml-[100px] mr-[10px] mt-[50px] text-[14px]'>MID OF Q4 2021</h4>
        </div>
        <div className='border-l-[1.5px] border-l-[#46e65b] pl-[10px] w-[350px] h-[180px]'>
          <h4 className='font-bold text-[#fff]'>Research</h4>
          <p className='text-[13px] text-[#c7c5c5] w-[250px]'>
          SubQuery Builders/Grants Program
          SQT Network contract internal MVP
          Coordinator and client SDK
          </p>
          <h4 className='font-bold text-[#0059f4] ml-[100px] mr-[10px] mt-[50px] text-[14px]'>MID OF Q4 2021</h4>
        </div>
        <div className='border-l-[1.5px] border-l-[#f48a00] pl-[10px] w-[400px] h-[180px]'>
          <h4 className='font-bold text-[#fff]'>Research</h4>
          <p className='text-[13px] text-[#c7c5c5] w-[250px]'>
          SubQuery Builders/Grants Program
          SQT Network contract internal MVP
          Coordinator and client SDK
          </p>
          <h4 className='font-bold text-[#e646b3] ml-[100px] mr-[10px] mt-[50px] text-[14px]'>MID OF Q4 2021</h4>
        </div>        
      </div>

      <div style={{display: "flex", flexDirection: "1 column"}} className='bg-slate-700  h-[7px]' >
        {/* <div className=' bg-[#46b9e6] ml-[40px] mt-[-10px] rounded-[30px] w-[20px] h-[20px]'></div>
        <div className=' bg-[#e646a6] ml-[150px] mt-[-10px] rounded-[30px] w-[20px] h-[20px]'></div>
        <div className=' bg-[#f48a00] ml-[142px] mt-[-10px] rounded-[30px] w-[20px] h-[20px]'></div>
        <div className=' bg-[#46e65e] ml-[170px] mt-[-10px] rounded-[30px] w-[20px] h-[20px]'></div>
        <div className=' bg-[#4651e6] ml-[137px] mt-[-10px] rounded-[30px] w-[20px] h-[20px]'></div>
        <div className=' bg-[#f48a00] ml-[175px] mt-[-10px] rounded-[30px] w-[20px] h-[20px]'></div>
        <div className=' bg-[#f400bf] ml-[135px] mt-[-10px] rounded-[30px] w-[20px] h-[20px]'></div> */}
       
      </div>

      <div style={{display: "flex", flexDirection: "1 column"}}>
        <div className='border-l-[1.5px] border-l-[#46b9e6] ml-[50px] pl-[10px] w-[360px] h-[180px]'>
          <h4 className='font-bold text-[#f400bf] ml-[100px] mr-[10px] mt-[30px] text-[14px]'>MID OF Q4 2021</h4>
          <h4 className='font-bold text-[#fff] mt-[50px]'>Research</h4>
          <p className='text-[13px] text-[#c7c5c5] w-[250px]'>
          SubQuery Builders/Grants Program
          SQT Network contract internal MVP
          Coordinator and client SDK
          </p>
        </div>
        <div className='border-l-[1.5px] border-l-[#f48a00] pl-[10px] w-[380px] h-[180px]'>
          <h4 className='font-bold text-[#46e65e] ml-[100px] mr-[10px] mt-[30px] text-[14px]'>MID OF Q4 2021</h4>
          <h4 className='font-bold text-[#fff] mt-[50px]'>Research</h4>
          <p className='text-[13px] text-[#c7c5c5] w-[250px]'>
          SubQuery Builders/Grants Program
          SQT Network contract internal MVP
          Coordinator and client SDK
          </p>
        </div>
        <div className='border-l-[1.5px] border-l-[#4651e6] pl-[10px] w-[385px] h-[180px]'>
          <h4 className='font-bold text-[#f48a00] ml-[100px] mr-[10px] mt-[30px] text-[14px]'>MID OF Q4 2021</h4>
          <h4 className='font-bold text-[#fff] mt-[50px]'>Research</h4>
          <p className='text-[13px] text-[#c7c5c5] w-[250px]'>
          SubQuery Builders/Grants Program
          SQT Network contract internal MVP
          Coordinator and client SDK
          </p>
        </div>
        <div className='border-l-[1.5px] border-l-[#f400bf] pl-[10px] w-[360px] h-[180px]'>
          <h4 className='font-bold text-[#00e8f4] ml-[100px] mr-[10px] mt-[30px] text-[14px]'>MID OF Q4 2021</h4>
          <h4 className='font-bold text-[#fff] mt-[50px]'>Research</h4>
          <p className='text-[13px] text-[#c7c5c5] w-[250px]'>
          SubQuery Builders/Grants Program
          SQT Network contract internal MVP
          Coordinator and client SDK
          </p>
        </div>        
      </div>

    

        </div>
      )}
    </div>
  );
}

export default RoadMap;


// import React from 'react'

// function RoadMap() {

//   console.log("Muhammad Rasollah SallalahuAleWaslim")

//   return (
//     <div className='bg-[#081728] w-full py-[70px]'>
//       <div style={{display: "flex", flexDirection: "1 column"}} className='flex justify-center'>
//         <div className='bg-[#00c4f4] w-[10px] h-[10px] rounded-[30px] mt-1.5'></div>
//         <div className='font-bold text-[#fff] mx-2'>OUR ROADMAP</div>
//         <div className='bg-[#00c4f4] w-[10px] h-[10px] rounded-[30px] mt-1.5'></div>
//       </div>
//       <div className='font-bold text-[#fff] text-[35px] flex justify-center mt-[20px]'>Bigtech Strategy And</div>
//       <div style={{display: "flex", flexDirection: "1 column"}} className='flex justify-center'>
//         <div className='font-bold text-[#fff] text-[35px]'>Project</div>
//         <div className='font-bold text-[#00c4f4] text-[35px] ml-2'>Plan</div>
//       </div>

//       <div style={{display: "flex", flexDirection: "1 column", marginTop: "50px"}}>
//         <div>
//           <h4 className='font-bold text-[#00c4f4] ml-[20px] w-[150px] mr-[50px] mt-[130px] text-[14px]'>MID OF Q4 2021</h4>
//         </div>
//         <div className='border-l-[1.5px] border-l-[#e646b3] pl-[10px] w-[350px] h-[180px]'>
//           <h4 className='font-bold text-[#fff]'>Research</h4>
//           <p className='text-[13px] text-[#c7c5c5] w-[250px]'>
//           SubQuery Builders/Grants Program
//           SQT Network contract internal MVP
//           Coordinator and client SDK
//           </p>
//           <h4 className='font-bold text-[#f48a00] ml-[100px] mr-[10px] mt-[50px] text-[14px]'>MID OF Q4 2021</h4>
//         </div>
//         <div className='border-l-[1.5px] border-l-[#46e65b] pl-[10px] w-[350px] h-[180px]'>
//           <h4 className='font-bold text-[#fff]'>Research</h4>
//           <p className='text-[13px] text-[#c7c5c5] w-[250px]'>
//           SubQuery Builders/Grants Program
//           SQT Network contract internal MVP
//           Coordinator and client SDK
//           </p>
//           <h4 className='font-bold text-[#0059f4] ml-[100px] mr-[10px] mt-[50px] text-[14px]'>MID OF Q4 2021</h4>
//         </div>
//         <div className='border-l-[1.5px] border-l-[#f48a00] pl-[10px] w-[400px] h-[180px]'>
//           <h4 className='font-bold text-[#fff]'>Research</h4>
//           <p className='text-[13px] text-[#c7c5c5] w-[250px]'>
//           SubQuery Builders/Grants Program
//           SQT Network contract internal MVP
//           Coordinator and client SDK
//           </p>
//           <h4 className='font-bold text-[#e646b3] ml-[100px] mr-[10px] mt-[50px] text-[14px]'>MID OF Q4 2021</h4>
//         </div>        
//       </div>

//       <div style={{display: "flex", flexDirection: "1 column"}} className='bg-slate-700 w-full h-[7px]' >
//         <div className=' bg-[#46b9e6] ml-[40px] mt-[-10px] rounded-[30px] w-[20px] h-[20px]'></div>
//         <div className=' bg-[#e646a6] ml-[150px] mt-[-10px] rounded-[30px] w-[20px] h-[20px]'></div>
//         <div className=' bg-[#f48a00] ml-[142px] mt-[-10px] rounded-[30px] w-[20px] h-[20px]'></div>
//         <div className=' bg-[#46e65e] ml-[170px] mt-[-10px] rounded-[30px] w-[20px] h-[20px]'></div>
//         <div className=' bg-[#4651e6] ml-[137px] mt-[-10px] rounded-[30px] w-[20px] h-[20px]'></div>
//         <div className=' bg-[#f48a00] ml-[175px] mt-[-10px] rounded-[30px] w-[20px] h-[20px]'></div>
//         <div className=' bg-[#f400bf] ml-[135px] mt-[-10px] rounded-[30px] w-[20px] h-[20px]'></div>
       
//       </div>

//       <div style={{display: "flex", flexDirection: "1 column"}}>
//         <div className='border-l-[1.5px] border-l-[#46b9e6] ml-[50px] pl-[10px] w-[360px] h-[180px]'>
//           <h4 className='font-bold text-[#f400bf] ml-[100px] mr-[10px] mt-[30px] text-[14px]'>MID OF Q4 2021</h4>
//           <h4 className='font-bold text-[#fff] mt-[50px]'>Research</h4>
//           <p className='text-[13px] text-[#c7c5c5] w-[250px]'>
//           SubQuery Builders/Grants Program
//           SQT Network contract internal MVP
//           Coordinator and client SDK
//           </p>
//         </div>
//         <div className='border-l-[1.5px] border-l-[#f48a00] pl-[10px] w-[380px] h-[180px]'>
//           <h4 className='font-bold text-[#46e65e] ml-[100px] mr-[10px] mt-[30px] text-[14px]'>MID OF Q4 2021</h4>
//           <h4 className='font-bold text-[#fff] mt-[50px]'>Research</h4>
//           <p className='text-[13px] text-[#c7c5c5] w-[250px]'>
//           SubQuery Builders/Grants Program
//           SQT Network contract internal MVP
//           Coordinator and client SDK
//           </p>
//         </div>
//         <div className='border-l-[1.5px] border-l-[#4651e6] pl-[10px] w-[385px] h-[180px]'>
//           <h4 className='font-bold text-[#f48a00] ml-[100px] mr-[10px] mt-[30px] text-[14px]'>MID OF Q4 2021</h4>
//           <h4 className='font-bold text-[#fff] mt-[50px]'>Research</h4>
//           <p className='text-[13px] text-[#c7c5c5] w-[250px]'>
//           SubQuery Builders/Grants Program
//           SQT Network contract internal MVP
//           Coordinator and client SDK
//           </p>
//         </div>
//         <div className='border-l-[1.5px] border-l-[#f400bf] pl-[10px] w-[360px] h-[180px]'>
//           <h4 className='font-bold text-[#00e8f4] ml-[100px] mr-[10px] mt-[30px] text-[14px]'>MID OF Q4 2021</h4>
//           <h4 className='font-bold text-[#fff] mt-[50px]'>Research</h4>
//           <p className='text-[13px] text-[#c7c5c5] w-[250px]'>
//           SubQuery Builders/Grants Program
//           SQT Network contract internal MVP
//           Coordinator and client SDK
//           </p>
//         </div>        
//       </div>



//     </div>
//   )
// }

// export default RoadMap




