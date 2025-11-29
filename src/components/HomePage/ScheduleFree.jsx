import React from "react";
import leftImage from "../../../public/img/right.png";
import icon from "../../../public/img/ic.png";
import icon1 from "../../../public/img/ic2.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
const ScheduleFree = () => {
  return (
    <div className="bg-green-50">
      <div className="grid grid-cols-2 gap-4 ">
        
        <div className="flex items-center">
          <div className="text-center max-w-2xl m-auto">
            <h1 className="text-4xl mb-4">
           Schedule a Free <br /> Academic Consultation
            </h1>
            <p>Not sure where to start? Our free academic consultation helps parents and students identify strengths, learning goals, and areas for improvement.  During this session, you’ll meet with one of our expert advisors who will</p>
           
            <div className="mt-8 flex justify-center gap-4">
                <button
                             className="
             relative overflow-hidden 
             px-6 py-3 text-lg rounded-full 
             flex items-center gap-3 
             bg-primary text-white
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
               bg-accent  
               translate-x-[-102%] 
               group-hover:translate-x-0 
               transition-transform duration-500 
               rounded-full
             "
                             ></span>
                           </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Image
            className=""
            src={leftImage}
            alt="leftImage"
            width={700}
            height={700}
          />
        </div>
      </div>
    </div>
  );
};

export default ScheduleFree;
