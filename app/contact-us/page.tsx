"use client";

import { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import Image from "next/image";

export default function Contact() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="overflow-hidden bg-white font-futura">
      {/* Import Futura Font */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Futura:wght@400;700&display=swap");

        .font-futura {
          font-family: "Futura", sans-serif;
        }
      `}</style>

      {/* Banner Section */}
      <div className="relative h-screen w-screen">
        <Image
          src="/images/Img/02B_SHUBHAM_SUMEGHA_SANGEET-7801-NIK.jpg" // Update with your actual banner image path
          alt="Contact Banner"
          layout="fill"
          objectFit="cover"
        />
        {/* Removed overlay */}
        <motion.div
          className="absolute inset-0 flex justify-center items-center text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
         
        </motion.div>
      </div>

      {/* Section with Added Padding */}
      <div className="w-full flex flex-col sm:flex-row py-[150px] px-12 sm:px-24">
        {/* Image Grid Section */}
        <motion.div
          className="flex-shrink-0 w-full sm:w-[40%] grid grid-cols-2 gap-x-4 gap-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <a
            href="https://www.instagram.com/p/CDO1NsWp7Lt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="w-full h-[100px] sm:h-[200px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/Img/02B_AASHAV_JANVI_SANGEET-1110-JAY.jpg"
                alt="Image 1"
                width={200}
                height={200}
                className="w-full h-full object-cover"
                style={{
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.20), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
              />
            </motion.div>
          </a>
          <a
            href="https://www.instagram.com/p/CCGUxYGJ23S/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="w-full h-[100px] sm:h-[200px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/Img/02B_SHUBHAM_SUMEGHA_SANGEET-2665-NIK.jpg"
                alt="Image 2"
                width={200}
                height={200}
                className="w-full h-full object-cover"
                style={{
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.20), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
              />
            </motion.div>
          </a>
          <a
            href="https://www.instagram.com/p/CS8ifUZjKaa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="w-full h-[100px] sm:h-[200px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/Img/02B_SHUBHAM_SUMEGHA_SANGEET-2622-raju.jpg"
                alt="Image 3"
                width={200}
                height={200}
                className="w-full h-full object-cover"
                style={{
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.20), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
              />
            </motion.div>
          </a>
          <a
            href="https://www.instagram.com/p/C06YVy8J9Pj/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="w-full h-[100px] sm:h-[200px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/Img/02_JANVI_YAZAD_SANGEET-3365-SAM.jpg"
                alt="Image 4"
                width={200}
                height={200}
                className="w-full h-full object-cover"
                style={{
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.20), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
              />
            </motion.div>
          </a>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          className="flex-shrink-0 w-full sm:w-[60%] mt-12 sm:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex flex-col justify-center items-center text-center text-black">
            <h1 className="text-lg font-semibold sm:text-lg py-5 sm:pb-0 md:text-4xl">
              Get your groove on
            </h1>
            <p className="py-4 sm:w-[450px]">
              Your event deserves spectacular moments. We choreograph dances
              that capture the essence of your celebration.
            </p>

            <div className="bg-white max-w-[450px] w-full px-4 sm:px-12">
              <motion.form
                action=""
                className="mt-[20px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="inline relative border-none">
                  <input
                    type="text"
                    name="name"
                    className="mb-[20px] w-full bg-white border-b-2 border-solid border-gray-500 pb-2 focus:outline-none"
                    placeholder="Full Name"
                    id="username"
                  />
                </div>
                <div className="inline relative border-none">
                  <input
                    type="text"
                    name="email"
                    className="mb-[20px] w-full bg-white border-b-2 border-solid border-gray-500 pb-2 focus:outline-none"
                    placeholder="Email"
                    id="email"
                  />
                </div>
                <div className="inline relative border-none">
                  <input
                    type="text"
                    name="mobile"
                    className="mb-[20px] w-full bg-white border-b-2 border-solid border-gray-500 pb-2 focus:outline-none"
                    placeholder="Mobile"
                    id="mobile"
                  />
                </div>
                <div className="mt-6">
                  <motion.button
                    className="w-full bg-[#222] uppercase text-white font-semibold py-[17px] px-[35px]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    Send Message
                  </motion.button>
                </div>
              </motion.form>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Extra Padding at the Bottom */}
      <div className="pb-[100px]"></div> {/* Added bottom padding */}
    </main>
  );
}
