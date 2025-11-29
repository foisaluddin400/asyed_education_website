"use client";

import React from "react";
import { Collapse, ConfigProvider } from "antd";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import mainContactRightImage from "../../../public/img/privecy.png";
import Image from "next/image";
const Faq = () => {
  // Dummy FAQ Data
  const items = [
    {
      key: "1",
      label: (
        <span className="font-semibold text-lg">
          How do I choose the right tutor for my child?
        </span>
      ),
      children: (
        <p className="text-gray-600 leading-relaxed">
          We match your child with a tutor based on their subject needs,
          learning style, and personality. You’ll get tutor profiles to review,
          and we offer a free consultation to ensure the perfect fit.
        </p>
      ),
    },
    {
      key: "2",
      label: (
        <span className="font-semibold text-lg">
          What subjects do you offer tutoring for?
        </span>
      ),
      children: (
        <p className="text-gray-600 leading-relaxed">
          We offer tutoring in all major subjects including Math, Science,
          English, Bangla, Physics, Chemistry, Biology, ICT, and exam
          preparation (SSC, HSC, Admission Tests).
        </p>
      ),
    },
    {
      key: "3",
      label: (
        <span className="font-semibold text-lg">
          Are the classes conducted at home or online?
        </span>
      ),
      children: (
        <p className="text-gray-600 leading-relaxed">
          We provide both! You can choose <strong>at-home tutoring</strong> or{" "}
          <strong>online 1-on-1 classes</strong>
          via Zoom/Google Meet — whichever is more convenient for you.
        </p>
      ),
    },
    {
      key: "4",
      label: (
        <span className="font-semibold text-lg">
          How much does tutoring cost?
        </span>
      ),
      children: (
        <p className="text-gray-600 leading-relaxed">
          Pricing depends on the class level, subject, and tutor experience.
          Fees start from ৳4,000–৳12,000 per month. We’ll give you exact pricing
          during your free consultation.
        </p>
      ),
    },
    {
      key: "5",
      label: (
        <span className="font-semibold text-lg">
          Can I change the tutor if my child is not comfortable?
        </span>
      ),
      children: (
        <p className="text-gray-600 leading-relaxed">
          Yes, absolutely! Your satisfaction is our priority. If the tutor isn’t
          the right match, we’ll replace them at no extra cost.
        </p>
      ),
    },
    {
      key: "6",
      label: (
        <span className="font-semibold text-lg">
          Do you provide trial classes?
        </span>
      ),
      children: (
        <p className="text-gray-600 leading-relaxed">
          Yes! We offer a <strong>free demo class</strong> so your child can
          experience our teaching style before committing.
        </p>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 py-11">
      <div className="bg-gray-200 rounded-3xl overflow-hidden">
        <div className="grid md:grid-cols-2 items-center">
          {/* Left Text */}
          <div className="p-10 md:p-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              FAQ
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Seeds of Learning, we believe that clear communication builds
              trust.
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
      <div className=" ">
        <ConfigProvider
          theme={{
            components: {
              Collapse: {
                headerPadding: "20px 24px",
                contentPadding: "0 24px 24px",
                borderRadiusLG: 16,
                fontSize: 16,
                fontSizeLG: 18,
              },
            },
            token: {
              colorPrimary: "#22C55E",
              colorBorder: "#e5e7eb",
            },
          }}
        >
          <Collapse
            items={items}
            defaultActiveKey={["1"]}
            expandIconPosition="right"
            expandIcon={({ isActive }) =>
              isActive ? (
                <FaMinusCircle className="text-[#22C55E] text-2xl" />
              ) : (
                <FaPlusCircle className="text-gray-600 text-2xl" />
              )
            }
            className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200"
          />
        </ConfigProvider>
      </div>
    </div>
  );
};

export default Faq;
