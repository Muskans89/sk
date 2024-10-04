"use client";

import Image from "next/image";

const TrustedByCouples = () => {
    return (
        <div className="px-8 py-2 bg-white font-futura">
            <h1 className="text-3xl text-black text-left mb-10 font-futura">
                Trusted by 110+ couples
            </h1>

            {/* Images Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Janvi & Aashav */}
                <div className="space-y-1">
                    <div className="relative w-full aspect-square"> {/* aspect-square for equal width and height */}
                        <Image
                            src="/images/Img/03B_AASHAV_JANVI_WEDDING-5919-JAY.jpg"
                            alt="Janvi & Aashav"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <p className="text-black text-lg futura-font">Janvi & Aashav</p>
                    <p className="italic text-gray-500 text-sm futura-font">#LoveInEveryBreath</p>
                </div>

                {/* Janvi & Yazad */}
                <div className="space-y-1">
                    <div className="relative w-full aspect-square">
                        <Image
                            src="/images/Img/02_JANVI_YAZAD_SANGEET-3872-SAM.jpg"
                            alt="Janvi & Yazad"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <p className="text-black text-lg futura-font">Janvi & Yazad</p>
                    <p className="italic text-gray-500 text-sm futura-font">#TheBollywoodBonanza</p>
                </div>

                {/* Anamika & Laksh */}
                <div className="space-y-1">
                    <div className="relative w-full aspect-square">
                        <Image
                            src="/images/Img/lakshaamika.png"
                            alt="Anamika & Laksh"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <p className="text-black text-lg futura-font">Anamika & Laksh</p>
                    <p className="italic text-gray-500 text-sm futura-font">#LakAn</p>
                </div>

                {/* Shubham & Sumegha */}
                <div className="space-y-1">
                    <div className="relative w-full aspect-square">
                        <Image
                            src="/images/Img/03B_SHUBHAM_SUMEGHA_WEDDING-8740-raju.jpg"
                            alt="Shubham & Sumegha"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <p className="text-black text-lg futura-font">Shubham & Sumegha</p>
                    <p className="italic text-gray-500 text-sm futura-font">#SushMeKnot</p>
                </div>
            </div>

            <style jsx>{`
                .aspect-square {
                    position: relative;
                    width: 100%;
                    padding-bottom: 100%; /* This creates the square aspect ratio */
                }

                @media (max-width: 640px) {
                    /* Adjust grid to display 2 columns in mobile view */
                    .grid {
                        grid-template-columns: repeat(2, 1fr); /* 2 columns in mobile view */
                    }
                }
            `}</style>
        </div>
    );
};

export default TrustedByCouples;
