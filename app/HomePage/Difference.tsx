import React from 'react';
import Image from 'next/image';

const EventDesign = () => {
  return (
    <div className="bg-gray-100 py-10">
      {/* Outer frame with background and border */}
      <div className="bg-white max-w-6xl mx-auto p-6 md:p-10 border border-gray-300 shadow-lg">

        {/* Top Section - Logo on the left, Heading on the right */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          {/* Left section - Logo */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0 flex justify-center md:justify-start">
            <Image
              src="/images/guinness.png" // Replace with your actual logo path
              alt="Logo"
              width={100}
              height={50}
              className="object-contain"
            />
          </div>

          {/* Right section - Heading */}
          <div className="w-full md:w-3/4 text-center md:text-right">
            <h1 className="text-3xl md:text-4xl font-bold text-black futura-font ">The Grand Chronicles</h1>
            <h2 className="text-lg md:text-xl italic futura-font text-black">Crafting Unforgettable Experiences with Sumit Khetan & Co.</h2>
            <p className="text-sm futura-font md:text-md text-black">October 2024</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/OIP.jpg" // Replace with your actual image path
            alt="Event"
            width={700}
            height={400}
            className="object-contain w-full"
          />
        </div>

        {/* Content Section */}
        <div className="text-center p-4 md:p-6">
          <p className="text-lg leading-relaxed text-black futura-font">
            Sumit Khetan Entertainment & Co. proudly orchestrated a once-in-a-lifetime wedding event, where 551 girls tied the knot in Bhavnagar, graced by the presence of our Hon&apos;ble Prime Minister, Mr. Narendra Modi. It was a moment of celebration, hope, and unity, as we helped bring joy and new beginnings to families who had faced tremendous loss. The event was meticulously choreographed to perfection, creating an experience that will be cherished for generations to come.
          </p>

          {/* Read More Button Below Paragraph */}
          <a
            href="https://timesofindia.indiatimes.com/city/ahmedabad/pm-narendra-modi-attends-mass-wedding-event-in-gujarat/articleshow/95341212.cms#:~:text=BHAVNAGAR:%20Prime%20Minister%20Narendra%20Modi"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block futura-font underline text-black hover:gray-500"
          >
            Read More
          </a>
        </div>

        {/* Footer Section */}
        <div className="mt-8 border-t border-gray-300 pt-6 text-center relative">
          <p className="futura-font text-gray-500 text-sm">
            © 2024 Sumit Khetan Entertainment & Co. | All Rights Reserved.
          </p>
        </div>

      </div>
    </div>
  );
};

export default EventDesign;
