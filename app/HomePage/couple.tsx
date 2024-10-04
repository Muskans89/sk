"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const TrustedByCouples = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="px-8 py-2 bg-white font-futura">
            <motion.h1
                className="text-3xl text-black text-left mb-10 font-futura"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={fadeIn}
            >
                Trusted by 110+ couples
            </motion.h1>

            {/* Images Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Janvi & Aashav */}
                <motion.div
                    className="space-y-1"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    variants={fadeIn}
                >
                    <div className="relative w-full aspect-square">
                        <Image
                            src="/images/Img/03B_AASHAV_JANVI_WEDDING-5919-JAY.jpg"
                            alt="Janvi & Aashav"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <p className="text-black text-lg futura-font">Janvi & Aashav</p>
                    <p className="italic text-gray-500 text-sm futura-font">#LoveInEveryBreath</p>
                </motion.div>

                {/* Janvi & Yazad */}
                <motion.div
                    className="space-y-1"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    variants={fadeIn}
                >
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
                </motion.div>

                {/* Anamika & Laksh */}
                <motion.div
                    className="space-y-1"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    variants={fadeIn}
                >
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
                </motion.div>

                {/* Shubham & Sumegha */}
                <motion.div
                    className="space-y-1"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    variants={fadeIn}
                >
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
                </motion.div>
            </div>
        </div>
    );
};

export default TrustedByCouples;
