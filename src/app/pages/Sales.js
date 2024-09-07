"use client";
import React, { useState } from 'react';
import saleImg from '../images/chart.png'; 
import earth from '../images/earth.jpg'; 

function Sales() {
    const [activeTab, setActiveTab] = useState('funding'); 

    return (
        <div className='w-full flex flex-col lg:flex-row bg-purple-500 h-auto lg:h-[500px]'
        style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${earth.src})`,
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
        }}

        >
            {/* Left box */}
            <div className='py-[50px] pl-5 lg:pl-[200px] w-full lg:w-1/2 flex flex-col'>
                <div>
                    {/* Links to switch between tabs */}
                    <button 
                        onClick={() => setActiveTab('funding')}
                        className={`text-[#fff] text-[13.5px] font-bold pb-1 mr-10 ${activeTab === 'funding' ? 'border-b-4 border-b-purple-800' : ''}`}
                    >
                        FUNDING ALLOCATION
                    </button>
                    <button 
                        onClick={() => setActiveTab('token')}
                        className={`text-[#fff] text-[13.5px] font-bold ${activeTab === 'token' ? ' border-b-4 border-b-purple-800' : ''}`}
                    >
                        TOKEN ALLOCATION
                    </button>
                </div>

                {/* Data sections */}
                {activeTab === 'funding' && (
                    <div id="data1">
                        <h1 className='text-[#fff] text-[35px] lg:text-[45px] font-bold mt-[30px]'>1 CNL =</h1>
                        <h1 className='text-[#fff] text-[35px] lg:text-[45px] font-bold mt-[-10px]'>0.0863 BTC</h1>
                        <h5 className='text-[#fff] w-full lg:w-[70%] text-[13px] mt-[10px]'>
                            The World’s 1st ICO Platform That Offers Rewards and The platform helps investors to make easy to purchase and sell their tokens
                        </h5>
                        <div> 
                            <button className='rounded-[30px] text-[11px] font-bold text-[#fff] mt-[40px] w-[150px] h-[50px] bg-purple-800'>BUY NOW</button> 
                        </div>
                    </div>
                )}

                {activeTab === 'token' && (
                    <div id="data2">
                        <h1 className='text-[#fff] text-[35px] lg:text-[45px] font-bold mt-[30px]'>2 CNL =</h1>
                        <h1 className='text-[#fff] text-[35px] lg:text-[45px] font-bold mt-[-10px]'>0.0863 BTC</h1>
                        <h5 className='text-[#fff] w-full lg:w-[70%] text-[13px] mt-[10px]'>
                            The World’s 1st ICO Platform That Offers Rewards and The platform helps investors to make easy to purchase and sell their tokens
                        </h5>
                        <div> 
                            <button className='rounded-[30px] text-[11px] font-bold text-[#fff] mt-[40px] w-[150px] h-[50px] bg-purple-800'>BUY NOW</button> 
                        </div>
                    </div>
                )}
            </div>

            {/* Right box */}
            <div className='w-full lg:w-1/2 flex flex-col'>
                <div className='bg-[#0b1d33] w-full lg:w-[70%] h-auto pt-[25px] lg:h-[90%] rounded-[30px] lg:ml-3 px-5 lg:px-[40px] py-10 text-[#fff] text-[13px]'>
                    <div className='mb-[70px] flex justify-center'>
                        <img src={saleImg.src} className='w-[150px] lg:w-[200px]' />
                    </div>
                    
                     <div>
                       <div style={{display: "flex", flexDirection:"2 column", marginBottom:"10px"}}>
                         <div className='w-[20px] h-[20px] rounded-[30px] bg-neutral-500'></div>
                         <div className='ml-[10px] mr-[48px]'>Contingency: 70%</div>
                         <div className='w-[20px] h-[20px] rounded-[30px] bg-neutral-500'></div>
                         <div className='ml-[10px] mr-[10px]'>Business Development: 10%</div>
                       </div>
                       <div style={{display: "flex", flexDirection:"1 column",  marginBottom:"10px"}}>
                         <div className='w-[20px] h-[20px] rounded-[30px] bg-neutral-500'></div>
                         <div className='ml-[10px] mr-[76px]'>Investor: 30%</div>
                         <div className='w-[20px] h-[20px] rounded-[30px] bg-neutral-500'></div>
                         <div className='ml-[10px] mr-[10px]'>Pland: 8%</div>
                       </div>
                       <div style={{display: "flex", flexDirection:"1 column",  marginBottom:"10px" }}>
                         <div className='w-[20px] h-[20px] rounded-[30px] bg-neutral-500'></div>
                         <div className='ml-[10px] mr-[15px]'>Legal & Regulation: 10%</div>
                         <div className='w-[20px] h-[20px] rounded-[30px] bg-neutral-500'></div>
                         <div className='ml-[10px] mr-[10px]'>Czech Republic: 15%</div>
                       </div>
                     </div> 


                    

                </div>
            </div>
        </div>
    );
}

