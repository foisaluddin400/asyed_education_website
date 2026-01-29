'use client'
import Image from "next/image";
import hero from "../../../public/img/bannar1.jpg";
import icon1 from "../../../public/img/icon1.png";
import icon2 from "../../../public/img/icon2.png";
import icon3 from "../../../public/img/icon4.png";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <div>
      <div className="relative  w-full h-[500px] md:h-[650px] overflow-hidden">
        {/* Background Image using Next/Image */}
        <Image
          src={hero}
          alt="Hero Banner"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Gradient Overlay */}
        <div className="absolute  inset-0 bg-gradient-to-r from-primary  to-[#000000b9] opacity-80"></div>

        {/* Content */}
        <div className="relative px-3  flex items-center h-full container m-auto text-white">
          <div>
            <h1 className=" leading-tight">
              <span className="md:text-5xl text-3xl">
                Smart, Trusted Tutoring <br /> for Every Student
              </span>{" "}
              <br />
              <p className="py-3">
                Track Your Child’s Learning Journey – Book Tutors, View
                Progress, Stay Connected
              </p>
            </h1>

            <div className="mt-11 flex gap-2">
          <button
           onClick={() => router.push('/appartmentBooking')}
                className="
              relative overflow-hidden 
              md:px-6 px-2 md:py-3 py-1 md:text-lg rounded-full 
              flex items-center gap-3 
              bg-accent text-white
              transition-all duration-300
              group
            "
              >
                <span className="relative z-10">Book Consultation</span>

                {/* Hover Green Animation Layer */}
                <span
                  className="
                absolute inset-0 
                bg-primary  
                translate-x-[-101%] 
                group-hover:translate-x-0 
                transition-transform duration-500 
                rounded-full
              "
                ></span>
              </button>
              <button
                className="
              relative overflow-hidden 
              md:px-6 md:py-3 py-1 px-3 md:text-lg rounded-full 
              flex items-center gap-3 
              bg-transparent border border-white
              transition-all duration-300
              group
            "
              >
                <span className="relative z-10">Learn More</span>

                {/* Hover Green Animation Layer */}
                <span
                  className="
                absolute inset-0 
                bg-accent
                border border-transparent 
                translate-x-[-101%] 
                group-hover:translate-x-0 
                transition-transform duration-500 
                rounded-full
              "
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-11 rounded-md text-white bg-primary m-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-7 px-5">
        {/* Single Feature Item */}
        <div className="flex items-start gap-4">
          <div className="bg-[#148878] p-5 rounded-full">
            <Image src={icon1} alt="icon1" width={60} height={60} />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold">Learn The Latest Skills</h1>
            <p className="text-white">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a BC, making it over 2000 years old.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-start gap-4">
          <div className="bg-[#148878] p-5 rounded-full">
            <Image src={icon2} alt="icon1" width={60} height={60} />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold">Get Ready For a Career</h1>
            <p className="text-white">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a BC, making it over 2000 years old.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-start gap-4">
          <div className="bg-[#148878] p-5 rounded-full">
            <Image src={icon3} alt="icon1" width={60} height={60} />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold">Earn a Certificate</h1>
            <p className="text-white">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a BC, making it over 2000 years old.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
