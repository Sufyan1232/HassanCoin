
"use client";
import { useEffect, useState } from 'react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set target date for countdown (example: 1 week from now)
  const targetDate = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      // Clear interval if the countdown is complete
      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8 relative z-10" style={{ backgroundImage: 'url("/assets/herobg.png")', backgroundSize: 'cover' }}>
      {/* H1 Heading */}
      
      <h1 className="text-3xl md:text-5xl lg:text-6xl text-white text-center font-bold mb-10">
        Join Future Of Algorithmic <span className="text-blue-500">Abricoin</span> <br /> Trading Strategies
      </h1>

      {/* Progress Bar Labels */}
      <div className="relative w-full max-w-sm md:max-w-xl mb-2">
        {/* Pre Sell at Start */}
        <div className="absolute left-0 text-white text-xs md:text-sm">
          <p className="text-center">Pre Sell<br />|</p>
        </div>
        {/* Soft Cap at Center */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-white text-xs md:text-sm">
          <p className="text-center">Soft Cap<br />|</p>
        </div>
        {/* Bonus at End */}
        <div className="absolute right-0 text-white text-xs md:text-sm">
          <p className="text-center">Bonus<br />|</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-sm md:max-w-xl bg-gray-300 rounded-full h-2 md:h-4 mt-9">
        <div
          className="bg-blue-500 h-2 md:h-4 rounded-full"
          style={{ width: '70%' }} // Adjust width as per progress
        ></div>
      </div>

      {/* Progress Bar Info */}
      <div className="relative w-full max-w-sm md:max-w-xl mb-2 mt-3">
        <div className='absolute left-0 text-white text-xs md:text-sm'>
        <p className="text-white text-center">65% Target</p>
        </div>
        <div className='absolute right-0 text-white text-xs md:text-sm'>
        <p className="text-white text-center">1 AI = $1000</p>
        </div>
      </div>

      {/* Paragraph */}
      <p className="text-sm md:text-lg text-white mb-4 text-center mt-10">
        Join the revolution! Our token sale is live. Don't miss the chance to get involved early.
      </p>

      {/* Timer Counter */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center">
        <div>
          <p className="bg-blue-500 text-white p-2 rounded text-xl md:text-3xl font-bold">
            {timeLeft.days}
          </p>
          <span className="text-sm md:text-base text-white">Days</span>
        </div>
        <div>
          <p className="bg-blue-500 text-white p-2 rounded text-2xl md:text-3xl font-bold">
            {timeLeft.hours}
          </p>
          <span className="text-sm md:text-base text-white">Hours</span>
        </div>
        <div>
          <p className="bg-blue-500 text-white p-2 rounded text-2xl md:text-3xl font-bold">
            {timeLeft.minutes}
          </p>
          <span className="text-sm md:text-base text-white">Minutes</span>
        </div>
        <div>
          <p className="bg-blue-500 text-white p-2 rounded text-2xl md:text-3xl font-bold">
            {timeLeft.seconds}
          </p>
          <span className="text-sm md:text-base text-white">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
