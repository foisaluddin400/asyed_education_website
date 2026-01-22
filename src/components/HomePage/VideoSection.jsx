"use client";
import { baseUrl } from "@/redux/Api/baseApi";
import { useGetAllVideosQuery } from "@/redux/Api/videoApi";
import React from "react";

const videos = [
  {
    title: "Welcome To Seeds Of Learning",
    desc: "Our mission is to provide personalized tutoring, meaningful mentorship, and a positive learning environment where students can discover their strengths and achieve academic success.",
    url: "https://www.youtube.com/embed/ysz5S6PUM-U", // sample video
  },
  {
    title: "Welcome To Seeds Of Learning",
    desc: "Our mission is to provide personalized tutoring, meaningful mentorship, and a positive learning environment where students can discover their strengths and achieve academic success.",
    url: "https://www.youtube.com/embed/ScMzIvxBSi4", // sample video
  },
  {
    title: "Welcome To Seeds Of Learning",
    desc: "Our mission is to provide personalized tutoring, meaningful mentorship, and a positive learning environment where students can discover their strengths and achieve academic success.",
    url: "https://www.youtube.com/embed/qP7XrTddI0E", // sample video
  },
  {
    title: "Welcome To Seeds Of Learning",
    desc: "Our mission is to provide personalized tutoring, meaningful mentorship, and a positive learning environment where students can discover their strengths and achieve academic success.",
    url: "https://www.youtube.com/embed/jNQXAC9IVRw", // sample video
  },
];

const VideoSection = () => {
       const { data: videosData, isLoading } = useGetAllVideosQuery();
       const videos = videosData?.data || [];
       console.log("Videos Data:", videosData?.data);
  return (
    <div className="max-w-7xl mx-auto md:px-6 px-3 py-20">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="md:text-4xl text-3xl font-bold text-gray-900">
          Welcome To Seeds Of Learning
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Our mission is to provide personalized tutoring, meaningful mentorship,
          and a positive learning environment where students can discover their strengths
          and achieve academic success.
        </p>
      </div>

      {/* Grid */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
  {isLoading ? (
    <div className="col-span-1 md:col-span-2 text-center py-20 text-gray-500">
      Video is loading...
    </div>
  ) : (
    videos.map((v, i) => (
      <div key={i} className="space-y-4">
        <h2 className="text-xl font-semibold">{v?.title}</h2>
        <p className="text-gray-600">{v?.description}</p>

        <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
          <video
            className="w-full h-[260px] rounded-xl object-cover"
            src={`${baseUrl}/${v?.videoUrl}`}
            controls
            muted
            // autoPlay
          />
        </div>
      </div>
    ))
  )}
</div>


    </div>
  );
};

export default VideoSection;
