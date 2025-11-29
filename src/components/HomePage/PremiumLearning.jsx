import React from "react";
import leftImage from "../../../public/img/leftImage.png";
import icon from "../../../public/img/ic.png";
import icon1 from "../../../public/img/ic2.png";
import Image from "next/image";
const PremiumLearning = () => {
  return (
    <div className="bg-green-50">
      <div className="grid grid-cols-2 gap-4 container m-auto py-8 px-5">
        <div>
          <Image
            className=""
            src={leftImage}
            alt="leftImage"
            width={400}
            height={400}
          />
        </div>
        <div className="flex items-center">
          <div>
            <h1 className="text-6xl mb-4">
              Premium <span className="text-primary">Learning</span> Experience
            </h1>
            <div className="flex gap-2 items-center">
              <Image src={icon} alt="icon" width={60} height={60} />
              <div>
                <h1 className="font-semibold text-base">Easily Accessible</h1>
                <p className="text-gray-500">
                  Learning will fell very comfortable with Courslab
                </p>
              </div>
            </div>
            <div className="flex gap-2 mt-3 items-center">
              <Image src={icon1} alt="icon" width={60} height={60} />
              <div>
                <h1 className="font-semibold text-base">Fun learning expe</h1>
                <p className="text-gray-500">
                  Learning will fell very comfortable with Courslab
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumLearning;
