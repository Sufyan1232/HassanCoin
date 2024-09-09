// const WhyChooseUs = () => {
//     // Sample array of content for the 6 divs
//     const items = [
//       {
//         img: '/images/pic1.jpg',
//         title: 'Expert Team',
//         description: 'Our team consists of highly skilled professionals.',
//       },
//       {
//         img: '/images/pic2.jpg',
//         title: 'Innovative Solutions',
//         description: 'We deliver creative and innovative solutions to our clients.',
//       },
//       {
//         img: '/images/pic3.jpg',
//         title: '24/7 Support',
//         description: 'We offer round-the-clock support for our clients.',
//       },
//       {
//         img: '/images/pic4.jpg',
//         title: 'Customer Satisfaction',
//         description: 'Our focus is on exceeding customer expectations.',
//       },
//       {
//         img: '/images/pic5.jpg',
//         title: 'Affordable Prices',
//         description: 'We provide high-quality services at competitive prices.',
//       },
//       {
//         img: '/images/pic6.jpg',
//         title: 'Global Reach',
//         description: 'We serve clients from all around the globe.',
//       },
//     ];

//     return (
//       <div className="min-h-min bg-gray-500 p-8">
//         {/* H1 Heading */}
//         <h1 className="text-3xl font-bold text-center mb-8">Why Choose Us</h1>

//         {/* Scrollable Divs */}
//         <div className="flex space-x-4 overflow-x-auto no-scrollbar">
//           {items.map((item, index) => (
//             <div
//               key={index}
//               className="w-[297px] h-[335px] bg-gray-400 shadow-lg rounded-lg flex-shrink-0 p-4"
//             >
//               {/* Rounded Image */}
//               <div className="w-[80px] h-[80px] rounded-full overflow-hidden mb-4 mx-auto">
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Heading */}
//               <h2 className="text-xl font-bold text-center mb-2">{item.title}</h2>

//               {/* Paragraph */}
//               <p className="text-center text-gray-700">{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   export default WhyChooseUs;

"use client";
import { useEffect, useRef } from "react";

const WhyChooseUs = () => {
  // Sample array of content for the 6 divs
  const items = [
    {
      img: "/assets/pic1.png",
      title: "Expert Team",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    },
    {
      img: "/assets/pic1.png",
      title: "Innovative Solutions",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    },
    {
      img: "/assets/pic1.png",
      title: "24/7 Support",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    },
    {
      img: "/assets/pic1.png",
      title: "Customer Satisfaction",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    },
    {
      img: "/assets/pic1.png",
      title: "Affordable Prices",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    },
    {
      img: "/assets/pic1.png",
      title: "Global Reach",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    },
  ];

  // Reference to the container for auto-scrolling
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    const scrollStep = 1; // Adjust to increase/decrease scrolling speed

    // Function to auto-scroll horizontally
    const autoScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollStep;
        scrollAmount += scrollStep;

        // Reset scroll if it reaches the end of the scrollable content
        if (
          scrollAmount >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollAmount = 0;
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(autoScroll, 30); // Adjust to control how frequently scrolling happens

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div
      className="min-h-min text-white p-8"
      style={{ backgroundColor: "#030B15" } }
    >
      {/* H1 Heading */}
      <h1 className="text-4xl font-bold text-center mb-8">
        Why Choose Us <br />
        <span className="text-blue-500">Token</span>
      </h1>

      {/* Scrollable Divs */}
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto no-scrollbar border-white"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="w-[297px] h-[335px]  shadow-lg rounded-lg flex-shrink-0 p-4"
            style={{ backgroundColor: "#030B15" }}
          >
            {/* Rounded Image */}
            <div className="w-[80px] h-[80px] rounded-full overflow-hidden mb-4 mx-auto">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Heading */}
            <h2 className=" text-white text-2xl font-bold text-center mb-2 ">
              {item.title}
            </h2>

            {/* Paragraph */}
            <p className=" text-slate-400 text-center text-gray-700">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
