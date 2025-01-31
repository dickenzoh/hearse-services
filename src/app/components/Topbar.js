"use client";

import React from "react";
import Link from "next/link";
import { 
  TiSocialFacebookCircular, 
  TiSocialLinkedinCircular, 
  TiSocialTwitterCircular 
} from "react-icons/ti";
import { MdLocationPin, MdWhatsapp, MdPhone } from "react-icons/md";

const Topbar = () => {
  return (
    <div className="bg-gray-900 text-white px-4 md:px-12 py-2 text-sm flex flex-wrap justify-between items-center">
      
      {/* Left Side: Location Info */}
      <div className="flex items-center text-sm md:text-base">
        <MdLocationPin className="text-xl md:text-2xl text-rose-500" />
        <h1 className="font-semibold">Kodi Nairobi West</h1>
      </div>

      {/* Middle: Phone Number (Now Always Visible) */}
      <div className="flex items-center">
        <MdPhone className="text-xl md:text-2xl text-rose-500" />
        <a href="tel:+254722730560" className="font-semibold hover:text-rose-500 transition">
          +254 722 730560
        </a>
      </div>

      {/* Right Side: Social Media Links (Visible Only on md+ Screens) */}
      <div className="hidden md:flex space-x-4">
        <Link href="https://x.com/DickensKinoti" target="_blank">
          <TiSocialTwitterCircular className="text-2xl hover:text-blue-600 transition duration-300" />
        </Link>
        <Link href="https://www.linkedin.com/in/kinoti-dickens-184264123/" target="_blank">
          <TiSocialLinkedinCircular className="text-2xl hover:text-blue-700 transition duration-300" />
        </Link>
        <Link href="https://x.com/DickensKinoti" target="_blank">
          <TiSocialFacebookCircular className="text-2xl hover:text-blue-600 transition duration-300" />
        </Link>
        <Link href="https://wa.me/254705040646" target="_blank">
          <MdWhatsapp className="text-2xl hover:text-green-500 transition duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
