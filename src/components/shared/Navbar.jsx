"use client";
import React, { useState } from "react";
import { Search, ShoppingCart, User, ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Drawer, Modal } from "antd";
import Image from "next/image";
import { FaArrowRight, FaTwitter, FaYoutube } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { CiPhone } from "react-icons/ci";
import { IoMailUnreadOutline } from "react-icons/io5";
import { IoIosHome } from "react-icons/io";
import { useGetContactQuery } from "@/redux/Api/blogApi";
import { useRouter } from "next/navigation";

import Script from "next/script";
export const Navbar = () => {
  const router = useRouter();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { data: contactData } = useGetContactQuery();

  const contactInfo = contactData?.data || {};
  const email = contactInfo.email;
  const phone = contactInfo.phone;

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about_us" },
    {
      label: "Our Services",
      path: "/our_services",
      children: [
        { label: "Group Tutoring", path: "/our_services/group-tutoring" },
        { label: "1-on-1 Tutoring", path: "/our_services/one-on-one-tutoring" },
        { label: "At Home Tutoring", path: "/our_services/at-home-tutoring" },
      ],
    },
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
  const openLogin = () => {
    if (typeof window !== "undefined" && window.TutorBirdWidget) {
      window.TutorBirdWidget.open("login");
    }
  };

  return (
    <header className="w-full">
      {/* Top Banner */}
      <div className="bg-primary border-b border-gray-400 text-white py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          <div></div>
          <div className="hidden md:block">
            <div className="flex gap-6 lg:gap-11 flex-wrap justify-center">
              <div className="flex items-center gap-3">
                <div className="bg-stone-900 text-white w-[40px] h-[40px] flex justify-center text-3xl items-center rounded-full">
                  <IoMailUnreadOutline />
                </div>
                <div>
                  <h1 className="text-sm lg:text-sm">Email Us Anytime</h1>
                  <h1 className="font-semibold text-sm lg:text-sm">{email}</h1>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-stone-900 text-white w-[40px] h-[40px] flex justify-center text-3xl items-center rounded-full">
                  <CiPhone />
                </div>
                <div>
                  <h1 className="text-sm">Call Us Anytime</h1>
                  <h1 className="font-semibold text-sm">{phone}</h1>
                </div>
              </div>
              <div>
            
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" ">
        <div className="  text-black">
          <div className="container mx-auto px-4">
            <nav className="flex items-center  py-3">
              <div className="flex w-full items-center space-x-4 lg:space-x-8">
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

                {/* Desktop Menu Items */}
                <div className="hidden lg:flex w-full items-center space-x-8">
                  {navItems.map((item, idx) => (
                    <div key={idx} className="relative group">
                      <Link
                        href={item.path || "#"}
                        className={`px-2 py-1 transition-colors ${
                          pathname === item.path
                            ? "border-b text-accent border-accent font-medium"
                            : "text-black hover:text-black"
                        }`}
                      >
                        {item.label}
                        {item.children && (
                          <ChevronDown className="inline ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
                        )}
                      </Link>

                      {/* Dropdown - only if has children */}
                      {item.children && (
                        <div
                          className="
            absolute left-0 top-full pt-2 
            opacity-0 invisible group-hover:opacity-100 group-hover:visible
            transition-all duration-200
            z-50 min-w-[220px]
          "
                        >
                          <div className="bg-white shadow-xl rounded-md border border-gray-200 py-2 text-sm">
                            {item.children.map((child, childIdx) => (
                              <Link
                                key={childIdx}
                                href={child.path}
                                className="
                  block px-5 py-2.5 
                  text-gray-800 hover:bg-gray-50 hover:text-accent
                  transition-colors
                "
                                onClick={() => {
                                  // optional: close mobile drawer if needed
                                }}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                   <button
                  onClick={() => router.push("/student-login")}
                  className="
        relative overflow-hidden 
        px-6 py-3 text-lg rounded-full 
        flex items-center gap-3 
        bg-accent text-white
        transition-all duration-300
        group
      "
                >
                  <span className="relative z-10">Login</span>
                  <FaArrowRight className="relative z-10" />

                  <span
                    className="
          absolute inset-0 
          bg-primary  
          translate-x-[-102%] 
          group-hover:translate-x-0 
          transition-transform duration-500 
          rounded-full
        "
                  />
                </button>
              </div>

              <div className="flex items-center gap-4 lg:hidden">
                {/* Desktop User Dropdown */}
                <div className="hidden lg:block relative">
                  <button
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#036659] transition-colors"
                  >
                    <Menu className="w-6 h-6 text-black" />
                  </button>

                  {userDropdownOpen && (
                    <>
           
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setUserDropdownOpen(false)}
                      ></div>

     
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
                  className="lg:hidden text-black"
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
                  : "text-black"
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
                  : "text-black"
              }`}
              onClick={() => setDrawerOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Drawer>

      <Modal
        open={loginOpen}
        onCancel={() => setLoginOpen(false)}
        footer={null}
        width={420}
        centered
      >
        <h2 className="text-xl font-semibold mb-4 text-center">
          Student Login
        </h2>

        {/* TutorBird Widget loads here */}
        {scriptLoaded && (
          <Script
            src="https://app.tutorbird.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9wTFpKUCIsIldlYnNpdGVJRCI6Indic181WnRKNyIsIldlYnNpdGVCbG9ja0lEIjoid2JiX21jY1hKRyJ9"
            strategy="afterInteractive"
          />
        )}
      </Modal>
    </header>
  );
};
