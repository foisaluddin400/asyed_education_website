"use client"

import React from "react";
import Image from "next/image";
import hero from "../../../public/img/bannar1.jpg";
import blog1 from "../../../public/img/service1.jpg";
import blog2 from "../../../public/img/service2.jpg";
import blog3 from "../../../public/img/service3.jpg";
import blog4 from "../../../public/img/service4.jpg";
import { RiArrowRightWideLine, RiArticleLine } from "react-icons/ri";
import { useGetAllBlogsQuery } from "@/redux/Api/blogApi";
import { baseUrl } from "@/redux/Api/baseApi";
import Link from "next/link";

// const blogs = [blog1, blog2, blog3, blog4, blog1, blog2];

export default function BlogPage() {


  const { data: blogData, isLoading } = useGetAllBlogsQuery();
  console.log("blogData===>", blogData?.data?.items)
  const blogs = blogData?.data?.items || [];

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
        <div className="relative  px-3 flex items-center h-full container m-auto text-white">
          <div>
            <h1 className=" leading-tight">
              <span className="md:text-5xl text-3xl">Blogs</span> <br />
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
                  Home <RiArrowRightWideLine className=" " /> Blogs
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
      <section className="py-16 md:px-4 px-3 container mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="md:text-4xl text-3xl font-bold text-gray-900">Blog</h1>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto">
            Easily find and book qualified tutors by subject, grade level, and
            availability.
          </p>
        </div>

        {/* Content */}
        {!isLoading && blogs.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-gray-100 p-6 rounded-full mb-6">
              <RiArticleLine className="text-6xl text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">No Blogs Published Yet</h2>
            <p className="text-gray-500 max-w-md mb-8">
              We haven't published any blog posts yet. Stay tuned for updates and educational articles coming soon!
            </p>
            <Link href="/" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-[#095d56] transition font-medium">
              Back to Home
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((img, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition p-0 overflow-hidden bg-white"
              >
                {/* Image */}
                <div className="w-full h-56 relative">

                  <Image
                    src={`${baseUrl}/${img?.image.replace(/\\/g, "/")}`}
                    alt="Blog image"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-3 flex flex-col items-start">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {img?.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {img?.content?.replace(/<\/?[^>]+(>|$)/g, "")}
                  </p>


                  <Link href={`/blog/${img?._id}`} className="mt-4 bg-primary text-white px-5 py-2 rounded-lg hover:bg-[#095d56] transition text-sm font-medium ">
                    Learn more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
