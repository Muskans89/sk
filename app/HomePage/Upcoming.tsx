"use client";

import { useEffect } from 'react';  // Import useEffect to initialize AOS
import AOS from 'aos';  // Import AOS library
import 'aos/dist/aos.css';  // Import AOS styles
import Image from 'next/image';

export default function Awards() {
    const awardImages = [
        "/images/ws.png",
        "/images/lion.png",
        "/images/giwa.png",
        "/images/emf.png",
        "/images/spotlight.png",
        "/images/emf2.png",
        "/images/emf3.jpg",
        "/images/ws2.jpg",
    ];

    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1000,  // Animation duration
            once: true,      // Whether animation should happen only once
        });
    }, []);

    return (
        <section className="bg-white overflow-hidden">
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Futura:wght@400;700&display=swap');
        
                .futura-font {
                    font-family: 'Futura', sans-serif;
                }
        
                .section-title {
                    font-size: 28px;
                    color: black;
                    text-align: center;
                    margin-bottom: 10px;
                    font-family: 'Futura', sans-serif;
                }
        
                .section-paragraph {
                    font-size: 17px;
                    color: #333;
                    text-align: center;
                    margin: 0 auto 20px;
                    max-width: 800px;
                    line-height: 1.6;
                    font-family: 'Futura', sans-serif;
                    padding: 0 20px;
                }
        
                .awards-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr); /* Desktop view: 4 images per row */
                    gap: 20px;
                    justify-content: center;
                    padding: 20px;
                    max-width: 1000px;
                    margin: 0 auto;
                    padding-left: 40px; /* Move grid slightly to the right */
                }
        
                .award-frame {
                    position: relative;
                    width: 180px;
                    height: 180px;
                }
        
                /* Mobile and tablet responsiveness */
                @media (max-width: 1024px) {
                    .awards-grid {
                        grid-template-columns: repeat(2, 1fr); /* 2 images per row for tablet and mobile */
                        max-width: 100%;
                        gap: 10px;
                        padding-left: 35px; /* Add equal padding on both sides */
                        padding-right: 15px;
                    }
        
                    .award-frame {
                        width: 140px;
                        height: 140px;
                    }
                }
        
                /* Specifically handling mobile view for smaller screens */
                @media (max-width: 480px) {
                    .section-title {
                        font-size: 24px; /* Reduced heading size for very small screens */
                    }
        
                    .award-frame {
                        width: 120px;
                        height: 120px;
                    }
        
                    .awards-grid {
                        grid-template-columns: repeat(2, 1fr); /* Ensure 2 items per row on small screens */
                        gap: 15px;
                        padding-left: 40px; /* Move grid to the right on mobile */
                        padding-right: 15px;
                    }
                }
            `}</style>
        
            <div className="py-10 text-center">
                <h2 className="section-title futura-font" data-aos="fade-up">
                    Our Achievements
                </h2>
                <p className="section-paragraph futura-font" data-aos="fade-up" data-aos-delay="200">
                    We are honored and humbled by the recognition we have received for our work. Each award is a testament to the dedication, passion, and creativity we pour into every event we design.
                    These accolades inspire us to continue pushing boundaries, creating unforgettable moments, and setting new standards in the world of luxury weddings and entertainment.
                </p>
            </div>
        
            <div className="awards-grid">
                {awardImages.map((imageSrc, index) => (
                    <div key={index} className="award-container" data-aos="zoom-in" data-aos-delay={index * 100}>
                        <div className="award-frame">
                            <Image
                                src={imageSrc}
                                alt={`Award Frame ${index + 1}`}
                                width={180}
                                height={180}
                                objectFit="contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
