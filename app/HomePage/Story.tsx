"use client";

import { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface StoryDetails {
  text: string;
  images: { src: string, alt: string }[];
}

const details: Record<string, StoryDetails> = {
  'Our Story': {
    text: "An ode to love, we at Sumit Khetan Entertainment take pride in weaving unforgettable tales through the language of visual arts and choreography. Every wedding is a canvas where we paint emotions, joy, and the magic of love. From the smallest details to the grandest gestures, our choreography is designed to bring your story to life, creating moments that will linger in hearts forever. Let us transform your wedding into a breathtaking celebration, where each movement and every frame tells a story of timeless love.",
    images: []
  }
};

const Story: React.FC = () => {
  const [activeSection, setActiveSection] = useState<keyof typeof details>('Our Story');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots: React.ReactNode) => (
      <div style={{ position: 'absolute', bottom: '10px', width: '100%' }}>
        <ul style={{ margin: '0px', display: 'flex', justifyContent: 'center' }}>{dots}</ul>
      </div>
    ),
    dotsClass: "slick-dots slick-thumb"
  };

  return (
    <section className="bg-white text-black pt-16 pb-1 futura-font">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Futura:wght@400;700&display=swap');

        .futura-font {
          font-family: 'Futura', sans-serif;
        }

        .frame {
          padding: 0px;
          margin-top: 10px;
          background-color: white;
          overflow: hidden;
        }

        .text-container {
          width: 100%;
          padding-top: 10px;
          padding-bottom: 0px;
          margin-bottom: 0px;
        }

        .slick-slide {
          display: flex;
          justify-content: center;
        }

        .slick-slide img {
          width: 100%;
          height: auto;
          object-fit: cover;
          border-radius: 0;
        }

        .slick-list {
          padding: 0;
          margin-bottom: 0px; /* Removed margin from the slick list */
          border: none; /* Ensure no borders are applied */
        }

        h2 {
          font-size: 26px;
          margin-bottom: 20px; /* Increased margin for more space after heading */
          color: black;
          font-family: 'Futura', sans-serif;
        }

        p {
          font-size: 17px;
          color: black;
          font-family: 'Futura', sans-serif;
          margin-bottom: 0px;
        }

        @media (max-width: 768px) {
          .text-container {
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 10px;
            padding-bottom: 0px;
          }

          .frame {
            max-width: 100%;
            margin: 0 auto;
          }

          .slick-slide img {
            height: 100vh;
            object-fit: cover;
          }

          h2 {
            font-size: 22px;
            margin-bottom: 20px; /* Increased space on mobile as well */
          }

          p {
            font-size: 15px;
            margin-bottom: 0px;
          }
        }

        @media (min-width: 768px) {
          .frame {
            max-width: 80%;
            margin: 10px auto;
          }

          .text-container {
            max-width: 80%;
            margin: 0 auto;
            padding-top: 10px;
            padding-bottom: 0px;
          }

          .slick-slide img {
            max-height: 600px;
          }
        }
      `}</style>
      <div className="text-container  mx-auto text-center leading-8">
        <h2>An Ode to Love</h2>
        <p>{details[activeSection].text}</p>
      </div>
      <div className="frame mx-auto">
        <Slider {...settings}>
          {/* Since the images array is empty, nothing will be rendered in the slider */}
        </Slider>
      </div>
    </section>
  );
};

export default Story;
