import Image from "next/image";
import Link from "next/link";
import React from "react";
import backgroundImage from "../../../public/img/background5.jpg";

export default function SignIn() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center backdrop-blur-2xl"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      {/* LOGIN CARD */}
      <div className="w-[500px] bg-secondary shadow-2xl rounded-md  border border-gray-300 relative">
        {/* TOP CIRCLE ICON */}
        <div
          className="mt-4 flex justify-center
           "
        >
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
          Green Login Form
        </h1>

        {/* GREEN TRIANGLE AREA */}
        <div className="relative mt-7 px-10 py-10">
          <div className="absolute -mr-[1px] inset-0 bg-primary clip-tri"></div>

          <form className="relative space-y-6">
            <div>
              <label className="text-sm font-semibold text-black flex items-center gap-1">
                <span>🔒</span> Username
              </label>
              <input
                type="text"
                className="w-full mt-1 p-2 border text-black bg-white rounded 
                  focus:ring-2 focus:ring-green-700 outline-none shadow-sm"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-green-900 flex items-center gap-1">
                <span>🔑</span> Password
              </label>
              <input
                type="password"
                className="w-full mt-1 p-2 border text-black bg-white rounded 
                  focus:ring-2 focus:ring-green-700 outline-none shadow-sm"
              />
            </div>

            <div className="flex justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-800">
                <input type="checkbox" />
                Show Password
              </label>
              <Link href="/signIn/forgot" className="text-gray-900 underline">
                Forgot Password?
              </Link>
            </div>

            <Link href="/signUp/done">
              <button
                className="w-full mt-2 bg-primary text-white py-2 rounded 
                   shadow hover:bg-teal-950 tracking-widest border border-teal-400"
              >
                LOGIN
              </button>
            </Link>

            <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link href="/signUp" className="text-blue-600 cursor-pointer">
            Sign Up
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
