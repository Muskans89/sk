'use client';

import { useState } from 'react';
import Image from 'next/image';

type SectionProps = {
  title: string;
  imgSrc: string;
  videoLink: string;
  location: string;
};

const Section: React.FC<SectionProps> = ({ title, imgSrc, videoLink, location }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => setIsPlaying(true);
  const handleCloseVideo = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); // Prevents click event propagation to the parent
    setIsPlaying(false);
  };

  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-4 sm:p-6">
      <div
        className="relative pb-[56.25%] sm:pb-[75%] shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        onClick={handleClick}
      >
        {/* Display Image when video is not playing */}
        {!isPlaying ? (
          <Image
            src={imgSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4 sm:p-8">
            <div className="relative w-full h-full sm:h-3/4 sm:max-w-4xl">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={videoLink}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
              {/* Close button */}
              <button
                className="absolute top-2 right-2 z-10 bg-white text-black px-4 py-2 sm:px-2 sm:py-1 text-sm"
                onClick={handleCloseVideo}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <h3 className="text-lg mt-4 text-black uppercase tracking-wide text-center">
        {title}
        <span className="text-gray-700 normal-case"> - {location}</span>
      </h3>
    </div>
  );
};

export default function OurHomes() {
  const [activeSection, setActiveSection] = useState<string | null>('Sangeet');

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <main className="overflow-hidden bg-white futura-font">
      <style jsx global>{`
        @font-face {
          font-family: "Futura";
          src: url("/fonts/Futura.woff2") format("woff2"),
            url("/fonts/Futura.woff") format("woff");
          font-weight: normal;
          font-style: normal;
        }

        .futura-font {
          font-family: "Futura", sans-serif;
        }
      `}</style>

      {/* Banner Section */}
      <div className="relative h-64 sm:h-screen">
        <Image
          src="/images/Img/02B_SHUBHAM_SUMEGHA_SANGEET-4898-raju.jpg"
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full"
        />
      </div>

      {/* Navigation Bar Section */}
      <div
  className="flex flex-wrap justify-center items-center shadow-md"
  style={{ backgroundColor: "#EEE1C6" }} // Using inline styles for custom background color
>
  
        {['Sangeet', 'Jaimala', 'Haldi', 'Engagement'].map((event, index) => (
          <div
            key={index}
            className={`flex-1 flex justify-between items-center px-4 sm:px-8 py-2 sm:py-4 cursor-pointer 
                        transition duration-300 text-center
                        ${activeSection === event ? 'bg-[#your-beige-color-code] text-black' : 'bg-white text-gray-700'}`}
            onClick={() => toggleSection(event)}
          >
            <span className="text-md sm:text-lg font-medium">{event}</span>
            <span className="text-gray-600 hidden sm:block">
              {activeSection === event ? '▲' : '▼'}
            </span>
          </div>
        ))}
      </div>

      {/* Event Sections */}
      {activeSection && (
        <div className="py-8 sm:py-16 px-4 sm:px-8 bg-[#your-beige-color-code]">
          <h2 className="text-2xl sm:text-3xl text-center mb-8 sm:mb-12 text-black futura-font">{activeSection}</h2>
          <div className="flex flex-wrap -mx-4 sm:-mx-6">
            {/* Event Content for Sangeet */}
            {activeSection === 'Sangeet' && (
              <>
                <Section
                  title="Shubham & Sumegha"
                  imgSrc="/images/Img/02B_SHUBHAM_SUMEGHA_SANGEET-2950-JAY.jpg"
                  location="Raffels Udaipur"
                  videoLink="https://www.youtube.com/embed/JRT0zSUNNNU?autoplay=1&loop=1&mute=1&playlist=JRT0zSUNNNU&controls=0&rel=0"
                />
                <Section
                  title="Laksh & Anamika"
                  imgSrc="/images/laksh.jpg"
                  location="JW Marriott- Bangalore"
                  videoLink="https://www.youtube.com/embed/JRT0zSUNNNU?autoplay=1&loop=1&mute=1&playlist=JRT0zSUNNNU&controls=0&rel=0"
                />
                <Section
                  title="Yazad & Janvi"
                  imgSrc="/images/Img/02_JANVI_YAZAD_SANGEET-3872-SAM.jpg"
                  location="Ramayan Farms - Surat"
                  videoLink="https://www.youtube.com/embed/JRT0zSUNNNU?autoplay=1&loop=1&mute=1&playlist=JRT0zSUNNNU&controls=0&rel=0"
                />
                <Section
                  title="Utsav & Maithli"
                  imgSrc="/images/4.png"
                  location="Jio World Mumbai"
                  videoLink="https://www.youtube.com/embed/JRT0zSUNNNU?autoplay=1&loop=1&mute=1&playlist=JRT0zSUNNNU&controls=0&rel=0"
                />
                <Section
                  title="Aashav & Janvi"
                  imgSrc="/images/Img/PRA06649.jpg"
                  location="Queens Lawn - Borivali"
                  videoLink="https://www.youtube.com/embed/JRT0zSUNNNU?autoplay=1&loop=1&mute=1&playlist=JRT0zSUNNNU&controls=0&rel=0"
                />
              </>
            )}

            {/* Similar Structure for other events */}
            {activeSection === 'Jaimala' && (
              <><Section
              title="Shubham & Sumegha"
              imgSrc="/images/Img/03B_SHUBHAM_SUMEGHA_WEDDING-8740-raju.jpg"
              location=" Raffels Udaipur"
              videoLink="https://www.youtube.com/embed/JRT0zSUNNNU?autoplay=1&loop=1&mute=1&playlist=JRT0zSUNNNU&controls=0&rel=0"
            />
            <Section
              title="Laksh & Anamika"
              imgSrc="/images/laksh.jpg"
              location="JW Marriott- Banglore 
"
              videoLink="https://www.youtube.com/embed/JRT0zSUNNNU?autoplay=1&loop=1&mute=1&playlist=JRT0zSUNNNU&controls=0&rel=0"
            />
            <Section
              title="Yazad & Janvi"
              imgSrc="/images/Img/SBP50903.jpg"
              location="Ramayan Farms - Surat 
"
              videoLink="https://www.youtube.com/embed/JRT0zSUNNNU?autoplay=1&loop=1&mute=1&playlist=JRT0zSUNNNU&controls=0&rel=0"
            />
            <Section
              title="Utsav & Maithli"
              imgSrc="/images/4.png"
              location=" Jio World Mumbai 
"
              videoLink="https://www.youtube.com/embed/JRT0zSUNNNU?autoplay=1&loop=1&mute=1&playlist=JRT0zSUNNNU&controls=0&rel=0"
            />
            <Section
              title="Aashav & Janvi"
              imgSrc="/images/Img/03B_AASHAV_JANVI_WEDDING-5919-JAY.jpg"
              location="Queens Lawn - Borivali 
"
              videoLink="https://www.youtube.com/embed/JRT0zSUNNNU?autoplay=1&loop=1&mute=1&playlist=JRT0zSUNNNU&controls=0&rel=0"
            />
                {/* Add the Section components for Jaimala here */}
              </>
            )}
            {activeSection === 'Haldi' && (
              <><Section
              title="Shubham & Sumegha"
              imgSrc="/images/Img/03A_SHUBHAM_SUMEGHA_HALDI-1716-raju.jpg"
              location=" Raffels Udaipur"
              videoLink="https://www.youtube.com/embed/JRT0zSUNNNU?autoplay=1&loop=1&mute=1&playlist=JRT0zSUNNNU&controls=0&rel=0"
            />
            <Section
              title="Laksh & Anamika"
              imgSrc="/images/laksh.jpg"
              location="JW Marriott- Banglore 
"
              videoLink="https://www.youtube.com/embed/JRT0zSUNNNU?autoplay=1&loop=1&mute=1&playlist=JRT0zSUNNNU&controls=0&rel=0"
            />
            <Section
              title="Yazad & Janvi"
              imgSrc="/images/Img/06_JANVI_YAZAD_HALDI-4310-PRABHU1.jpg"
              location="Ramayan Farms - Surat 
"
              videoLink="https://www.youtube.com/embed/JRT0zSUNNNU?autoplay=1&loop=1&mute=1&playlist=JRT0zSUNNNU&controls=0&rel=0"
            />
            <Section
              title="Utsav & Maithli"
              imgSrc="/images/4.png"
              location=" Jio World Mumbai 
"
              videoLink="https://www.youtube.com/embed/JRT0zSUNNNU?autoplay=1&loop=1&mute=1&playlist=JRT0zSUNNNU&controls=0&rel=0"
            />
            <Section
              title="Aashav & Janvi"
              imgSrc="/images/Img/02A_AASHAV_JANVI_HALDI_MEHENDI-6071-JAY.jpg"
              location="Queens Lawn - Borivali 
"
              videoLink="https://www.youtube.com/embed/JRT0zSUNNNU?autoplay=1&loop=1&mute=1&playlist=JRT0zSUNNNU&controls=0&rel=0"
            />
                {/* Add the Section components for Haldi here */}
              </>
            )}
            {activeSection === 'Engagement' && (
              <><Section
              title="Shubham & Sumegha"
              imgSrc="/images/Img/DSC07175.jpg"
              location=" Raffels Udaipur"
              videoLink="https://www.youtube.com/embed/JRT0zSUNNNU?autoplay=1&loop=1&mute=1&playlist=JRT0zSUNNNU&controls=0&rel=0"
            />
            <Section
              title="Laksh & Anamika"
              imgSrc="/images/laksh.jpg"
              location="JW Marriott- Banglore 
"
              videoLink="https://www.youtube.com/embed/JRT0zSUNNNU?autoplay=1&loop=1&mute=1&playlist=JRT0zSUNNNU&controls=0&rel=0"
            />
            <Section
              title="Yazad & Janvi"
              imgSrc="/images/Img/JAY00070.jpg"
              location="Ramayan Farms - Surat 
"
              videoLink="https://www.youtube.com/embed/JRT0zSUNNNU?autoplay=1&loop=1&mute=1&playlist=JRT0zSUNNNU&controls=0&rel=0"
            />
            <Section
              title="Utsav & Maithli"
              imgSrc="/images/4.png"
              location=" Jio World Mumbai 
"
              videoLink="https://www.youtube.com/embed/JRT0zSUNNNU?autoplay=1&loop=1&mute=1&playlist=JRT0zSUNNNU&controls=0&rel=0"
            />
            <Section
              title="Aashav & Janvi"
              imgSrc="/images/Img/RNF_AASHAV_JANVI_ENGAGEMENT-5201-JAY.jpg"
              location="Queens Lawn - Borivali 
"
              videoLink="https://www.youtube.com/embed/JRT0zSUNNNU?autoplay=1&loop=1&mute=1&playlist=JRT0zSUNNNU&controls=0&rel=0"
            />
                {/* Add the Section components for Engagement here */}
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
