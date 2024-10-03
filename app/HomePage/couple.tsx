"use client";

import Image from "next/image";
import janviAashavImage from "/images/img/03B_AASHAV_JANVI_WEDDING-5919-JAY.jpg";
import janviYazadImage from "/images/img/02_JANVI_YAZAD_SANGEET-3872-SAM.jpg";
import anamikaLakshImage from "/images/img/lakshaamika.png";
import shubhamSumeghaImage from "/images/img/03B_SHUBHAM_SUMEGHA_WEDDING-8740-raju.jpg";

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
                            src={janviAashavImage}
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
                            src={janviYazadImage}
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
                            src={anamikaLakshImage}
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
                            src={shubhamSumeghaImage}
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
