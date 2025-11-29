import React from "react";
import icon1 from "../../../../public/img/icon1.png";
import icon2 from "../../../../public/img/icon2.png";
import icon3 from "../../../../public/img/icon4.png";
import background from "../../../../public/img/back.png";
import service1 from "../../../../public/img/service1.jpg";
import service2 from "../../../../public/img/service2.jpg";
import service3 from "../../../../public/img/service3.jpg";
import hero from "../../../../public/img/bannar1.jpg";
import Image from "next/image";
import aboutDetails from "../../../../public/img/aboutDetsils.png";
import { GoArrowRight } from "react-icons/go";
import { RiArrowRightWideLine } from "react-icons/ri";
const page = () => {
  const services = [
    {
      title: "At Home Tutoring",
      img: service1,
      list: [
        "Parent Consultation",
        "Academic Assessment",
        "Personalized Report & Lesson Plan",
        "Scheduling & Setup",
        "Progress Reporting",
      ],
    },
    {
      title: "Group Tutoring",
      img: service2,
      list: [
        "Parent Consultation",
        "Academic Assessment",
        "Personalized Report & Lesson Plan",
        "Scheduling & Setup",
        "Progress Reporting",
      ],
    },
    {
      title: "1-on-1 Tutoring",
      img: service3,
      list: [
        "Parent Consultation",
        "Academic Assessment",
        "Personalized Report & Lesson Plan",
        "Scheduling & Setup",
        "Progress Reporting",
      ],
    },
  ];

  const subject = [
    {
      title: "At Home Tutoring",

      list: [
        "Parent Consultation",
        "Academic Assessment",
        "Personalized Report & Lesson Plan",
        "Scheduling & Setup",
        "Progress Reporting",
      ],
    },
    {
      title: "Group Tutoring",

      list: [
        "Parent Consultation",
        "Academic Assessment",
        "Personalized Report & Lesson Plan",
        "Scheduling & Setup",
        "Progress Reporting",
      ],
    },
    {
      title: "1-on-1 Tutoring",

      list: [
        "Parent Consultation",
        "Academic Assessment",
        "Personalized Report & Lesson Plan",
        "Scheduling & Setup",
        "Progress Reporting",
      ],
    },
  ];

  return (
    <div className="mb-20">
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
        <div className="relative px-3 flex items-center h-full container m-auto text-white">
          <div>
            <h1 className=" leading-tight">
              <span className="md:text-5xl text-3xl">At-Home Tutoring</span> <br />
              <p className="py-3 max-w-2xl text-gray-400">
                One-on-one and group tutoring sessions tailored to each
                student’s learning style and pace. Our expert tutors create
                customized lesson plans to strengthen weak areas and enhance
                academic performance.
              </p>
            </h1>

            <div className="mt-11 ">
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
                <span className="relative z-10  flex items-center gap-1">
                  Home <RiArrowRightWideLine className=" " /> Blogs{" "}
                  <RiArrowRightWideLine className=" " /> Blog Details
                </span>

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
      <div className="container mt-11 rounded-md  m-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-7 md:px-5 px-3">
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
              At Seeds of Learning, our purpose is to nurture every learner’s
              potential through personalized education, guidance, and
              mentorship. We believe that every child deserves the right tools
              and environment to grow academically and personally.
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
              What began as a simple vision to make learning more meaningful has
              grown into a trusted educational community. Over the years, we’ve
              partnered with dedicated tutors, passionate parents, and motivated
              stud
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
              Our foundation is built on trust, excellence, and compassion. We
              combine academic expertise with human understanding to make
              learning both effective and enjoyable. By focusing on holistic
              growth, we aim to instill values, disci
            </p>
          </div>
        </div>
      </div>

      <div
        className="py-11 mt-16 bg-cover bg-center"
        style={{
          backgroundImage: `url(${background.src})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-3">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="md:text-4xl text-3xl font-bold text-white">Our Service</h2>
            <p className="text-gray-300 mt-2 max-w-xl mx-auto">
              Easily find and book qualified tutors by subject, grade level, and
              availability.
            </p>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-2xl overflow-hidden border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Top Image */}
                <div className="h-48 w-full">
                  <Image
                    src={service.img}
                    alt={service.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Image src={icon1} alt="icon" width={40} height={40} />
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>

                  <ul className="text-gray-600 space-y-2 text-sm mb-5">
                    {service.list.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span>•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 mt-11">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="md:text-4xl text-3xl font-bold text-gray-900">Our Service</h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            Easily find and book qualified tutors by subject, grade level, and
            availability.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {subject.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-2xl overflow-hidden border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Image src={icon1} alt="icon" width={40} height={40} />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>

                <ul className="text-gray-600 space-y-2 text-sm mb-5">
                  {service.list.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span>•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-green-50 mt-11">
        <div className="md:grid grid-cols-2 gap-6 px-4 p-5">
          <div className="bg-white p-5 flex items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Why Families Love At-Home Tutoring
              </h3>
              <ul className="space-y-5 text-lg text-gray-700 mt-6">
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 mt-1">•</span>
                  <p>
                    <strong>Convenience:</strong> Learning happens on your
                    schedule, in your home.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 mt-1">•</span>
                  <p>
                    <strong>Comfort:</strong> Students feel more relaxed and
                    confident in a familiar setting.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 mt-1">•</span>
                  <p>
                    <strong>Consistency:</strong> The same tutor works with your
                    child each week for long-term growth.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 mt-1">•</span>
                  <p>
                    <strong>Personalization:</strong> Each lesson is tailored to
                    your child’s goals, pace, and learning style.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image src={aboutDetails} alt="icon" width={600} height={50} />
          </div>
        </div>
      </div>
      <div className="md:mt-11 mt-5 flex justify-center">
        <button
          className="
                      relative overflow-hidden 
                      px-6 py-3 text-lg rounded-full 
                      flex items-center gap-3 
                      bg-primary border border-white text-white
                      transition-all duration-300
                      group
                    "
        >
          <span className="relative z-10  flex items-center gap-1">
            Book Consultaion
          </span>

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
  );
};

export default page;
