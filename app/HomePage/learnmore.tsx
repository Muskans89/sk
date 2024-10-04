"use client";

import Image from 'next/image';

const Learn: React.FC = () => {
  return (
    <section className="relative bg-white text-black pb-20">
      {/* Responsive Image */}
      <div className="relative w-full h-[90vh] md:h-screen">
        <picture>
          {/* Mobile Image */}
          <source media="(max-width: 768px)" srcSet="/images/Img/DSC06813.jpg" />

          {/* Desktop Image */}
          <Image 
            src="/images/Img/02B_SHUBHAM_SUMEGHA_SANGEET-8047-raju.jpg" 
            alt="Our Journey Image" 
            layout="fill" 
            objectFit="cover" 
            priority
            className="object-cover"
          />
        </picture>
        
        {/* Text and Button Container */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 futura-font space-y-6 bg-black bg-opacity-10">
          <h2 className="text-4xl md:text-6xl text-white font-bold mb-2">
          
          </h2>
         
        </div>
      </div>

      {/* Mobile-specific styling */}
      <style jsx>{`
        @media (max-width: 768px) {
          .relative > div {
            height: 70vh; /* Set a specific height for mobile view */
          }
          .absolute.inset-0 {
            justify-content: flex-end; /* Align text towards the bottom */
            padding-bottom: 20px;
          }
          .text-4xl {
            font-size: 2rem; /* Adjusted heading size for mobile */
          }
          .text-base {
            font-size: 1rem; /* Adjusted paragraph size for mobile */
          }
        }
      `}</style>
      
      {/* Global font import */}
      <style global jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Futura:wght@400;700&display=swap');

        .futura-font {
          font-family: 'Futura', sans-serif;
        }
      `}</style>
    </section>
  );
};

export default Learn;
