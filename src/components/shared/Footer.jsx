import Image from "next/image";
import Link from "next/link";
import { CiMail } from "react-icons/ci";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { useGetContactQuery } from "@/redux/Api/blogApi";
export default function Footer() {

  const { data: contactData } = useGetContactQuery();

  const contactInfo = contactData?.data || {};
  const email = contactInfo.email
  const phone = contactInfo.phone
  console.log("Email:", email, phone);

  return (
    <div className="">
      <div
        className="bg-black text-white;
"
      >
        <footer className="md:grid md:grid-cols-3 gap-6 text-white p-10">
          <aside>
            <Image
              src="/img/image.png"
              className="w-[250px] object-cover mb-5"
              width={100}
              height={50}
              alt="logo"
            />
            <p className="text-slate-200 pr-11">
              Shop the latest trends at our e-commerce store. Enjoy fast
              shipping, secure payments, and 24/7 customer support. Discover
              unbeatable deals on fashion, electronics, home essentials, and
              more. Shop now!
            </p>
          </aside>

          <nav className="flex flex-col space-y-5 text-neutral-300 py-11 md:py-0">
            <h6 className="text-2xl text-white">Information</h6>
            <Link href="about_us">
              <h1 className=" link-hover">About Us</h1>
            </Link>
            <Link href="/contactUs">
              <h1 className=" link-hover">Contact Us</h1>
            </Link>
            <Link href="/privacy">
              <h1 className=" link-hover">privacy & Policy</h1>
            </Link>
            <Link href="/terms">
              <h1 className=" link-hover">Terms & Condition</h1>
            </Link>
            <Link href="/faq">
              <h1 className=" link-hover">Faq</h1>
            </Link>
          </nav>
          <nav className="space-y-5 text-neutral-300">
            <h6 className="text-2xl text-white">Help & Support</h6>
            <a className=" link-hover flex gap-2  font-medium">
              <CiMail className="text-2xl" />
              Email:{" "}
              <div>
                <span>{email}</span>

              </div>
            </a>
            <a className=" link-hover flex gap-2  font-medium">
              <FiPhone className="text-2xl" />
              Phone:{" "}
              <div>
                <span>{phone}</span>

              </div>
            </a>
          </nav>
        </footer>
      </div>
    </div>
  );
}
