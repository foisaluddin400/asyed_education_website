"use client";

import Image from "next/image";
import React from "react";
import hero from "../../../public/img/bannar1.jpg";
import about1 from "../../../public/img/about1.jpg";
import about2 from "../../../public/img/about2.jpg";
import about3 from "../../../public/img/about3.jpg";
import icon1 from "../../../public/img/icon1.png";
import icon2 from "../../../public/img/icon2.png";
import icon3 from "../../../public/img/icon4.png";
import { RiArrowRightWideLine } from "react-icons/ri";
import { useGetAboutUsQuery } from "@/redux/Api/aboutUsApi";

const page = () => {

  const { data } = useGetAboutUsQuery();
  const sanitizedContent = data?.data?.content;

  console.log("About Us Data:", data?.data?.content);
  return (
    <div>
      <div className="relative w-full h-[500px] md:h-[650px] overflow-hidden">
        {/* Background Image using Next/Image */}
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
        <div className="relative px-3  flex items-center h-full container m-auto text-white">
          <div>
            <h1 className=" leading-tight">
              <span className="md:text-5xl text-3xl">About Us</span> <br />
              <p className="py-3 max-w-2xl text-gray-400">
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
                  Home <RiArrowRightWideLine className=" " /> About Us
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
      <div className="bg-green-50 ">
        <div className=" lg:grid grid-cols-2 gap-4 container px-4 lg-px-0 m-auto lg:my-20 py-11">
          <div>
            <Image
              className="h-[300px] object-cover pb-4"
              src={about1}
              alt="about1"
              width={1920}
              height={1080}
            />
            <div className="grid grid-cols-2 gap-4">
              <Image src={about2} alt="about1" width={1920} height={1080} />
              <Image src={about3} alt="about1" width={1920} height={1080} />
            </div>
          </div>
          <div className="pt-6 lg:pt-0">
      

      <p
        className="text-gray-700"
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      />
    </div>
        </div>
      </div>

      <div className="container mt-11 rounded-md  m-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-7 px-5">
        {/* Single Feature Item */}
        <div className="text-center border p-6 rounded-lg  hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center justify-center">
            <div className="bg-[#e2f1ef] mb-4 p-4 rounded-full">
              <Image src={icon1} alt="icon1" width={40} height={40} />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Our Purpose</h1>
            <p className="text-gray-400">
          At Seeds of Learning, our purpose is to nurture every learner’s potential through personalized education, guidance, and mentorship. We believe that every child deserves the right tools and environment to grow academically and personally. 
            </p>
          </div>
        </div>

        {/* Feature 2 */}
         <div className="text-center border p-6 rounded-lg  hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center justify-center">
            <div className="bg-[#f1ede2] mb-4 p-4 rounded-full">
              <Image src={icon2} alt="icon1" width={40} height={40} />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Our Journey</h1>
            <p className="text-gray-400">
              What began as a simple vision to make learning more meaningful has grown into a trusted educational community. Over the years, we’ve partnered with dedicated tutors, passionate parents, and motivated stud
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="text-center border p-6 rounded-lg  hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center justify-center">
            <div className="bg-[#e5e2f1] mb-4 p-4 rounded-full">
              <Image src={icon3} alt="icon1" width={40} height={40} />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Our Foundation</h1>
            <p className="text-gray-400">
              Our foundation is built on trust, excellence, and compassion. We combine academic expertise with human understanding to make learning both effective and enjoyable. By focusing on holistic growth, we aim to instill values, disci
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
