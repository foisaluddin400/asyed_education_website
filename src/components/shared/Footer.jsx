// 'use client';
// import Image from "next/image";
// import Link from "next/link";
// import { CiMail } from "react-icons/ci";
// import React from "react";
// import { FiPhone } from "react-icons/fi";
// import { useGetContactQuery } from "@/redux/Api/blogApi";

// export default function Footer() {

//   const { data: contactData } = useGetContactQuery();

//   const contactInfo = contactData?.data || {};
//   const email = contactInfo.email
//   const phone = contactInfo.phone
//   console.log("Email:", email, phone);

//   return (
//     <div className="">

//       <div
//         className="bg-black text-white;
// "
//       >
      
//         <footer className="md:grid md:grid-cols-3 gap-6 text-white p-2 md:p-10">
//           <aside>
//             <Image
//               src="/img/image.png"
//               className="w-[250px] object-cover mb-5"
//               width={100}
//               height={50}
//               alt="logo"
//             />
//             <p className="text-slate-200 pr-11">
//               Shop the latest trends at our e-commerce store. Enjoy fast
//               shipping, secure payments, and 24/7 customer support. Discover
//               unbeatable deals on fashion, electronics, home essentials, and
//               more. Shop now!
//             </p>
//           </aside>

//           <nav className="flex flex-col space-y-5 text-neutral-300 py-11 md:py-0">
//             <h6 className="text-2xl text-white">Information</h6>
//             <Link href="about_us">
//               <h1 className=" link-hover">About Us</h1>
//             </Link>
//             <Link href="/contactUs">
//               <h1 className=" link-hover">Contact Us</h1>
//             </Link>
//             <Link href="/privacy">
//               <h1 className=" link-hover">Privacy & Policy</h1>
//             </Link>
//             <Link href="/terms">
//               <h1 className=" link-hover">Terms & Condition</h1>
//             </Link>
//             <Link href="/faq">
//               <h1 className=" link-hover">Faq</h1>
//             </Link>
//           </nav>
//           <nav className="space-y-5 text-neutral-300">
//             <h6 className="text-2xl text-white">Help & Support</h6>
//             <a className=" link-hover flex gap-2  font-medium">
//               <CiMail className="text-2xl" />
//               Email:{" "}
//               <div>
//                 <span>{email}</span>

//               </div>
//             </a>
//             <a className=" link-hover flex gap-2  font-medium">
//               <FiPhone className="text-2xl" />
//               Phone:{" "}
//               <div>
//                 <span>{phone}</span>

//               </div>
//             </a>
//           </nav>
//         </footer>
//       </div>
//     </div>
//   );
// }








'use client';
import Image from "next/image";
import Link from "next/link";
import { CiMail } from "react-icons/ci";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { useGetContactQuery } from "@/redux/Api/blogApi";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";



// Reusable Social Icon Component
const SocialIcon = ({ href, icon: Icon }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
  >
    <Icon className="w-5 h-5" />
  </Link>
);

export const Footer = () => {
  const { data: contactData } = useGetContactQuery();

  const contactInfo = contactData?.data || {};
  const email = contactInfo.email
  const phone = contactInfo.phone
  console.log("Email:", email, phone);
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16 ">
      <div className="container mx-auto px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Logo & About - Wider column */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-6">
                <Image
              src="/img/image.png"
              className="w-[250px] object-cover mb-5"
              width={700}
              height={500}
              alt="logo"
            />
            </Link>
           
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
             Learning Education made easy and accessible for all. Explore our diverse courses and expert instructors to unlock your potential today.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>{email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>{phone}</span>
              </div>
              {/* <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{contactData?.data?.City}, {contactData?.data?.State}, {contactData?.data?.Country}</span>
              </div> */}
            </div>
          </div>

         
          {/* Account Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-6 text-white">Account</h3>
            <ul className="space-y-4">
          
             
              <li>
                <Link href="/contactUs" className="text-gray-400 hover:text-primary transition-colors duration-200">
                 Contact Us
                </Link>
              </li>
             
               <li>
                <Link href="/faq" className="text-gray-400 hover:text-primary transition-colors duration-200">
                Faq
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
                  <li>
                <Link href="/about_us" className="text-gray-400 hover:text-primary transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-primary transition-colors duration-200">
                  Privacy & Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-primary transition-colors duration-200">
                 Terms & Condition
                </Link>
              </li>
             
            </ul>
          </div>

          {/* Social Links Only */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-semibold mb-6 text-white">Follow Us</h3>
            <p className="text-gray-400 mb-8">Connect with us on social media for the latest designs and updates.</p>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <SocialIcon href="https://facebook.com" icon={Facebook} />
              <SocialIcon href="https://twitter.com" icon={Twitter} />
              <SocialIcon href="https://instagram.com" icon={Instagram} />
              <SocialIcon href="https://linkedin.com" icon={Linkedin} />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Education Learning. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
