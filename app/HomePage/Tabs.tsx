'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo1 from '../../public/images/logo1.png'; 
import Logo2 from '../../public/images/logo2.png';
import Logo3 from '../../public/images/logo3.png';
import Logo4 from '../../public/images/logo4.png';
import Logo5 from '../../public/images/logo5.png';
import Logo6 from '../../public/images/logo6.png';
import Logo7 from '../../public/images/logo7.png';
import Logo8 from '../../public/images/logo8.png';
import Logo9 from '../../public/images/logo9.jpg';
import Logo10 from '../../public/images/logo10.jpg';
import Logo11 from '../../public/images/logo11.jpg';
import Logo12 from '../../public/images/logo12.png';

const logos = [
  { src: Logo1, alt: 'Reliance' },
  { src: Logo2, alt: 'Adani' },
  { src: Logo3, alt: 'Torrent Pharma' },
  { src: Logo4, alt: 'McDonalds' },
  { src: Logo5, alt: 'Aditya Birla Group' },
  { src: Logo6, alt: 'ENAM' },
  { src: Logo7, alt: 'Essar' },
  { src: Logo8, alt: 'Omaxe' },
  { src: Logo9, alt: 'Sattva' },
  { src: Logo10, alt: 'Vadilal' },
  { src: Logo11, alt: 'Nilkamal' },
  { src: Logo12, alt: 'Rosy Blue' },
];

const Home: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="bg-white py-20 pb-40"> {/* Added pb-40 for extra bottom padding */}
      <style jsx>{`
        .font-futura {
          font-family: 'Futura', sans-serif; 
        }

        .clients-heading {
          font-size: 36px; /* Increased font size */
          color: black;
          text-align: center;
          margin-bottom: 50px; 
        }

        .logo-container {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
        }

        .logo-image {
          height: 100px; /* Adjust to control the size of the logos */
          width: auto;
          margin-bottom: 10px;
        }

        @media (max-width: 768px) {
          .logo-image {
            height: 80px; /* Adjust for smaller screens */
          }
        }

        .grid-container {
          display: grid;
          grid-template-columns: repeat(6, 1fr); /* 6 columns for desktop */
          gap: 20px;
          justify-items: center; /* Center the logos */
        }

        @media (max-width: 768px) {
          .grid-container {
            grid-template-columns: repeat(2, 1fr); /* 2 columns for mobile */
          }
        }
      `}</style>
      <h2 className="clients-heading font-futura">Clients</h2>
      {isClient && (
        <div className="grid-container px-10 sm:px-14">
          {logos.map((logo, index) => (
            <div key={index} className="logo-container">
              <Image src={logo.src} alt={logo.alt} className="logo-image" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
