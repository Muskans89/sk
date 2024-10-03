'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const BollywoodTestimonials = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const isUserScrolling = useRef<boolean>(false); // Track if user is scrolling

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        
        if (scrollContainer) {
            const scrollSpeed = 6; // Increased increment for faster scrolling
            let scrollAmount = 0;
            let scrollInterval: NodeJS.Timeout;

            const scrollStep = () => {
                if (!isUserScrolling.current) { // Only auto-scroll if user is not manually scrolling
                    scrollAmount += scrollSpeed;
                    scrollContainer.scrollLeft = scrollAmount;

                    // Reset scroll amount to 0 when reaching the end
                    if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                        scrollAmount = 0;
                    }
                }
            };

            // Start auto-scroll with a shorter interval for faster scrolling
            scrollInterval = setInterval(scrollStep, 10); // Adjust the interval for smoothness

            // Function to pause auto-scroll on user interaction
            const handleUserScroll = () => {
                isUserScrolling.current = true;
                clearTimeout(autoScrollTimeout); // Clear previous timeout

                // Set auto-scroll to resume after user stops scrolling for a short period
                autoScrollTimeout = setTimeout(() => {
                    isUserScrolling.current = false;
                }, 1000); // Adjust the delay as needed
            };

            // Timeout to resume auto-scroll
            let autoScrollTimeout: NodeJS.Timeout;

            // Add event listeners for user scrolling
            scrollContainer.addEventListener('scroll', handleUserScroll);

            // Clean up event listeners and intervals on component unmount
            return () => {
                clearInterval(scrollInterval);
                clearTimeout(autoScrollTimeout);
                scrollContainer.removeEventListener('scroll', handleUserScroll);
            };
        }
    }, []);

    return (
        <div className="px-6 py-12 bg-white">
            <div className="mb-12">
                <h1 className="text-3xl text-left text-black">
                    <span className="font-bold">With love,</span> 
                    <span className="italic"> Bollywood</span>
                </h1>
            </div>

            {/* Horizontal Scrollable Testimonials */}
            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto space-x-8 pb-4 scrollbar-hide"
                style={{ scrollBehavior: 'smooth' }}
            >
                {/* Salman Khan's Testimonial */}
                <div className="min-w-[100%] md:min-w-[50%] lg:min-w-[30%] max-w-[100%] md:max-w-[50%] lg:max-w-[30%] space-y-4 flex-shrink-0 text-left">
                    <Image 
                        src="/images/salman-khan.jpg" 
                        alt="Salman Khan" 
                        width={300}
                        height={300}
                        className="w-full h-72 object-top object-cover mx-auto"
                    />
                    <p className="futura-font text-black">
                        &quot;We had a great time working with Salman. He was easy to work with, always positive, and brought great energy to the team. He stayed on top of things and made sure everything went smoothly.&quot;
                    </p>
                    <p className="futura-font font-bold text-black">Salman Khan</p>
                </div>

                {/* Ayushmann Khurana's Testimonial */}
                <div className="min-w-[100%] md:min-w-[50%] lg:min-w-[30%] max-w-[100%] md:max-w-[50%] lg:max-w-[30%] space-y-4 flex-shrink-0 text-left">
                    <p className="futura-font text-black">
                        &quot;I feel Sumit is one of the ace choreographers in the country. I have worked with him a couple of times. It is sweet of him to make me very comfortable. It is a mark of a great choreographer when he adapts to the style of the actor and makes him very comfortable. I wish him all the best, he has a long way to go.&quot;
                    </p>
                    <p className="font-bold text-black futura-font">Ayushmann Khurana</p>
                    <Image 
                        src="/images/Ayushmann-Khurrana-05.webp" 
                        alt="Ayushmann Khurana" 
                        width={300}
                        height={300}
                        className="w-full h-72 object-top object-cover mx-auto"
                    />
                </div>

                {/* Shahid Kapoor's Testimonial */}
                <div className="min-w-[100%] md:min-w-[50%] lg:min-w-[30%] max-w-[100%] md:max-w-[50%] lg:max-w-[30%] space-y-4 flex-shrink-0 text-left">
                    <Image 
                        src="/images/shahid-kapoor.jpeg" 
                        alt="Shahid Kapoor" 
                        width={300}
                        height={300}
                        className="w-full h-72 object-top object-cover mx-auto"
                    />
                    <p className="futura-font text-black">
                        &quot;It feels great to work with someone when we know that we both have been trained from the same school. It was very nice working with Sumit. He has a knack of making you feel completely comfortable, while ensuring that you look your best in performance.&quot;
                    </p>
                    <p className="futura-font font-bold text-black">Shahid Kapoor</p>
                </div>

                {/* Sonu Sood's Testimonial */}
                <div className="min-w-[100%] md:min-w-[50%] lg:min-w-[30%] max-w-[100%] md:max-w-[50%] lg:max-w-[30%] space-y-4 flex-shrink-0 text-left">
                    <p className="futura-font text-black">
                        &quot;It was a great experience to work with Sumit, I would say everything was 10/10 whether you talk about sets, choreography, performances, anything. Wanna wish you all the best in whatever you do. Keep entertaining us, looking forward to working again.&quot;
                    </p>
                    <p className="futura-font font-bold text-black">Sonu Sood</p>
                    <Image 
                        src="/images/sonu-sood1.png" 
                        alt="Sonu Sood" 
                        width={300}
                        height={300}
                        className="w-full h-72 object-top object-cover mx-auto"
                    />
                </div>

                {/* Sunny Leone's Testimonial */}
                <div className="min-w-[100%] md:min-w-[50%] lg:min-w-[30%] max-w-[100%] md:max-w-[50%] lg:max-w-[30%] space-y-4 flex-shrink-0 text-left">
                    <Image 
                        src="/images/sunny-leone.webp" 
                        alt="Sunny Leone" 
                        width={300}
                        height={300}
                        className="w-full h-72 object-top object-cover mx-auto"
                    />
                    <p className="futura-font text-black">
                        &quot;It is a great deal of fun working with Sumit. I have worked with many people but there is something unique about his work. Looking forward to many more dance collaborations with the talented Sumit!&quot;
                    </p>
                    <p className="futura-font font-bold text-black">Sunny Leone</p>
                </div>

                <div className="min-w-[100%] md:min-w-[50%] lg:min-w-[30%] max-w-[100%] md:max-w-[50%] lg:max-w-[30%] space-y-4 flex-shrink-0 text-left">
                    <p className="futura-font text-black">
I am so happy and thrilled to collaborate with Sumit. The journey was comfortable. I hope we get to work more together.
                    </p>
                    <p className="futura-font font-bold text-black"> Vani Kapoor </p>
                    <Image 
                        src="/images/vani.jpeg" 
                        alt="Shoaib Ibrahim" 
                        width={300}
                        height={300}
                        className="w-full h-72 object-top object-cover mx-auto"
                    />
                </div>

                {/* Sargun Mehta's Testimonial */}
                <div className="min-w-[100%] md:min-w-[50%] lg:min-w-[30%] max-w-[100%] md:max-w-[50%] lg:max-w-[30%] space-y-4 flex-shrink-0 text-left">
                    <Image 
                        src="/images/sargun-mehta.png" 
                        alt="Sargun Mehta" 
                        width={300}
                        height={300}
                        className="w-full h-72 object-top object-cover mx-auto"
                    />
                    <p className="futura-font text-black">
                        &quot;Sumit did an excellent job. If one enjoys dancing, it’s usually due to the choreographer. He has done a fabulous job at that.&quot;
                    </p>
                    <p className="futura-font font-bold text-black">Sargun Mehta</p>
                </div>
            </div>
        </div>
    );
};

export default BollywoodTestimonials;