export default Sales;






// "use client";
// import React, { useState } from 'react';
// import saleImg from '../images/chart.png'; 

// function Sales() {
//     const [activeTab, setActiveTab] = useState('funding'); // Initialize state for active tab

//     return (
//         <div style={{ width: "1400px", display:"flex", flexDirection: "1 column" }} className='w-full bg-purple-500 h-[500px]'>
//             {/* Left box*/}
//             <div className='bg-white py-[50px] pl-[200px] w-1/2 flex flex-col'>
//                 <div>
//                     {/* Links to switch between tabs */}
//                     <button 
//                         onClick={() => setActiveTab('funding')}
//                         className={`text-[13.5px] font-bold pb-1 mr-10 ${activeTab === 'funding' ? 'border-b-4 border-b-purple-800' : ''}`}
//                     >
//                         FUNDING ALLOCATION
//                     </button>
//                     <button 
//                         onClick={() => setActiveTab('token')}
//                         className={`text-[13.5px] font-bold ${activeTab === 'token' ? ' border-b-4 border-b-purple-800' : ''}`}
//                     >
//                         TOKEN ALLOCATION
//                     </button>
//                 </div>

//                 {/* Data sections */}
//                 {activeTab === 'funding' && (
//                     <div id="data1">
//                         <h1 className='text-[45px] font-bold mt-[30px]'>1 CNL =</h1>
//                         <h1 className='text-[45px] font-bold mt-[-10px]'>0.0863 BTC</h1>
//                         <h5 className='w-[70%] text-[13px] mt-[10px]'>
//                             The World’s 1st ICO Platform That Offers Rewards and The platform helps investors to make easy to purchase and sell their tokens
//                         </h5>
//                         <div> 
//                             <button className='rounded-[30px] text-[11px] font-bold text-[#fff] mt-[40px] w-[150px] h-[50px] bg-purple-800'>BUY NOW</button> 
//                         </div>
//                     </div>
//                 )}

//                 {activeTab === 'token' && (
//                     <div id="data2">
//                         <h1 className='text-[45px] font-bold mt-[30px]'>2 CNL =</h1>
//                         <h1 className='text-[45px] font-bold mt-[-10px]'>0.0863 BTC</h1>
//                         <h5 className='w-[70%] text-[13px] mt-[10px]'>
//                             The World’s 1st ICO Platform That Offers Rewards and The platform helps investors to make easy to purchase and sell their tokens
//                         </h5>
//                         <div> 
//                             <button className='rounded-[30px] text-[11px] font-bold text-[#fff] mt-[40px] w-[150px] h-[50px] bg-purple-800'>BUY NOW</button> 
//                         </div>
//                     </div>
//                 )}
//             </div>

//             {/* Right box*/}
//             <div className='w-1/2 flex flex-col'>
//                <div className='bg-[#0b1d33] w-[70%] h-[100%] rounded-[30px] ml-3 px-[40px] py-10 text-[#fff] text-[13px]'>
//                 <div className='mb-[70px]' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                     <img src={saleImg.src} style={{ width: "200px" }} />
//                 </div>

//                     <div>
//                       <div style={{display: "flex", flexDirection:"1 column", marginBottom:"10px"}}>
//                         <div className='w-[20px] h-[20px] rounded-[30px] bg-neutral-500'></div>
//                         <div className='ml-[10px] mr-[48px]'>Contingency: 70%</div>
//                         <div className='w-[20px] h-[20px] rounded-[30px] bg-neutral-500'></div>
//                         <div className='ml-[10px] mr-[10px]'>Business Development: 10%</div>
//                       </div>
//                       <div style={{display: "flex", flexDirection:"1 column",  marginBottom:"10px"}}>
//                         <div className='w-[20px] h-[20px] rounded-[30px] bg-neutral-500'></div>
//                         <div className='ml-[10px] mr-[76px]'>Investor: 30%</div>
//                         <div className='w-[20px] h-[20px] rounded-[30px] bg-neutral-500'></div>
//                         <div className='ml-[10px] mr-[10px]'>Pland: 8%</div>
//                       </div>
//                       <div style={{display: "flex", flexDirection:"1 column",  marginBottom:"10px" }}>
//                         <div className='w-[20px] h-[20px] rounded-[30px] bg-neutral-500'></div>
//                         <div className='ml-[10px] mr-[15px]'>Legal & Regulation: 10%</div>
//                         <div className='w-[20px] h-[20px] rounded-[30px] bg-neutral-500'></div>
//                         <div className='ml-[10px] mr-[10px]'>Czech Republic: 15%</div>
//                       </div>
//                     </div>
                    
//                </div>
//             </div>
//         </div>
//     );
// }

// export default Sales;
