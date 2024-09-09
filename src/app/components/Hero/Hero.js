"use client";
import { useEffect, useState } from "react";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 99,
    hours: 24,
    minutes: 60,
    seconds: 60,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const { days, hours, minutes, seconds } = timeLeft;

      if (seconds > 0) {
        setTimeLeft((prev) => ({ ...prev, seconds: seconds - 1 }));
      } else if (minutes > 0) {
        setTimeLeft((prev) => ({ ...prev, minutes: minutes - 1, seconds: 59 }));
      } else if (hours > 0) {
        setTimeLeft((prev) => ({ ...prev, hours: hours - 1, minutes: 59, seconds: 59 }));
      } else if (days > 0) {
        setTimeLeft((prev) => ({ ...prev, days: days - 1, hours: 23, minutes: 59, seconds: 59 }));
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center p-8"
      style={{
        backgroundImage: 'url("/assets/herobg.png")',
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-3xl md:text-5xl lg:text-6xl text-white text-center font-bold mb-10">
        Join Future Of Algorithmic{" "}
        <span className="text-blue-500">Abricoin</span> <br /> Trading
        Strategies
      </h1>

      <div className="relative w-full max-w-sm md:max-w-xl mb-2">
        <div className="absolute left-0 text-white text-xs md:text-sm">
          <p className="text-center text-cyan-400 font-bold">
            Pre Sell
            <br />|
          </p>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 text-white text-xs md:text-sm">
          <p className="text-center text-amber-400 font-bold">
            Soft Cap
            <br />|
          </p>
        </div>
        <div className="absolute right-0 text-white text-xs md:text-sm">
          <p className="text-center text-green-500 font-bold">
            Bonus
            <br />|
          </p>
        </div>
      </div>

      <div className="w-full max-w-sm md:max-w-xl bg-gray-300 rounded-full h-2 md:h-4 mt-9">
        <div
          className="bg-blue-400 h-2 md:h-4 rounded-full linear-gradient"
          style={{ width: "70%" }} // Adjust width as per progress
        ></div>
      </div>

      <div className="relative w-full max-w-sm md:max-w-xl mb-2 mt-3">
        <div className="absolute left-0 text-white text-xs md:text-sm">
          <p className="text-white text-center">65% Target</p>
        </div>
        <div className="absolute right-0 text-white text-xs md:text-sm">
          <p className="text-white text-center">1 AI = $1000</p>
        </div>
      </div>

      <p className="text-sm md:text-lg text-white mb-4 text-center mt-10">
        Join the revolution! Our token sale is live. Donot miss the chance to
        get involved early.
      </p>

      {/* Timer Counter */}
      <div className="flex flex-wrap justify-center md:justify-start space-x-4 text-center">
        <div className="flex flex-col items-center">
          <p
            className="text-cyan-400 p-2 rounded text-4xl md:text-6xl font-bold"
            
          >
            {String(timeLeft.days).padStart(2, "0")}
          </p>
          <span className="text-sm md:text-base text-white">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <p
            className="text-amber-600 p-2 rounded text-4xl md:text-6xl font-bold"
            
          >
            {String(timeLeft.hours).padStart(2, "0")}
          </p>
          <span className="text-sm md:text-base text-white">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <p
            className="text-red-600 p-2 rounded text-4xl md:text-6xl font-bold"
            
          >
            {String(timeLeft.minutes).padStart(2, "0")}
          </p>
          <span className="text-sm md:text-base text-white">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <p
            className="text-green-600 p-2 rounded text-4xl md:text-6xl font-bold"
            
          >
            {String(timeLeft.seconds).padStart(2, "0")}
          </p>
          <span className="text-sm md:text-base text-white">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;