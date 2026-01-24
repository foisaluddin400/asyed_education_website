"use client";

import React from "react";
import { Collapse, ConfigProvider } from "antd";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import mainContactRightImage from "../../../public/img/privecy.png";
import Image from "next/image";
import { useGetAllFaqQuery } from "@/redux/Api/legalApi";
const Faq = () => {
  const { data: faqData, isLoading } = useGetAllFaqQuery();
  const faqDataContent = faqData?.data;

  const items = faqDataContent?.map((item) => ({
    key: item?._id,
    label: (
      <span className="font-semibold text-lg">
        {item?.question}
      </span>
    ),
    children: (
      <div className="text-gray-600 leading-relaxed">
        {item?.answer}
      </div>
    ),
  })) || [];


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
