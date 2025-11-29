import React from "react";
import leftImage from "../../../public/img/service2.jpg";
import Image from "next/image";
import images from "../../../public/img/leftImage.png";
import icon from "../../../public/img/ic.png";
import icon1 from "../../../public/img/ic2.png";
const Test = () => {
  return (
    <div className=" mt-44">
      <div className="relative">
        <div className="absolute bottom-0 ml-40">
          <Image
            className="rounded-full w-[600px] h-[600px] object-cover border-[10px] border-white"
            src={leftImage}
            alt="leftImage"
            width={1500}
            height={900}
          />
        </div>

        <div className="flex container ml-auto justify-end">
          <div className=" w-[90%] right-0 justify-end">
            <div>
              <div className="max-w-4xl m-auto">
                <h1 className="text-primary text-3xl">get to know us</h1>
              <h1 className="text-6xl max-w-4xl font-bold m-auto">
                Don’t Know How To Start Quiklearn Courses
              </h1>
              <p>
                We don’t just work with concrete and steel. We work with people
                We are Approachable, with even our highest work
              </p>
              </div>

              <div className="bg-[#241442] text-white py-8 px-5 flex justify-center items-center gap-6">
                <Image
                  className="rounded-full w-[200px] "
                  src={images}
                  alt="leftImage"
                  width={1500}
                  height={900}
                />
                <div className="">
                  <h1 className="text-4xl mb-4">
                    Premium <span className="text-primary">Learning</span>{" "}
                    Experience
                  </h1>
                  <div className="flex gap-2 items-center">
                    <Image src={icon} alt="icon" width={60} height={60} />
                    <div>
                      <h1 className="font-semibold text-base">
                        Easily Accessible
                      </h1>
                      <p className="text-gray-500">
                        Learning will fell very comfortable with Courslab
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-3 items-center">
                    <Image src={icon1} alt="icon" width={60} height={60} />
                    <div>
                      <h1 className="font-semibold text-base">
                        Fun learning expe
                      </h1>
                      <p className="text-gray-500">
                        Learning will fell very comfortable with Courslab
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
