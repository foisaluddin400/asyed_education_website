import React from "react";
import backgroundImage from "../../../public/img/Vector.png";
import leftDoll from "../../../public/img/left1.png";
import rightDoll from "../../../public/img/right1.png";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Enroll() {
  return (
    <div className="mt-20">
      <section
        className="relative w-full h-[600px] flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
        }}
      >
        {/* Left Doll */}
        <div className="absolute left-20 bottom-0  h-auto select-none pointer-events-none">
          <Image src={leftDoll} alt="Left Doll" width={500} />
        </div>

        {/* Right Doll */}
        <div className="absolute right-20 bottom-0  h-auto select-none pointer-events-none">
          <Image src={rightDoll} alt="Right Doll" width={500} />
        </div>

        {/* Center Text */}
        <div className="z-10 text-white px-4">
          <h1 className="text-7xl font-bold leading-tight">
            How To Enroll Your Child <br /> To a Class
          </h1>
          <div className="flex justify-center mt-11">
            <button
              className="
             relative overflow-hidden 
             px-6 py-3 text-lg rounded-full 
             flex items-center gap-3 
             bg-accent text-white
             transition-all duration-300
             group
           "
            >
              <span className="relative z-10">Consultation</span>
              <FaArrowRight className="relative z-10" />

              {/* Hover Green Animation Layer */}
              <span
                className="
               absolute inset-0 
               bg-primary  
               translate-x-[-102%] 
               group-hover:translate-x-0 
               transition-transform duration-500 
               rounded-full
             "
              ></span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
