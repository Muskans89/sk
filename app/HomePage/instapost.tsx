"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const imageItems = [
  { src: '/images/Img/02_JANVI_YAZAD_SANGEET-3997-NIK.jpg', alt: 'Bride in dress', link: 'https://www.instagram.com/p/Czgeo5oNE8w/' },
  { src: '/images/Img/02B_SHUBHAM_SUMEGHA_SANGEET-2788-JAY.jpg', alt: 'Happy couple', link: 'https://www.instagram.com/p/CD3RqC2p9Dl/' },
  { src: '/images/Img/PRA06259.jpg', alt: 'Wedding ceremony', link: 'https://www.instagram.com/p/CS8ir_uDDQC/' },
  { src: '/images/Img/03B_SHUBHAM_SUMEGHA_WEDDING-3527-JAY.jpg', alt: 'Wedding dance', link: 'https://www.instagram.com/p/CS8ifUZjKaa/' },
  { src: '/images/Img/02B_SHUBHAM_SUMEGHA_SANGEET-6407-JAY.jpg', alt: 'Bridal makeup', link: 'https://www.instagram.com/p/CCGUxYGJ23S/' },
  { src: '/images/Img/02B_AASHAV_JANVI_SANGEET-1110-JAY.jpg', alt: 'Reception', link: 'https://www.instagram.com/p/CDO1NsWp7Lt/' },
  { src: '/images/Img/02B_AASHAV_JANVI_SANGEET-1568-PRA.jpg', alt: 'Bride in dress', link: 'https://www.instagram.com/p/Czgeo5oNE8w/' },
  { src: '/images/Img/PRA05686.jpg', alt: 'Bride in dress', link: 'https://www.instagram.com/p/Czgeo5oNE8w/' },
  { src: '/images/Img/03B_AASHAV_JANVI_WEDDING-5866-SAM.jpg', alt: 'Bride in dress', link: 'https://www.instagram.com/p/Czgeo5oNE8w/' }
];

const Insta: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="py-20 bg-white">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Futura:wght@400;700&display=swap');

        .futura-font {
          font-family: 'Futura', sans-serif;
          color: #000000;
          text-align: center;
          margin-bottom: 40px;
          font-size: 36px;
        }

        .image-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          padding: 20px;
        }

        @media (max-width: 1024px) {
          .image-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .image-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }
        }

        @media (max-width: 480px) {
          .image-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
        }

        .image-container {
          width: 100%;
          height: 300px;
          overflow: hidden;
          cursor: pointer;
          background: none;
          padding: 0;
        }

        @media (max-width: 768px) {
          .image-container {
            height: 180px;
          }
        }

        .image-item {
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .image-container:hover .image-item {
          transform: scale(1.05);
        }
      `}</style>
      
      <h2 className="futura-font" data-aos="fade-up">Join Our Community</h2>
      <div className="relative py-0 px-2 sm:px-4">
        {isClient && (
          <div className="image-grid">
            {imageItems.map((item, index) => (
              <div key={index} className="image-container" data-aos="zoom-in">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <div className="relative w-full h-full">
                    <Image 
                      src={item.src} 
                      alt={item.alt} 
                      layout="fill" 
                      objectFit="cover" 
                      className="image-item"
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Insta;
