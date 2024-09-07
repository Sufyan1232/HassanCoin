// La Illaha illala hu Muhammad Rasollah SallalahuAleWaslim 

"use client";
import React, { useState } from 'react';
import saleImg from '../../images/chart.png';
import mimg from '../../images/mimg.png';
import planet from '../../images/e2.jpg';

function BigTech() {
    const [activeTab, setActiveTab] = useState('funding');

    return (
        <div className='w-full lg:w-[1400px] flex flex-col lg:flex-row bg-purple-500 h-auto lg:h-[540px]'
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0.6, 0.6), rgba(0, 0, 0.6, 0.6)), url(${planet.src})`,
                backgroundSize: '1450px 900px',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                
            }}

        >
            {/* Right box */}
            <div className='w-full lg:w-1/2 flex flex-col'>
                <div className='mb-[70px] flex justify-end'>
                    <img src={mimg.src} className='w-[400px]  mt-1' />
                </div>
            </div>

            {/* Left box */}
            <div className='py-[50px] pl-5 lg:pl-[100px] w-full lg:w-1/2 flex flex-col'>
                <div style={{ display: "flex", flexDirection: "1 column" }} className='flex justify-start'>
                    <div className='bg-[#00c4f4] w-[10px] h-[10px] rounded-[30px] mt-1.5'></div>
                    <div className='font-bold text-[#fff] mx-2'>Whitepaper</div>
                    <div className='bg-[#00c4f4] w-[10px] h-[10px] rounded-[30px] mt-1.5'></div>
                </div>

                {/* Data sections */}

                <div id="data1">
                    <h1 className='text-[#fff] text-[35px] lg:text-[45px] font-bold mt-[30px]'>Read Bigtech</h1>
                    <h1 className='text-[#00c4f4] text-[35px] lg:text-[45px] font-bold mt-[-10px]'>Documents</h1>
                    <ul className='text-[#fff] list-disc decoration-dotted mt-5 ml-5'>
                      <li>White Paper</li>
                      <li>Privacy & Policy</li>
                      <li>Terms Of Coin Sale</li>
                      <li>One Pager</li>
                    </ul>
                    <div>
                        <button className='rounded-[30px] text-[11px] font-bold text-[#fff] mt-[40px] w-[150px] h-[50px] bg-purple-800'>BUY NOW</button>
                    </div>
                </div>




            </div>


        </div>
    );
}

export default BigTech;



