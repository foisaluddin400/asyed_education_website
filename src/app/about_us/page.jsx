import Image from "next/image";
import React from "react";
import hero from "../../../public/img/bannar1.jpg";
import about1 from "../../../public/img/about1.jpg";
import about2 from "../../../public/img/about2.jpg";
import about3 from "../../../public/img/about3.jpg";
import icon1 from "../../../public/img/icon1.png";
import icon2 from "../../../public/img/icon2.png";
import icon3 from "../../../public/img/icon4.png";
const page = () => {
  return (
    <div>
      <div className="relative w-full h-[500px] md:h-[650px] overflow-hidden">
        {/* Background Image using Next/Image */}
        <Image
          src={hero}
          alt="Hero Banner"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary  to-[#000000b9] opacity-90"></div>

        {/* Content */}
        <div className="relative   flex items-center h-full container m-auto text-white">
          <div>
            <h1 className=" leading-tight">
              <span className="text-5xl">
                Smart, Trusted Tutoring <br /> for Every Student
              </span>{" "}
              <br />
              <p className="py-3">
                Track Your Child’s Learning Journey – Book Tutors, View
                Progress, Stay Connected
              </p>
            </h1>

            <div className="mt-11 flex gap-4">
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
                <span className="relative z-10">Book Free Consultation</span>

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
                      px-6 py-3 text-lg rounded-full 
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
      <div className="bg-green-50 ">
        <div className=" grid grid-cols-2 gap-4 container m-auto my-20 py-11">
          <div>
            <Image
              className="h-[300px] object-cover pb-4"
              src={about1}
              alt="about1"
              width={1920}
              height={1080}
            />
            <div className="grid grid-cols-2 gap-4">
              <Image src={about2} alt="about1" width={1920} height={1080} />
              <Image src={about3} alt="about1" width={1920} height={1080} />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold mb-3">
              About Seeds of Learning
            </h1>

            <p>
              Seeds of Learning is an innovative educational platform dedicated
              to helping students reach their full potential through
              personalized tutoring, mentorship, and academic support. We
              believe that every learner is unique, and our approach focuses on
              creating customized learning experiences that build confidence,
              curiosity, and lifelong learning skills. With a team of passionate
              educators and mentors, we aim to bridge the gap between
              traditional education and modern learning needs. Whether it’s
              improving grades, mastering new skills, or preparing for academic
              success, we’re here to guide every step of the way. At Seeds of
              Learning, we don’t just teach — we help students grow, thrive, and
              succeed for life.With a team of passionate educators and mentors,
              we aim to bridge the gap between traditional education and modern
              learning needs. Whether it’s improving grades, mastering new
              skills, or preparing for academic success, we’re here to guide
              every step of the way. At Seeds of Learning, we don’t just teach —
              we help students grow, thrive, and succeed for life.With a team of
              passionate educators and mentors, we aim to bridge the gap between
              traditional education and modern learning needs. Whether it’s
              improving grades, mastering new skills, or preparing for academic
              success, we’re here to guide every step of the way. At Seeds of
              Learning, we don’t just teach — we help students grow, thrive, and
              succeed for life.
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-11 rounded-md  m-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-7 px-5">
        {/* Single Feature Item */}
        <div className="text-center border p-6 rounded-lg  hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center justify-center">
            <div className="bg-[#e2f1ef] mb-4 p-4 rounded-full">
              <Image src={icon1} alt="icon1" width={40} height={40} />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Our Purpose</h1>
            <p className="text-gray-400">
          At Seeds of Learning, our purpose is to nurture every learner’s potential through personalized education, guidance, and mentorship. We believe that every child deserves the right tools and environment to grow academically and personally. 
            </p>
          </div>
        </div>

        {/* Feature 2 */}
         <div className="text-center border p-6 rounded-lg  hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center justify-center">
            <div className="bg-[#f1ede2] mb-4 p-4 rounded-full">
              <Image src={icon2} alt="icon1" width={40} height={40} />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Our Journey</h1>
            <p className="text-gray-400">
              What began as a simple vision to make learning more meaningful has grown into a trusted educational community. Over the years, we’ve partnered with dedicated tutors, passionate parents, and motivated stud
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="text-center border p-6 rounded-lg  hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center justify-center">
            <div className="bg-[#e5e2f1] mb-4 p-4 rounded-full">
              <Image src={icon3} alt="icon1" width={40} height={40} />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Our Foundation</h1>
            <p className="text-gray-400">
              Our foundation is built on trust, excellence, and compassion. We combine academic expertise with human understanding to make learning both effective and enjoyable. By focusing on holistic growth, we aim to instill values, disci
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
