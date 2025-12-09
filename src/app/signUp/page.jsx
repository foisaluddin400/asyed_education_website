import Image from "next/image";
import Link from "next/link";
import React from "react";
import backgroundImage from "../../../public/img/background5.jpg";
import { Checkbox } from "antd";

export default function SignUp() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center backdrop-blur-2xl"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      {/* LOGIN CARD */}
      <div className="w-[500px] bg-secondary shadow-2xl rounded-md border border-gray-300 relative">
        {/* TOP CIRCLE ICON */}
        <div className="mt-4 flex justify-center">
          <Image
            src="/img/logo4.png"
            width={105}
            height={100}
            alt="icon"
            className="object-contain"
          />
        </div>

        {/* TITLE */}
        <h1 className="text-center text-3xl font-serif mt-3 text-green-900">
          Green Sign Up Form
        </h1>

        {/* GREEN TRIANGLE AREA */}
        <div className="relative mt-7 px-10 py-10">
          <div className="absolute -mr-[1px] inset-0 bg-primary clip-tri"></div>

          <form className="relative space-y-6">
            {/* FULL NAME */}
            <div>
              <label className="text-sm font-semibold text-black flex items-center gap-1">
                <span>👤</span> Full Name
              </label>
              <input
                type="text"
                className="w-full mt-1 p-2 border text-black bg-white rounded 
                focus:ring-2 focus:ring-green-700 outline-none shadow-sm"
                placeholder="Enter your full name"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm font-semibold text-black flex items-center gap-1">
                <span>📧</span> Email
              </label>
              <input
                type="email"
                className="w-full mt-1 p-2 border text-black bg-white rounded 
                focus:ring-2 focus:ring-green-700 outline-none shadow-sm"
                placeholder="example@gmail.com"
              />
            </div>

            {/* PHONE NUMBER */}
            <div>
              <label className="text-sm font-semibold text-black flex items-center gap-1">
                <span>📱</span> Phone Number
              </label>
              <input
                type="tel"
                className="w-full mt-1 p-2 border text-black bg-white rounded 
                focus:ring-2 focus:ring-green-700 outline-none shadow-sm"
                placeholder="+8801XXXXXXXXX"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm font-semibold text-black flex items-center gap-1">
                <span>🔑</span> Password
              </label>
              <input
                type="password"
                className="w-full mt-1 p-2 border text-black bg-white rounded 
                focus:ring-2 focus:ring-green-700 outline-none shadow-sm"
                placeholder="Enter password"
              />
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label className="text-sm font-semibold text-black flex items-center gap-1">
                <span>✔</span> Confirm Password
              </label>
              <input
                type="password"
                className="w-full mt-1 p-2 border text-black bg-white rounded 
                focus:ring-2 focus:ring-green-700 outline-none shadow-sm"
                placeholder="Re-enter password"
              />
            </div>

            {/* SIGN UP BUTTON */}
            <Link href="/signUp/done">
              <button
                className="w-full mt-6 bg-primary text-white py-2 rounded 
                shadow hover:bg-teal-950 tracking-widest border border-teal-400"
              >
                SIGN UP
              </button>
            </Link>

            <p className="text-xs text-gray-600 mb-6 text-center">
              <Checkbox className="mr-3"></Checkbox>
              By Clicking Continue, I agree to the{" "}
              <Link href={"/terms-and-condition"}>
                <span className="text-blue-600 cursor-pointer">
                  Terms of Service
                </span>
              </Link>{" "}
              and{" "}
              <Link href={"/privacy-policy"}>
                <span className="text-blue-600 cursor-pointer">
                  Privacy Policy
                </span>
              </Link>
            </p>

            <p className="text-center text-sm text-gray-600 mt-6">
              Already have an account?{" "}
              <Link href={"/signIn"}>
                <span className="text-blue-600 cursor-pointer">Sign in</span>
              </Link>
            </p>
          </form>
        </div>

        {/* FOOTER */}
        <p className="text-center text-xs py-4 text-gray-700">
          © 2018 Green Login Form . All Rights Reserved | Design by W3layouts
        </p>
      </div>
    </div>
  );
}
