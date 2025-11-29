"use client";

import React, { useRef } from "react";
import leftImage from "../../../public/img/leftImage.png";
import icon from "../../../public/img/ic.png";
import icon1 from "../../../public/img/ic2.png";
import Image from "next/image";
import profile1 from "../../../public/img/mm.jpg";
import profile2 from "../../../public/img/ss.jpg";
import profile3 from "../../../public/img/vv.jpg";
import background from "../../../public/img/back.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { MdStar } from "react-icons/md";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed K.",
      role: "Café Owner",
      img: profile1,
      review:
        "ProfitableBusinessesForSale.com made selling my café so much easier. Within weeks of listing, I started getting genuine inquiries. Highly recommended!",
    },
    {
      name: "Sophie L.",
      role: "Small Business Owner",
      img: profile1,
      review:
        "I was worried about finding buyers, but PBFS gave my business the right exposure. Their Premium Seller package was worth every penny.",
    },
    {
      name: "Raj P.",
      role: "Entrepreneur",
      img: profile1,
      review:
        "The valuation service helped me price my business correctly. I closed a deal in 4 months—faster than expected!",
    },
    {
      name: "Maria G.",
      role: "Franchise Owner",
      img: profile1,
      review:
        "Listing our franchise on PBFS gave us international visibility. We received inquiries from investors in three different countries!",
    },
    {
      name: "John S.",
      role: "Franchise Seller",
      img: profile1,
      review:
        "The franchise package was simple to use and provided real exposure. The dashboard makes tracking leads so easy.",
    },
    {
      name: "Fatima A.",
      role: "Franchisor",
      img: profile1,
      review:
        "Great platform for franchisors! The social media spotlight and priority placement really boosted our brand visibility.",
    },
    {
      name: "Omar R.",
      role: "Salon Owner",
      img: profile1,
      review:
        "I listed my salon equipment here and got it sold in less than two weeks. The inquiry alerts kept me updated instantly.",
    },
    {
      name: "Elena M.",
      role: "Asset Seller",
      img: profile1,
      review:
        "Excellent platform for selling business assets. Easy to list, professional visibility, and I could manage everything from one dashboard.",
    },
    {
      name: "Carlos D.",
      role: "Business Broker",
      img: profile1,
      review:
        "As a broker, I needed a place to list multiple businesses. PBFS is the perfect platform with strong lead tracking and premium visibility options.",
    },
    {
      name: "Noor S.",
      role: "Broker",
      img: profile1,
      review:
        "The broker package gives me everything I need—multiple listings, team access, and high-quality buyer inquiries.",
    },
    {
      name: "David B.",
      role: "Startup Founder",
      img: profile1,
      review:
        "I uploaded my startup idea for free and quickly connected with investors. This platform is perfect for early-stage entrepreneurs.",
    },
    {
      name: "Aisha M.",
      role: "Innovator",
      img: profile1,
      review:
        "The Business Idea Lister gave me credibility and visibility with serious investors. Great way to showcase innovation for free.",
    },
    {
      name: "Michael T.",
      role: "Investor",
      img: profile1,
      review:
        "The investor subscription is worth it. I discovered fresh ideas and had early access to listings before anyone else.",
    },
    {
      name: "Test User",
      role: "Entrepreneur",
      img: profile1,
      review:
        "Whether you&apos;re buying or selling, our platform makes the process seamless and straightforward. Here&apos;s how it works according to our satisfied users.",
    },
  ];

  const splideRef = useRef(null);

  const handlePrevClick = () => {
    splideRef.current?.splide.go("<");
  };

  const handleNextClick = () => {
    splideRef.current?.splide.go(">");
  };
  return (
   <div>
    <div className="text-center pt-20 ">
        <h1 className="text-4xl">Testimonials</h1>
        <p className="text-neutral pt-1">Easily find and book qualified tutors by subject, grade <br /> level, and availability.</p>
    </div>
     <div
      className="py-16 mt-9 bg-cover bg-center"
      style={{
        backgroundImage: `url(${background.src})`,
      }}
    >
      <div className="grid grid-cols-2 text-white gap-4 container m-auto py-8 px-5">
        <div>
          <h1 className="text-2xl font-semibold mb-3">Testomonial</h1>
          <h1 className="text-6xl mb-6 font-bold" >What Students Have To Say</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis maxime earum facilis eligendi velit! Consequatur exercitationem veritatis fugit, beatae temporibus maxime nesciunt, harum, dicta sed tempore repellendus iusto reprehenderit velit natus blanditiis!</p>
              <button
                                       className="
                                       mt-8
                       relative overflow-hidden 
                       px-6 py-3 text-lg rounded-full 
                       flex items-center gap-3 
                       bg-accent text-white
                       transition-all duration-300
                       group
                     "
                                     >
                                       <span className="relative z-10">Find More</span>
                                       <FaArrowRight className="relative z-10" />
                     
                                      
                                       <span
                                         className="
                         absolute inset-0 
                         bg-black 
                         translate-x-[-102%] 
                         group-hover:translate-x-0 
                         transition-transform duration-500 
                         rounded-full
                       "
                                       ></span>
                                     </button>
        </div>
        <div className="">
          <div className="w-full">
            <Splide
              ref={splideRef}
              options={{
                type: "loop",
                perPage: 2,
                gap: "1rem",
                arrows: false,
                pagination: false,
                breakpoints: {
                  1724: { perPage: 3 },
                  968: { perPage: 2 },
                  640: { perPage: 1 },
                },
              }}
              aria-label="Testimonials"
              className="w-full"
            >
              {testimonials.map((item, index) => (
                <SplideSlide key={index}>
                  <div className="shadow-lg bg-[#FFFFFF] rounded-2xl p-4 py-8 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex pb-3 text-yellow-500">
                        <MdStar />
                        <MdStar />
                        <MdStar />
                        <MdStar />
                        <MdStar />
                        <p className="-mt-1 pl-2 text-gray-600">(5.0)</p>
                      </div>
                      <p className="text-sm mt-1 text-gray-700 italic">
                        {item?.review}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 mt-5">
                      <div className="relative w-[60px] h-[60px]">
                        <Image
                          src={item?.img}
                          alt={item?.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900">
                          {item?.name}
                        </h5>
                        <p className="text-sm text-gray-500">{item?.role}</p>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>

          {/* Custom Arrows */}
          <div className="flex gap-3 justify-center mt-5">
            <button
              className="bg-[#0091FF] p-2 rounded text-white"
              onClick={handlePrevClick}
            >
              <HiArrowNarrowLeft className="text-2xl" />
            </button>
            <button
              className="bg-[#0091FF] p-2 rounded text-white"
              onClick={handleNextClick}
            >
              <HiArrowNarrowRight className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Testimonials;
