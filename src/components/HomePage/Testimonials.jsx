"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { MdStar } from "react-icons/md";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { RiChatQuoteLine } from "react-icons/ri";
import { useGetAllTestimonialsQuery } from "@/redux/Api/blogApi";
import { fileBaseurl } from "@/redux/Api/baseApi";

const Testimonials = () => {
  const { data: response } = useGetAllTestimonialsQuery();
  const testimonials = response?.data?.items || (Array.isArray(response?.data) ? response.data : []);

  const splideRef = useRef(null);

  const handlePrevClick = () => {
    splideRef.current?.splide.go("<");
  };

  const handleNextClick = () => {
    splideRef.current?.splide.go(">");
  };

  return (
    <section className="py-16 md:py-24 bg-white font-sans bg-[#f5f5f5]">
      <div className="container mx-auto px-5">
        
        {/* Centered Header - Matches Image Design */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-black mb-6">
            What Parents Are Saying
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Real families share how our small-group approach and detailed progress 
            reporting have helped their children thrive academically.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-7xl mx-auto">
          {testimonials.length === 0 ? (
            <div className="bg-gray-50 rounded-2xl p-12 text-center flex flex-col items-center border-2 border-dashed border-gray-200">
              <RiChatQuoteLine className="text-5xl text-gray-300 mb-4" />
              <h3 className="text-xl font-bold text-gray-900">No Stories Yet</h3>
              <p className="text-gray-500">We'd love to hear your feedback!</p>
            </div>
          ) : (
            <div className="relative group">
              <Splide
                ref={splideRef}
                options={{
                  type: "loop",
                  perPage: 3,
                  gap: "2rem",
                  arrows: false,
                  pagination: false,
                  breakpoints: {
                    1024: { perPage: 2 },
                    640: { perPage: 1 },
                  },
                }}
                className="testimonial-splide"
              >
                {testimonials.map((item, index) => (
                  <SplideSlide key={index}>
                    <div className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow rounded-2xl p-8 h-full flex flex-col">
                      
                      {/* 5 Stars - Matches Image */}
                      <div className="flex gap-1 text-[#FFD646] mb-4">
                        {[...Array(5)].map((_, i) => (
                          <MdStar key={i} size={22} />
                        ))}
                      </div>

                      {/* Quote Text */}
                      <p className="text-gray-600 italic text-base leading-relaxed mb-8 flex-grow">
                        "{item?.quote}"
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                        {/* Optional Avatar - Styled small and clean */}
                        {item?.authorAvatar && (
                          <div className="relative w-12 h-12 shrink-0">
                            <Image
                              src={
                                item.authorAvatar.startsWith("http")
                                  ? item.authorAvatar
                                  : `${fileBaseurl}/${item.authorAvatar}`
                              }
                              alt={item.authorName}
                              fill
                              className="rounded-full object-cover"
                            />
                          </div>
                        )}
                        <div>
                          <h5 className="font-bold text-gray-900 text-lg">
                            {item?.authorName}
                          </h5>
                          <p className="text-sm text-gray-400 font-medium">
                            {item?.authorTitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SplideSlide>
                ))}
              </Splide>

              {/* Custom Navigation Arrows - Positioned to the sides */}
              {/* <button
                className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 bg-white shadow-lg border border-gray-100 p-3 rounded-full text-gray-400 hover:text-blue-500 transition-all z-10 hidden md:block"
                onClick={handlePrevClick}
              >
                <HiArrowNarrowLeft className="text-2xl" />
              </button>
              <button
                className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 bg-white shadow-lg border border-gray-100 p-3 rounded-full text-gray-400 hover:text-blue-500 transition-all z-10 hidden md:block"
                onClick={handleNextClick}
              >
                <HiArrowNarrowRight className="text-2xl" />
              </button> */}
            </div>
          )}
          
          {/* Mobile Arrows */}
          <div className="flex gap-4 justify-center mt-10 md:hidden">
            <button className="bg-white p-3 rounded-full shadow border border-gray-100" onClick={handlePrevClick}>
              <HiArrowNarrowLeft className="text-xl" />
            </button>
            <button className="bg-white p-3 rounded-full shadow border border-gray-100" onClick={handleNextClick}>
              <HiArrowNarrowRight className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;