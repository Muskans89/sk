'use client';

import { useRef } from 'react';
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
    ];

    // Ref for the scrollable container, explicitly typed as HTMLDivElement
    const scrollRef = useRef<HTMLDivElement>(null);

    // Function to scroll left or right
    const scroll = (direction: 'left' | 'right') => {
        const { current } = scrollRef;
    
        if (current) {
            if (direction === 'left') {
                current.scrollBy({ left: -200, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: 200, behavior: 'smooth' });
            }
        }
    };

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
                    margin-bottom: 10px; /* Moved the logo/title up by reducing margin */
                    font-family: 'Futura', sans-serif;
                }

                .section-paragraph {
                    font-size: 17px;
                    color: #333;
                    text-align: center;
                    margin: 0 auto 20px; /* Reduced space after the paragraph */
                    max-width: 800px;
                    line-height: 1.6;
                    font-family: 'Futura', sans-serif;
                    padding: 0 20px; /* Added padding for smaller screens */
                }

                .awards-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr); /* Desktop view: 4 images per row */
                    column-gap: 10px; /* Reduced gap between images */
                    row-gap: 10px;  /* Reduced gap between rows */
                    justify-content: center;
                    padding: 0;
                    max-width: 1000px;
                    margin: 0 auto;
                }

                .second-row {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr); /* Desktop view: 3 images in the second row */
                    column-gap: 20px; /* Reduced gap for cleaner layout */
                    justify-content: center;
                    padding-top: 10px; /* Reduced padding between first and second rows */
                    max-width: 600px;
                    margin: 0 auto;
                    padding-bottom: 20px;
                }

                .award-frame {
                    position: relative;
                    width: 180px; /* Consistent size for desktop */
                    height: 180px;
                }

                /* Scroll container for mobile view */
                .scroll-container {
                    display: none; /* Hidden on desktop */
                }

                /* Scroll arrow styles */
                .scroll-arrow {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: rgba(0, 0, 0, 0.3); /* Minimal background */
                    color: white;
                    border: none;
                    cursor: pointer;
                    font-size: 24px;
                    padding: 5px;
                    z-index: 1;
                    transition: background 0.3s;
                }

                .scroll-arrow:hover {
                    background: rgba(0, 0, 0, 0.5); /* Slight hover effect */
                }

                .scroll-arrow-left {
                    left: 0;
                }

                .scroll-arrow-right {
                    right: 0;
                }

                /* Mobile view: all awards in 1 row with scroll arrows */
                @media (max-width: 768px) {
                    .awards-grid, .second-row {
                        display: none; /* Hide desktop layout in mobile view */
                    }

                    .scroll-container {
                        display: flex;
                        position: relative;
                        overflow-x: hidden; /* Hide scrollbar */
                        -webkit-overflow-scrolling: touch; /* Smooth scrolling for touch devices */
                        padding: 10px 0; /* Reduced padding for a cleaner look */
                        gap: 10px;
                    }

                    .scroll-content {
                        display: flex;
                        gap: 10px;
                        overflow-x: scroll; /* Allow horizontal scrolling */
                        scrollbar-width: none; /* Hide scrollbar for Firefox */
                    }

                    .scroll-content::-webkit-scrollbar {
                        display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
                    }

                    .award-frame {
                        width: 140px; /* Slightly smaller images for mobile */
                        height: 140px;
                    }
                }

                /* For very small mobile devices */
                @media (max-width: 480px) {
                    .section-title {
                        font-size: 24px; /* Reduced heading size for very small screens */
                    }

                    .award-frame {
                        width: 120px; /* Smaller images for very small screens */
                        height: 120px;
                    }

                    .scroll-arrow {
                        font-size: 20px; /* Smaller arrow size for small screens */
                        padding: 3px;
                    }
                }
            `}</style>

            {/* New Section: Our Achievements */}
            <div className="py-10 text-center">
                <h2 className="section-title futura-font">Our Achievements</h2>
                <p className="section-paragraph futura-font">
                    We are honored and humbled by the recognition we have received for our work. Each award is a testament to the dedication, passion, and creativity we pour into every event we design.
                   
                    These accolades inspire us to continue pushing boundaries, creating unforgettable moments, and setting new standards in the world of luxury weddings and entertainment.
                </p>
            </div>

            {/* Desktop view */}
            <div className="awards-grid">
                {awardImages.slice(0, 4).map((imageSrc, index) => (
                    <div key={index} className="award-container">
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

            <div className="second-row">
                {awardImages.slice(4).map((imageSrc, index) => (
                    <div key={index + 4} className="award-container">
                        <div className="award-frame">
                            <Image
                                src={imageSrc}
                                alt={`Award Frame ${index + 5}`}
                                width={180}
                                height={180}
                                objectFit="contain"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile view with scroll arrows */}
            <div className="scroll-container">
                <button className="scroll-arrow scroll-arrow-left" onClick={() => scroll('left')}>
                    ‹
                </button>
                <div className="scroll-content" ref={scrollRef}>
                    {awardImages.map((imageSrc, index) => (
                        <div key={index} className="award-container">
                            <div className="award-frame">
                                <Image
                                    src={imageSrc}
                                    alt={`Award Frame ${index + 1}`}
                                    width={140}
                                    height={140}
                                    objectFit="contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <button className="scroll-arrow scroll-arrow-right" onClick={() => scroll('right')}>
                    ›
                </button>
            </div>
        </section>
    );
}
