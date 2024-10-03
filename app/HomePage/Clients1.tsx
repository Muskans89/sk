"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const photos = [
  {
    src: "/images/Img/01_JANVI_YAZAD_KANKOTRI1654-NIK.jpg",
    alt: "Shloka & Akash",
  },
  {
    src: "/images/Img/RAJ06494.jpg",
    alt: "Sonam & Anand",
  },
  {
    src: "/images/Img/SAM09581.jpg",
    alt: "PRANAY & MISHIKA",
  },
];

// Custom arrow components
const SampleNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-black`}
      style={{ ...style, display: "block", right: 10, fontSize: "30px", zIndex: 1 }}
      onClick={onClick}
    >
      &#9654;
    </div>
  );
};

const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-black`}
      style={{ ...style, display: "block", left: 10, fontSize: "30px", zIndex: 1 }}
      onClick={onClick}
    >
      &#9664;
    </div>
  );
};

const PhotoGrid: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <section className="bg-white text-black py-20">
      <h2 className="text-center text-2xl md:text-3xl mb-12">TRUSTED BY</h2>
      <div className="max-w-screen-xl mx-auto px-4">
        <Slider {...settings}>
          {photos.map((photo, index) => (
            <div key={index} className="px-4">
              <div className="relative w-full h-96 shadow-lg">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  layout="fill"
                  objectFit="cover"
                  
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PhotoGrid;
