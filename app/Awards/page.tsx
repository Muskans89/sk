"use client";

import Image, { StaticImageData } from 'next/image'; 
import Upcoming from '../HomePage/Upcoming';
type SectionProps = {
  title: string;
  imgSrc: StaticImageData;
  videoLink: string;
};

const Section: React.FC<SectionProps> = ({ title, imgSrc, videoLink }) => {

  const handleImageClick = () => {
    window.open(videoLink, '_blank');
  };

  return (
    <div className="p-4"> {/* Adjusted padding for the grid items */}
      <div className="relative h-64 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <Image 
          src={imgSrc} 
          alt={title} 
          layout="fill" 
          objectFit="contain"
          className="absolute inset-0 w-full h-full cursor-pointer"
          onClick={handleImageClick}
        />
      </div>
      <h3 className="text-lg font-normal mt-4 text-black text-center" style={{ fontFamily: 'Futura, sans-serif' }}>
        {title}
      </h3>
    </div>
  );
};

import bannerImg from '/public/images/Img/03B_SHUBHAM_SUMEGHA_WEDDING-8775-NIK.jpg'; // Replace with actual banner image path


export default function OurHomes() {
  return (
    <main className="overflow-hidden bg-white futura-font">
      <style jsx global>{`
        @font-face {
          font-family: 'Futura';
          src: url('/fonts/Futura.woff2') format('woff2'),
               url('/fonts/Futura.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }

        .futura-font {
          font-family: 'Futura', sans-serif;
        }
      `}</style>

      {/* Banner Section */}
      <div className='relative h-screen'>
        <Image src={bannerImg} alt="Banner Image" layout="fill" objectFit="cover" />
      </div>
<Upcoming/>
      
     
     
    </main>
  );
}
