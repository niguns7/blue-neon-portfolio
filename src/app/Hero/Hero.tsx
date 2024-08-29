import React from "react";
import Navbar from "../Navbar/Navbar";
// import bgImg from "../../assets/hero.jpg";
import Image from "next/image"; // Import Next.js Image component

const Hero = () => {
  return (
    <>
      <div className="relative h-[80vh] w-full">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 h-full w-full">
          {/* <Image
            src={bgImg}
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          /> */}
        </div>

        {/* Navbar */}
        <div className="absolute z-10 w-full">
          <Navbar />
        </div>
        <div className="flex items-center justify-center h-full w-full">
          <div className="relative z-10 p-4 w-4/5">
            <div className="flex flex-col items-start gap-5">
              <p className="text-sm font-semibold uppercase text-white tracking-widest mb-2">
                For Photography and Videography
              </p>
              <h1 className="text-5xl font-bold text-white mb-4 font-sans">
                Blue Neon Production
              </h1>
              <button className="primary-btn inline-block font-bold text-white uppercase tracking-widest relative z-10 px-8 py-3 transition-all duration-700">
                SEE MORE ABOUT US
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
