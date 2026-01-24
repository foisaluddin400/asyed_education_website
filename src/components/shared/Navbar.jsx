"use client";
import React, { useState } from "react";
import { Search, ShoppingCart, User, ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Drawer } from "antd";
import Image from "next/image";
import { FaArrowRight, FaTwitter, FaYoutube } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { CiPhone } from "react-icons/ci";
import { IoMailUnreadOutline } from "react-icons/io5";
import { IoIosHome } from "react-icons/io";

export const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about_us" },
    { label: "Our Services", path: "/our_services" },
    { label: "Blogs", path: "/blog" },
    { label: "Contact Us", path: "/contactUs" },
  ];

  const userMenuItems = [
    { label: "Profile", path: "/profilePage" },
    { label: "Dashboard", path: "/dashboard" },
    { label: "Sign Up", path: "/signUp" },
    { label: "Sign In", path: "/signIn" },
    { label: "Log Out", path: "/logout" },
  ];

  return (
    <header className="w-full">
      {/* Top Banner */}
      <div className="bg-secondary border-b border-gray-400 text-black py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          <div className="">
            <Link href="/" className="text-2xl font-bold">
              <Image
              className="w-[80px]"
                alt="logo"
                src="/img/logo4.png"
                height={100}
                width={400}
                priority
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex gap-6 lg:gap-11 flex-wrap justify-center">
              <div className="flex items-center gap-3">
                <div className="bg-stone-900 text-white w-[40px] h-[40px] flex justify-center text-3xl items-center rounded-full">
                  <IoMailUnreadOutline />
                </div>
                <div>
                  <h1 className="text-sm lg:text-sm">Email Us Anytime</h1>
                  <h1 className="font-semibold text-sm lg:text-sm">
                    info@gmail.com
                  </h1>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-stone-900 text-white w-[40px] h-[40px] flex justify-center text-3xl items-center rounded-full">
                  <CiPhone />
                </div>
                <div>
                  <h1 className="text-sm">Call Us Anytime</h1>
                  <h1 className="font-semibold text-sm">
                    +(000)1235 56789
                  </h1>
                </div>
              </div>
              <div>
                <Link href={"/consultation"}>
                  {" "}
                  <button
                    className="
                        relative overflow-hidden 
                          px-6 py-3 text-lg rounded-full 
                        flex items-center gap-3 
                        bg-accent text-white
                        transition-all duration-300
                        group
                         "
                  >
                    <span className="relative z-10">Consultation</span>
                    <FaArrowRight className="relative z-10" />

                    {/* Hover Green Animation Layer */}
                    <span
                      className="
                          absolute inset-0 
                          bg-primary  
                          translate-x-[-102%] 
                          group-hover:translate-x-0 
                          transition-transform duration-500 
                          rounded-full
                        "
                    ></span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="relative bg-primary">
        {/* Background Layer (Overlay) */}
        <div className="absolute inset-0 flex pointer-events-none">
          <div className="w-[60%]"></div>
          <div className="w-[40%] bg-[#09814f] clip-diagonal"></div>
        </div>

        {/* NAVBAR CONTENT */}
        <div className="relative z-10 text-white">
          <div className="container mx-auto px-4">
            <nav className="flex items-center justify-between py-3">
              {/* Left Side - Desktop: Home icon + Menu, Mobile: Home icon only */}
              <div className="flex w-full items-center space-x-4 lg:space-x-8">
                <Link
                  href="/"
                  className="bg-[#077252] p-2 rounded-full text-2xl lg:text-3xl"
                >
                  <IoIosHome />
                </Link>

                {/* Desktop Menu Items */}
                <div className="hidden lg:flex justify-end w-full  items-center space-x-8">
                  {navItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.path}
                      className={`px-2 py-1  transition-colors ${
                        pathname === item.path
                          ? "border-b text-accent border-accent font-medium"
                          : "text-white hover:text-gray-200"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right Side - Desktop: User Dropdown, Mobile: Menu Icon */}
              <div className="flex items-center gap-4 lg:hidden">

                {/* Desktop User Dropdown */}
                <div className="hidden lg:block relative">
                  <button
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#036659] transition-colors"
                  >
                    <Menu className="w-6 h-6 text-white" />
                  </button>

                  {userDropdownOpen && (
                    <>
                      {/* Backdrop to close dropdown */}
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setUserDropdownOpen(false)}
                      ></div>

                      {/* Dropdown Menu */}
                      <div className="absolute z-50 right-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md border py-2 ">
                        {userMenuItems.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.path}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                            onClick={() => setUserDropdownOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Mobile Menu Icon */}
                <button
                  className="lg:hidden text-white"
                  onClick={() => setDrawerOpen(true)}
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        style={{ backgroundColor: "#00935F", color: "white" }}
        title={
          <Image
            src="/img/logo2.png"
            alt="Logo"
            className="w-[120px] mx-auto block"
            width={120}
            height={40}
            priority
          />
        }
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
      >
        {/* Main Menu Items */}
        <div className="flex flex-col space-y-2 mb-6">
          <h3 className="text-gray-400 text-sm font-semibold mb-2 px-4">
            MENU
          </h3>
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.path}
              className={`px-4 py-2 hover:bg-gray-700 cursor-pointer rounded ${
                pathname === item.path
                  ? "font-medium text-yellow-400"
                  : "text-white"
              }`}
              onClick={() => setDrawerOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-4"></div>

        {/* User Menu Items */}
        <div className=" flex-col space-y-2 hidden">
          <h3 className="text-gray-400 text-sm font-semibold mb-2 px-4">
            ACCOUNT
          </h3>
          {userMenuItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.path}
              className={`px-4 py-2 hover:bg-gray-700 cursor-pointer rounded ${
                pathname === item.path
                  ? "font-medium text-yellow-400"
                  : "text-white"
              }`}
              onClick={() => setDrawerOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Drawer>
    </header>
  );
};
