
import React from "react";
import background from "../../../public/img/back.png";
import contactGirl from "../../../public/img/contact.png";
import mainContactRightImage from "../../../public/img/privecy.png";
import Image from "next/image";
import hero from "../../../public/img/bannar1.jpg";
import { RiArrowRightWideLine } from "react-icons/ri";
import Profile from "@/components/profile/Profile";
const page = () => {
  return (
   <div className=" mb-20">

     <div className=" ">
         <div className="relative w-full h-[500px] md:h-[650px] overflow-hidden">
       
        <Image
          src={hero}
          alt="Hero Banner"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary  to-[#000000b9] opacity-80"></div>

        {/* Content */}
        <div className="relative px-3   flex items-center h-full container m-auto text-white">
          <div>
            <h1 className=" leading-tight">
              <span className="md:text-5xl text-3xl">Profile</span> <br />
              <p className="py-3 max-w-2xl text-white">
                With a team of experienced tutors, flexible learning options,
                and data-driven progress tracking, we ensure that education is
                not just about grades — it’s about growth, confidence, and
                lifelong curiosity.
              </p>
            </h1>

            <div className="mt-11 ">
              <button
                className="
                      relative overflow-hidden 
                      px-6 py-3 text-lg rounded-full 
                      flex items-center gap-3 
                      bg-transparent border border-white
                      transition-all duration-300
                      group
                    "
              >
                <span className="relative z-10  flex items-center gap-1">
                  Home <RiArrowRightWideLine className=" " /> Profile
                </span>

                {/* Hover Green Animation Layer */}
                <span
                  className="
                        absolute inset-0 
                        bg-accent
                        border border-transparent 
                        translate-x-[-101%] 
                        group-hover:translate-x-0 
                        transition-transform duration-500 
                        rounded-full
                      "
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>
     </div>
     <div
     
    >
     <div className="container m-auto">
         <div className="grid lg:grid-cols-2 gap-6 items-center">
        {/* Left: 3D Girl Character */}
        <div className="order-2 lg:order-1 flex justify-center lg:justify-end">
          <div className="relative">
            <Image
              src={contactGirl}
              alt="Happy student with laptop"
              width={600}
              height={800}
              className="drop-shadow-2xl rounded-2xl"
              priority
            />
            {/* Pretty floating bubbles */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-teal-200 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-purple-200 rounded-full opacity-30 blur-3xl"></div>
          </div>
        </div>

        {/* Right: Ant Design Form */}
        <div className="order-1 lg:order-2 md:p-5 ">
          <Profile></Profile>
        </div>
      </div>
     </div>
    </div>
   </div>
  );
};

export default page;
