"use client";

import React, { useRef } from "react";

import Image from "next/image";

import background from "../../../public/img/back.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { MdStar } from "react-icons/md";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import { RiChatQuoteLine } from "react-icons/ri";
import { useGetAllTestimonialsQuery } from "@/redux/Api/blogApi";
import { fileBaseurl } from "@/redux/Api/baseApi";

const Testimonials = () => {
  const { data: response } = useGetAllTestimonialsQuery();
  const testimonials = response?.data?.items || (Array.isArray(response?.data) ? response.data : []);
  console.log("Testimonials Data:", testimonials);


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
        <h1 className="md:text-4xl text-3xl">Testimonials</h1>
        <p className="text-neutral pt-1">
          Easily find and book qualified tutors by subject, grade <br /> level,
          and availability.
        </p>
      </div>
      <div
        className="md:py-16 mt-9 bg-cover bg-center"
        style={{
          backgroundImage: `url(${background.src})`,
        }}
      >
        <div className="md:grid grid-cols-2 text-white gap-4 container m-auto py-8 px-5">
          <div>
            <h1 className="text-2xl font-semibold mb-3">Testomonial</h1>
            <h1 className="md:text-6xl text-4xl mb-6 font-bold">
              What Students Have To Say
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
              maxime earum facilis eligendi velit! Consequatur exercitationem
              veritatis fugit, beatae temporibus maxime nesciunt, harum, dicta
              sed tempore repellendus iusto reprehenderit velit natus
              blanditiis!
            </p>
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
          <div className="mt-8 md:mt-0">
            <div className="w-full">
              {testimonials.length === 0 ? (
                <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8 text-center flex flex-col items-center justify-center min-h-[300px]">
                  <div className="bg-white/20 p-4 rounded-full mb-4">
                    <RiChatQuoteLine className="text-5xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">No Stories Yet</h3>
                  <p className="text-gray-200 max-w-sm">
                    Be the first to share your experience with us! We'd love to hear from you.
                  </p>
                </div>
              ) : (
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
                  {testimonials?.map((item, index) => (
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
                            {item?.quote}
                          </p>
                        </div>
                        <div className="flex items-center gap-4 mt-5">
                          <div className="relative w-[60px] h-[60px]">
                            <Image
                              src={
                                item?.authorAvatar?.startsWith("http")
                                  ? item?.authorAvatar
                                  : `${fileBaseurl}/${item?.authorAvatar}`
                              }
                              alt={item?.authorName}
                              fill
                              className="rounded-full object-cover"
                            />
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900">
                              {item?.authorName}
                            </h5>
                            <p className="text-sm text-gray-500">{item?.authorTitle}</p>
                          </div>
                        </div>
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
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
