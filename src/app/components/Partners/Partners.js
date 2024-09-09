// const Partners = () => {
//     // Sample array of images for partners (replace these with actual image paths)
//     const partners = [
//       '/images/partner1.jpg',
//       '/images/partner2.jpg',
//       '/images/partner3.jpg',
//       '/images/partner4.jpg',
//       '/images/partner5.jpg',
//       '/images/partner6.jpg',
//       '/images/partner7.jpg',
//       '/images/partner8.jpg',
//       '/images/partner9.jpg',
//       '/images/partner10.jpg',
//     ];
  
//     return (
//       <div className="min-h-screen bg-gray-100 p-8">
//         <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
        
//         <div className="grid grid-cols-2 md:grid-cols-5 gap-6 justify-items-center">
//           {partners.map((partner, index) => (
//             <div key={index} className="w-[232px] h-[123px] bg-white shadow-lg rounded-md flex items-center justify-center">
//               <img 
//                 src={partner} 
//                 alt={`Partner ${index + 1}`} 
//                 className="w-full h-full object-cover rounded-md"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   export default Partners;
  



const Partners = () => {
    // Sample array of images for partners (replace these with actual image paths)
    const partners = [
      '/assets/partner.png',
      '/assets/abricoin.png',
      '/assets/partner.png',
      '/assets/abricoin.png',
      '/assets/partner.png',
      '/assets/abricoin.png',
      '/assets/partner.png',
      '/assets/abricoin.png',
      '/assets/partner.png',
      '/assets/abricoin.png',
      
    ];
  
    return (
      <div className="min-h-min  px-4 py-8 md:px-8 " style={{backgroundColor: '#030B15'}}>
        {/* Title */}
        <h2 className="text-white sm:text-3xl font-bold text-center mb-8" style={{fontSize: '3rem'}}>Our Partners</h2>
        
        {/* Grid of Partners */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 justify-items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="w-[160px] h-[80px] sm:w-[180px] sm:h-[90px] md:w-[232px] md:h-[123px] bg-slate-400 shadow-lg rounded-md flex items-center justify-center hover:border:4 border-cyan-300 hover:border-4 hover:bg-cyan-300 hover:text-emerald-300"
            >
              <img 
                src={partner} 
                alt={`Partner ${index + 1}`} 
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Partners;
  