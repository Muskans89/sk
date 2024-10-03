"use client";

import Image from "next/image";

const TrustedByCouples = () => {
    return (
        <div className="px-8 py-2 bg-white font-futura">
            <h1 className="text-3xl text-black text-left mb-10 font-futura">Trusted by 110+ couples</h1>
            
            {/* Images Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Janvi & Aashav */}
                <div className="space-y-1">
                    <div className="relative w-full h-[400px]">
                        <Image
                            src="/images/img/03B_AASHAV_JANVI_WEDDING-5919-JAY.jpg" // Replace with actual image path
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
                    <div className="relative w-full h-[400px]">
                        <Image
                            src="/images/img/02_JANVI_YAZAD_SANGEET-3872-SAM.jpg" // Replace with actual image path
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
                    <div className="relative w-full h-[400px]">
                        <Image
                            src="/images/img/lakshaamika.png" // Replace with actual image path
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
                    <div className="relative w-full h-[400px]">
                        <Image
                            src="/images/img/03B_SHUBHAM_SUMEGHA_WEDDING-8740-raju.jpg" // Replace with actual image path
                            alt="Shubham & Sumegha"
                            layout="fill"
                            objectFit="cover"
                            
                        />
                    </div>
                    <p className="text-black text-lg futura-font">Shubham & Sumegha</p>
                    <p className="italic text-gray-500 text-sm futura-font">#SushMeKnot</p>
                </div>
            </div>
        </div>
    );
};

export default TrustedByCouples;
