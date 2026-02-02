import React from 'react';
import hero from "../../../public/img/bannar1.jpg";
import { MapPin, Calendar, Star, MousePointer2 } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden font-sans">
      {/* Background Image with Green Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero}
          alt="Hero Banner"
          fill
          priority
          className="w-full h-full object-cover"
        />

        {/* The "mix-blend-multiply" gives it that specific deep green tinted look from your image */}
        <div className="absolute inset-0 bg-[#408f55]/90 " />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center text-white flex flex-col items-center">

        {/* Announcement Banner */}
        <div className="bg-[#FFD646] text-black px-5 py-2 rounded-full font-bold text-sm md:text-base flex items-center gap-2 mb-8 shadow-lg">
          🎉 <span>Opening Wednesday, January 15th, 2025</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6 max-w-4xl tracking-tight">
          High-Quality Group Tutoring, Organized by Grade Level
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl max-w-2xl mb-12 opacity-90 leading-relaxed font-medium">
          Give your child focused small-group support, clear progress reporting,
          and all the supplemental materials they need to master their skills —
          in a structured, grade-based group setting.
        </p>

        {/* Info Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
            <MapPin size={16} className="text-green-600" />
            113 Roosevelt Rd, Villa Park, IL
          </div>
          <div className="flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
            <Calendar size={16} className="text-green-600" />
            Opening January 15th
          </div>
          <div className="flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
            <Star size={16} className="text-green-600" />
            Grade-Level · Small Group Support
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl">
            Schedule My Consultation
          </button>
          <button className="bg-white hover:bg-gray-100 text-green-700 px-12 py-4 rounded-xl font-bold text-lg transition-all shadow-xl">
            View Pricing
          </button>
        </div>

        {/* Scroll Indicator */}
       <div className='mt-4'>
            <div className="absolute bottom-10 left-1/2 animate-float opacity-80 ">
          {/* Mouse Frame */}
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-scroll"></div>
          </div>
        </div>
       </div>
      </div>
    </section>
  );
};

export default Hero;























// import Image from "next/image";
// import hero from "../../../public/img/bannar1.jpg";
// import icon1 from "../../../public/img/icon1.png";
// import icon2 from "../../../public/img/icon2.png";
// import icon3 from "../../../public/img/icon4.png";
// import { FaArrowRight } from "react-icons/fa";
// import Link from "next/link";

// const Hero = () => {
//   return (
//     <div>
//       <div className="relative  w-full h-[500px] md:h-[650px] overflow-hidden">
//         {/* Background Image using Next/Image */}
//         <Image
//           src={hero}
//           alt="Hero Banner"
//           fill
//           priority
//           className="object-cover object-center"
//         />

//         {/* Gradient Overlay */}
//         <div className="absolute  inset-0 bg-gradient-to-r from-primary  to-[#000000b9] opacity-80"></div>

//         {/* Content */}
//         <div className="relative px-3  flex items-center h-full container m-auto text-white">
//           <div>
//             <h1 className=" leading-tight">
//               <span className="md:text-5xl text-3xl">
//                 Smart, Trusted Tutoring <br /> for Every Student
//               </span>{" "}
//               <br />
//               <p className="py-3">
//                 Track Your Child’s Learning Journey – Book Tutors, View
//                 Progress, Stay Connected
//               </p>
//             </h1>

//             <div className="mt-11 flex gap-2">
//               <Link href={'/'}><button
//                 className="
//               relative overflow-hidden
//               md:px-6 px-2 md:py-3 py-1 md:text-lg rounded-full
//               flex items-center gap-3
//               bg-accent text-white
//               transition-all duration-300
//               group
//             "
//               >
//                 <span className="relative z-10">Book Consultation</span>

//                 {/* Hover Green Animation Layer */}
//                 <span
//                   className="
//                 absolute inset-0
//                 bg-primary
//                 translate-x-[-101%]
//                 group-hover:translate-x-0
//                 transition-transform duration-500
//                 rounded-full
//               "
//                 ></span>
//               </button></Link>
//               <button
//                 className="
//               relative overflow-hidden
//               md:px-6 md:py-3 py-1 px-3 md:text-lg rounded-full
//               flex items-center gap-3
//               bg-transparent border border-white
//               transition-all duration-300
//               group
//             "
//               >
//                 <span className="relative z-10">Learn More</span>

//                 {/* Hover Green Animation Layer */}
//                 <span
//                   className="
//                 absolute inset-0
//                 bg-accent
//                 border border-transparent
//                 translate-x-[-101%]
//                 group-hover:translate-x-0
//                 transition-transform duration-500
//                 rounded-full
//               "
//                 ></span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container mt-11 rounded-md text-white bg-primary m-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-7 px-5">
//         {/* Single Feature Item */}
//         <div className="flex items-start gap-4">
//           <div className="bg-[#148878] p-5 rounded-full">
//             <Image src={icon1} alt="icon1" width={60} height={60} />
//           </div>
//           <div className="flex flex-col gap-2">
//             <h1 className="text-xl font-semibold">Learn The Latest Skills</h1>
//             <p className="text-white">
//               Contrary to popular belief, Lorem Ipsum is not simply random text.
//               It has roots in a BC, making it over 2000 years old.
//             </p>
//           </div>
//         </div>

//         {/* Feature 2 */}
//         <div className="flex items-start gap-4">
//           <div className="bg-[#148878] p-5 rounded-full">
//             <Image src={icon2} alt="icon1" width={60} height={60} />
//           </div>
//           <div className="flex flex-col gap-2">
//             <h1 className="text-xl font-semibold">Get Ready For a Career</h1>
//             <p className="text-white">
//               Contrary to popular belief, Lorem Ipsum is not simply random text.
//               It has roots in a BC, making it over 2000 years old.
//             </p>
//           </div>
//         </div>

//         {/* Feature 3 */}
//         <div className="flex items-start gap-4">
//           <div className="bg-[#148878] p-5 rounded-full">
//             <Image src={icon3} alt="icon1" width={60} height={60} />
//           </div>
//           <div className="flex flex-col gap-2">
//             <h1 className="text-xl font-semibold">Earn a Certificate</h1>
//             <p className="text-white">
//               Contrary to popular belief, Lorem Ipsum is not simply random text.
//               It has roots in a BC, making it over 2000 years old.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


