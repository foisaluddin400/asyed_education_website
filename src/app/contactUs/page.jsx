// app/contact/page.jsx   (or any page you want)

import React from "react";
import Image from "next/image";
import mainContactRightImage from "../../../public/img/contact1.png";     // top illustration
import leftImageFrom from "../../../public/img/contactLeft.png";           // bottom left illustration

export default function ContactPage() {
  return (
    <div className=" py-16 md:py-11">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Top Section */}
        <div className="bg-gray-200 rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            {/* Left Text */}
            <div className="p-10 md:p-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Let’s Connect
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We’d love to hear from you! Whether you have questions about our tutoring services 
                or want to discuss your child’s learning plan, reach out and we’ll respond promptly.
              </p>
            </div>

            {/* Right Illustration */}
            <div className="flex justify-center md:justify-end p-8">
              <Image
                src={mainContactRightImage}
                alt="Woman contacting via phone and laptop"
                width={500}
                height={400}
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section: Form + Illustration */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Illustration */}
          <div className="order-2 lg:order-1 bg-gray-200 rounded-3xl p-8 flex justify-center">
            <Image
              src={leftImageFrom}
              alt="Woman chatting on phone"
              width={800}
              height={600}
              className="w-full max-w-sm"
            />
          </div>

          {/* Right Form */}
          <div className="order-1 lg:order-2  p-4 md:p-4">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Description</label>
                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-lg transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center">
            <div className="bg-teal-100 p-4 rounded-full mb-4">
              <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800">Contact Email</h4>
            <p className="text-gray-600 mt-2">support@tutor.com</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center">
            <div className="bg-teal-100 p-4 rounded-full mb-4">
              <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800">Location</h4>
            <p className="text-gray-600 mt-2">Mohakhali, Dhaka, Bangladesh</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center">
            <div className="bg-teal-100 p-4 rounded-full mb-4">
              <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800">Contact Phone</h4>
            <p className="text-gray-600 mt-2">+880 1700 000000</p>
          </div>
        </div>
      </div>
    </div>
  );
}