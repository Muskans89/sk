"use client";

import React from 'react';

const OurJourney: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-black"> {/* Make the section full screen */}
      <div className="absolute inset-0 flex justify-center items-center">
        <iframe
          src="https://www.youtube.com/embed/xtrMNlSN0bw?autoplay=1&loop=1&playlist=xtrMNlSN0bw&controls=0&mute=1" // Add autoplay, loop, mute, and remove controls
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default OurJourney;
