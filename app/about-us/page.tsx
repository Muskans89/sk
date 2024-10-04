"use client";

import Image from "next/image";
import bg from "/public/images/Img/02B_SHUBHAM_SUMEGHA_SANGEET-2665-NIK.jpg";
import FromTheDesk from "../HomePage/Sumit";

export default function About() {
  return (
    <main className="overflow-hidden bg-white font-futura">
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Futura:wght@400;700&display=swap");

        .font-futura {
          font-family: "Futura", sans-serif;
        }
      `}</style>

      {/* Fullscreen Banner */}
      <div className="relative h-screen w-screen">
        <Image src={bg} alt="Background Image" layout="fill" objectFit="cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 to-black/20"></div>
        <div className="absolute inset-0 flex justify-center items-center text-center">
          <p className="text-white max-w-md sm:max-w-xl text-lg sm:text-m">
            At Sumit Khetan Entertainment, each dance is a masterpiece, crafted with personal touches for your celebration.
          </p>
        </div>
      </div>

      {/* Founder Section */}
      <div className="max-w-5xl mx-auto mb-24 px-8">
  <h1 className="text-center text-4xl text-black pt-10">Founder</h1>
  <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-stretch">
    
    {/* Left Section: Text Block */}
    <div className="sm:w-1/2 flex items-center">
      <div className="p-6 pr-10 bg-white text-black">
        <h2 className="text-2xl mb-6">Sumit Khetan</h2>
        <h3 className="text-lg mb-8">Chairman &amp; Managing Director</h3>
        <p className="text-gray-600">
          Sumit Khetan, the founder, is a celebrated Artistic Director known for his captivating choreography and storytelling through dance. His journey began with a passion for dance, leading him to prestigious institutions like the Martha Graham School and Alvin Ailey American Dance Theatre.
        </p>
      </div>
    </div>

    {/* Right Section: Image */}
    <div className="sm:w-1/2 flex justify-center items-center">
      <div className="relative overflow-hidden  shadow-md w-full max-w-xs">
        <Image
          src="/images/sumit.jpg" // Replace with the desired image path
          alt="Sumit Khetan"
          width={300} // Adjusted width to make the image smaller
          height={350} // Adjusted height
          objectFit="cover"
          className="w-full h-full transition-transform duration-300 transform hover:scale-105"
        />
      </div>
    </div>

  </div>
</div>

      <FromTheDesk />

      {/* What We Offer Section */}
      <div className="bg-white py-20 max-w-5xl mx-auto px-6">
  <div className="flex flex-col md:flex-row">
    {/* Left Section */}
    <div className="w-full md:w-1/3 mb-8 md:mb-0 md:pr-12">
      <h2 className="text-4xl text-black mb-6">What We Offer</h2>
      <p className="mb-8 text-gray-600 leading-relaxed">
        From grand weddings to dynamic corporate events and brand launches, we bring each moment to life with expert choreography that tells a story and captivates audiences.
      </p>
      <a href="/contact-us" target="_blank" rel="noopener noreferrer">
  <button className="border border-black text-black py-3 px-8 hover:bg-black hover:text-white transition-colors duration-300">
    BOOK NOW
  </button>
</a>
    </div>

    {/* Right Section: Offers Grid */}
    <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
      {[
        { title: "Wedding Choreography", description: "Crafting unforgettable dance performances for your special day." },
        { title: "Corporate Event Choreography", description: "Energizing your corporate events with performances that inspire." },
        { title: "Brand Launches", description: "Creating show-stopping performances that make your brand stand out." },
        { title: "Themed Event Choreography", description: "Bringing your event theme to life with perfectly tailored choreography." },
        { title: "Pre-wedding Celebrations", description: "Choreographing dance numbers that add joy and excitement to sangeet and mehendi." },
        { title: "Proposal and Engagement", description: "Helping you make the perfect proposal with a romantic, well-coordinated performance." }
      ].map((offer, index) => (
        <div key={index} className="flex flex-col space-y-2">
          <h3 className="text-2xl text-black">{offer.title}</h3> {/* Removed font-semibold */}
          <p className="text-gray-600 leading-relaxed">{offer.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>

{/* Testimonials Section */}
<div className="bg-white py-16 max-w-4xl mx-auto px-6">
  <h1 id="testimonials" className="text-center text-3xl  text-black tracking-tighter mb-12">
    Love From <span className="italic">Bollywood</span>
  </h1>

  {/* Testimonials Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Adjusted grid for mobile view */}
    {[
      { name: "Gauhar Khan ", img: "guhrah.jpg", text: "Thank you, Sumit Khetan, for the wonderful experience of being choreographed by you. Wishing you all the best for your incredible shows. God bless!" },
      { name: "Rithvik Dhanjani", img: "ritvik.jpeg", text: "Sumit did an excellent job. If one enjoys dancing, it’s usually due to the choreographer." },
      { name: "Disha Parmar", img: "disha.jpg", text: "He made everything simple for us, adjusting steps wherever needed." },
      { name: "Nakul Mehta", img: "nakul.png", text: "Sumit is one of the ace choreographers in the country." },
      { name: "Manish Raisinghani", img: "manish.jpg", text: "Sumit made the choreography look simple yet stunning, even for a non-dancer like me." },
      { name: "Rahul Mehta", img: "rahul.jpeg", text: "Sumit makes everything feel natural and easy." },
      { name: "Shoaib Ibrahim", img: "sohaib.jpg", text: "Sumit is not just a great choreographer but also a good friend on stage." },
      { name: "Avika Gor", img: "avika.jpg", text: "Sumit made dancing enjoyable and effortless." },
      { name: "Ali Asgar", img: "ali.jpeg", text: "Working with Sumit on Comedy Nights was a fun and flexible experience." },
      { name: "Akanksha Singh", img: "akankasha.jpg", text: "I thoroughly enjoyed learning from Sumit, a fantastic choreographer." },
      { name: "Ayub Khan", img: "ayub.jpeg", text: "Your confidence in me made a difference. I truly enjoyed performing." },
      { name: "Shashank Vyas", img: "shashank.jpeg", text: "Sumit's efforts helped me achieve more on stage than I imagined." }
    ].map((testimonial, index) => (
      <div key={index} className="flex flex-col items-center space-y-3">
        <div className="w-40 h-40 overflow-hidden shadow-lg">
          <Image
            src={`/images/${testimonial.img}`}
            alt={`${testimonial.name} Testimonial`}
            width={160}
            height={160}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center">
          <p className="text-gray-600 text-sm italic mb-2">“{testimonial.text}”</p>
          <h3 className="text-black text-sm">- {testimonial.name}</h3>
        </div>
      </div>
    ))}
  </div>
</div>

   

    </main>
  );
}
