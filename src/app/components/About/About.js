"use client";

const About = () => {
    return (
      <div className="min-h-screen justify-center gap-20 flex flex-col md:flex-row items-center p-8" style={{backgroundColor: '#030B15'}}>
        {/* Left Side - Image */}
        <div className="w-auto lg:w-1/3 md:w-1/2 mb-8 md:mb-0">
          <img 
            src='/assets/aboutus.png' 
            alt="About Us" 
            className="rounded-full shadow-lg w-full h-auto"
          />
        </div>
  
        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left text-white items-center">
          {/* Heading */}
          <h1 className="md:text-4xl font-bold mb-4" style={{fontSize: '2.8rem'}}>
            About Our Company
          </h1>
  
          {/* Paragraph */}
          <p className="text-slate-300 text-lg md:text-xl mb-6  mt-3">
            We are a leading company in the crypto industry, committed to building the future of algorithmic trading and blockchain innovation. Our vision is to revolutionize the way people invest and trade, creating opportunities for everyone.
          </p>
  
          {/* Button */}
          <button className="font-bold text-[#00A8D2] px-6 py-2 rounded-3xl border-2  border-[#00A8D2]">
            PURCHASE TOKENS
          </button>
        </div>
      </div>
    );
  };
  
  export default About;
  