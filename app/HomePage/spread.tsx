'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample banner data
const banners = [
  { src: '/images/Img/03B_AASHAV_JANVI_WEDDING-5866-SAM.jpg', alt: 'Pranay & Mishika' },
  { src: '/images/Img/03B_SHUBHAM_SUMEGHA_WEDDING-8775-NIK.jpg', alt: 'Janvi & Jayad' },
  { src: '/images/Img/02_JANVI_YAZAD_SANGEET-3870-SAM.jpg', alt: 'Disha & Rahul' },
  { src: '/images/Img/DSC06813.jpg', alt: 'Pranay & Mishika' },
];

const BannerSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative bg-white overflow-hidden">
      <Slider {...settings} className="w-full">
        {banners.map((banner, index) => (
          <div key={index} className="w-full h-full">
            <Image
              src={banner.src}
              alt={banner.alt}
              layout="responsive"
              width={1200}
              height={600}
              className="object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSection;
