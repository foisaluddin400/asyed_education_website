import Image from "next/image";
import background from "../../../public/img/background.png";
import service1 from "../../../public/img/service1.jpg";
import service2 from "../../../public/img/service2.jpg";
import service3 from "../../../public/img/service3.jpg";
import service4 from "../../../public/img/service4.jpg";
import icon from "../../../public/img/icon1.png";
import { FaArrowRight } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

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
  {
    title: "Online Tutoring",
    img: service4,
    list: [
      "Parent Consultation",
      "Academic Assessment",
      "Personalized Report & Lesson Plan",
      "Scheduling & Setup",
      "Progress Reporting",
    ],
  },
];

export default function OurServices() {
  return (
    <div
      className="md:py-36 py-16 md:mt-16 bg-cover bg-center"
      style={{
        backgroundImage: `url(${background.src})`,
      }}
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="md:text-4xl text-3xl font-bold text-gray-900">Our Service</h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            Easily find and book qualified tutors by subject, grade level, and
            availability.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <Image src={icon} alt="icon" width={40} height={40} />
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

                <div className="relative">
                  <div className="bg-[#c3e2c9] rounded-full w-[43px]  h-[43px]"></div>
                  <Link href={'/our_services/servicesDetails'}><button className=" absolute top-2 flex gap-2 items-center left-4 z-10">
                    Read More <GoArrowRight className=" " />
                  </button></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
