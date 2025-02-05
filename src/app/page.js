"use client"

// pages/index.js
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';

import dynamic from "next/dynamic";
import { TiSocialFacebookCircular, TiSocialLinkedinCircular, TiSocialTwitterCircular } from 'react-icons/ti';
import { MdLocationPin } from "react-icons/md";
import { MdWhatsapp } from 'react-icons/md';
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import FAQ from './components/FAQ';
import { useState } from 'react';

// Import only the FloatingWhatsApp component dynamically
const FloatingWhatsApp = dynamic(() => import("react-floating-whatsapp"), {
  ssr: false,
});

export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Topbar />
      <Navbar />
{/* Hero Section */}
<section id="hero"
  className="hero bg-gray-100 text-center md:text-left flex items-center justify-center relative px-4 md:px-12"
  style={{
    backgroundImage: 'url(/images/hero-bg.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '90vh',
  }}
>
  <div className="container mx-auto flex flex-col items-center md:items-center">
    {/* Heading */}
    <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-rose-600 leading-tight">
      Dignified Farewells, Seamlessly Delivered
    </h1>

    {/* Subtext */}
    <p className="text-sm sm:text-base md:text-lg text-gray-200 mt-4">
      Luxury and comfort for your loved one's final journey, serving families across Kenya.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
      <button
            onClick={() => setIsModalOpen(true)}
            className="bg-rose-600 border-4 border-white hover:bg-rose-700 text-white px-5 py-3 md:px-8 md:py-4 rounded-lg text-sm md:text-lg font-medium transition duration-300"
          >
            Book a Hearse Today
          </button>
      <Link href="#services">
        <h1 className="cursor-pointer bg-rose-600 border-4 border-white hover:bg-rose-700 text-white px-5 py-3 md:px-8 md:py-4 rounded-lg text-sm md:text-lg font-medium hover:bg-gray-300 transition duration-300">
          Learn More
        </h1>
      </Link>
    </div>
    {/* Modal */}
    {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold text-gray-800">Book a Hearse</h2>
            <p className="text-gray-600 mt-2">Fill in your details and we'll get back to you.</p>

            <form className="mt-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border border-gray-300 rounded-md mb-3"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-2 border border-gray-300 rounded-md mb-3"
              />
              <div className='flex space-x-4'>
              <button
                type="submit"
                className="bg-green-700 hover:border border-white-300 text-white px-4 py-2 rounded-md w-1/2"
              >
                Submit
              </button>
              <button
              onClick={() => setIsModalOpen(false)}
              className="bg-red-700 hover:border border-white-300 text-white px-4 py-2 rounded-md w-1/2"
            >
              Close
            </button>
              </div>
            </form>

            
          </div>
        </div>
      )}
  </div>
</section>

      {/* About Us Section */}
<section id='about' className="about bg-white py-16">
  <div className="container mx-auto px-6 md:px-12">
    <h2 className="text-3xl font-semibold text-gray-800 text-center">About Us</h2>

    <div className="mt-8 flex flex-col md:flex-row-reverse items-center gap-8 p-6 rounded-lg">
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hearse Service"
          width={400}
          height={250}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2">
        <p className="text-gray-600 leading-relaxed">
          We are committed to providing premium hearse services with reliability, comfort, and dignity. Our mission is to make the final journey a seamless experience for families across Kenya.
        </p>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Our fleet consists of modern, well-maintained hearses designed for a smooth and respectful journey. Whether you require transportation within the city or across the country, we ensure a professional and compassionate service.
        </p>
        <p className="mt-4 text-gray-600 leading-relaxed">
          With years of experience in the funeral transport industry, we understand the importance of honoring loved ones with the utmost care. Our dedicated team is available 24/7 to provide assistance and support.
        </p>
      </div>
    </div>
  </div>
</section>

 {/* Services Section */}
 <section id='services' className="services bg-gray-100 py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Our Services</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="service-item bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">Luxury Hearse Transport</h3>
              <p className="mt-4 text-gray-600">Experience premium transportation with our modern fleet of high-end hearses.</p>
            </div>
            <div className="service-item bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">Customized Funeral Arrangements</h3>
              <p className="mt-4 text-gray-600">Tailored services to meet your unique needs for a memorable farewell.</p>
            </div>
            <div className="service-item bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">Nationwide Availability</h3>
              <p className="mt-4 text-gray-600">Serving families across Kenya with timely and reliable services.</p>
            </div>
          </div>
        </div>
      </section>

{/* Why Choose Us Section */}
<section id='why-choose-us' className="why-choose-us bg-gray-900 text-white py-16">
  <div className="container mx-auto px-6 md:px-12 text-center">
    <h2 className="text-3xl font-semibold text-white mb-8">Why Choose Us?</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Feature 1 */}
      <div className="bg-gray-800 p-6 shadow-lg rounded-lg flex flex-col items-center hover:scale-105 transition-transform">
        <i className="fas fa-car text-4xl text-rose-500 mb-4"></i>
        <h3 className="text-lg font-semibold">Premium Fleet</h3>
        <p className="text-gray-300 text-sm mt-2">High-end hearses for a dignified and smooth journey.</p>
      </div>

      {/* Feature 2 */}
      <div className="bg-gray-800 p-6 shadow-lg rounded-lg flex flex-col items-center hover:scale-105 transition-transform">
        <i className="fas fa-hands-helping text-4xl text-rose-500 mb-4"></i>
        <h3 className="text-lg font-semibold">Compassionate Staff</h3>
        <p className="text-gray-300 text-sm mt-2">Experienced and caring professionals by your side.</p>
      </div>

      {/* Feature 3 */}
      <div className="bg-gray-800 p-6 shadow-lg rounded-lg flex flex-col items-center hover:scale-105 transition-transform">
        <i className="fas fa-gem text-4xl text-rose-500 mb-4"></i>
        <h3 className="text-lg font-semibold">Affordable Luxury</h3>
        <p className="text-gray-300 text-sm mt-2">Quality funeral transport at a fair price.</p>
      </div>

      {/* Feature 4 */}
      <div className="bg-gray-800 p-6 shadow-lg rounded-lg flex flex-col items-center hover:scale-105 transition-transform">
        <i className="fas fa-users text-4xl text-rose-500 mb-4"></i>
        <h3 className="text-lg font-semibold">Satisfied Families</h3>
        <p className="text-gray-300 text-sm mt-2">Trusted by families for excellent service.</p>
      </div>
    </div>
  </div>
</section>



      {/* Gallery Section */}
      <section id='gallery' className="gallery bg-gray-100 py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Gallery</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Image src="/images/hero-bg.jpg" alt="Gallery Image 1" width={300} height={200} className="rounded-lg" />
            <Image src="/images/gallery-1.jpg" alt="Gallery Image 2" width={300} height={200} className="rounded-lg" />
            <Image src="/images/gallery-2.jpg" alt="Gallery Image 3" width={300} height={200} className="rounded-lg" />
            <Image src="/images/gallery-3.jpg" alt="Gallery Image 1" width={300} height={200} className="rounded-lg" />
            <Image src="/images/gallery-4.jpg" alt="Gallery Image 2" width={300} height={200} className="rounded-lg" />
            <Image src="/images/hero-bg.jpg" alt="Gallery Image 1" width={300} height={200} className="rounded-lg" />
            <Image src="/images/gallery-1.jpg" alt="Gallery Image 2" width={300} height={200} className="rounded-lg" />
            <Image src="/images/gallery-2.jpg" alt="Gallery Image 3" width={300} height={200} className="rounded-lg" />
            <Image src="/images/gallery-3.jpg" alt="Gallery Image 1" width={300} height={200} className="rounded-lg" />
            <Image src="/images/gallery-4.jpg" alt="Gallery Image 2" width={300} height={200} className="rounded-lg" />
          </div>
        </div>
      </section>

      <FAQ />

    {/* Contact Us Section */}
<section id='contact' className="contact bg-gradient-to-b from-gray-100 to-gray-300 py-16">
  <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
    <h2 className="text-4xl font-bold text-gray-800 mb-6">Get in Touch</h2>
    <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl">
      Have questions or need assistance? Reach out to us, and our team will get back to you promptly.
    </p>

    <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-2xl">
      <form className="space-y-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-rose-500 focus:outline-none transition-all"
          />
        </div>

        <div className="relative">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-rose-500 focus:outline-none transition-all"
          />
        </div>

        <div className="relative">
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-rose-500 focus:outline-none transition-all"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition-transform transform hover:scale-105 shadow-lg"
          onClick={(e) => {
            e.preventDefault();
            console.log("Message sent successfully!");
          }}
        >
          Send Message
        </button>
      </form>
    </div>

    {/* Contact Information */}
<div className="mt-12 text-center space-y-3">
  
  {/* Location */}
  <div className="flex items-center justify-center space-x-2 text-lg text-gray-700">
    <MdLocationPin className="text-rose-500 text-2xl" />
    <span className="font-semibold">Nairobi, Kenya</span>
  </div>

  {/* Phone */}
  <div className="flex items-center justify-center space-x-2 text-lg text-gray-700">
    <LuPhone className="text-rose-500 text-2xl" />
    <a href="tel:+254700123456" className="font-semibold hover:text-rose-500 transition">
      +254 722 730560
    </a>
  </div>

  {/* Email */}
  <div className="flex items-center justify-center space-x-2 text-lg text-gray-700">
    <MdOutlineMail className="text-rose-500 text-2xl" />
    <a href="mailto:info@hearsecompany.com" className="font-semibold hover:text-rose-500 transition">
      info@hearsecompany.com
    </a>
  </div>

</div>

  </div>
</section>

{/* <Testimonial /> */}

{/* Footer Section */}
<footer className="bg-gray-900 text-white py-10">
  {/* Floating WhatsApp Button */}
  {/* <FloatingWhatsApp
    phoneNumber="+254722730560"
    accountName="Hearse Services Kenya"
    avatar="/avatar.png"
    statusMessage="Typically replies within 5 mins"
    chatMessage="Hello! How can we assist you with hearse services today?"
    placeholder="Type your message..."
    darkMode={false}
    notification={true}
    notificationSound={true}
    notificationDelay={5}
    styles={{
      right: "15px",
      bottom: "80px",
      width: "60px",
      height: "60px",
    }}
    buttonStyle={{
      width: "60px",
      height: "60px",
      fontSize: "14px",
    }}
  /> */}

  <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
    
    {/* 1️⃣ Company Info */}
    <div>
      <h3 className="text-2xl font-bold text-rose-500">Hearse Company</h3>
      <p className="text-gray-400 mt-2 text-sm">
        Providing dignified and professional hearse services across Kenya.
      </p>
    </div>

    {/* 2️⃣ Contact Information */}
<div className="text-center md:text-left">
  <h4 className="text-lg font-semibold text-white">Contact Us</h4>
  
  {/* Location */}
  <div className="flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-2 mt-2">
    <MdLocationPin className="text-xl text-rose-500" />
    <p className="text-gray-400">Nairobi, Kenya</p>
  </div>

  {/* Phone */}
  <p className="text-gray-400 mt-2 flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-2">
    <LuPhone className="text-xl text-rose-500" />
    <a href="tel:+254722730560" className="hover:text-rose-500 transition">
      +254 722 730560
    </a>
  </p>

  {/* Email */}
  <p className="text-gray-400 mt-2 flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-2">
    <MdOutlineMail className="text-xl text-rose-500" />
    <a href="mailto:info@hearsecompany.com" className="hover:text-rose-500 transition">
      info@hearsecompany.com
    </a>
  </p>
</div>

    {/* 3️⃣ Quick Links */}
    <div>
      <h4 className="text-lg font-semibold text-white">Quick Links</h4>
      <ul className="mt-2 space-y-2">
        <li><a href="#services" className="text-gray-400 hover:text-white transition">Our Services</a></li>
        <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
        <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
      </ul>
    </div>

    {/* 4️⃣ Social Media Links */}
    <div>
      <h4 className="text-lg font-semibold text-white">Follow Us</h4>
      <ul className="mt-2 space-y-2 sm: flex flex-col items-center md:items-start">
        <li>
          <a href="https://x.com/DickensKinoti" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
            <TiSocialTwitterCircular className="text-3xl hover:text-blue-600 transition duration-300" />
            <span className="text-gray-400 hover:text-white transition">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/kinoti-dickens-184264123/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
            <TiSocialLinkedinCircular className="text-3xl hover:text-blue-700 transition duration-300" />
            <span className="text-gray-400 hover:text-white transition">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://x.com/DickensKinoti" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
            <TiSocialFacebookCircular className="text-3xl hover:text-blue-600 transition duration-300" />
            <span className="text-gray-400 hover:text-white transition">Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://wa.me/254705040646" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
            <MdWhatsapp className="text-3xl hover:text-green-500 transition duration-300" />
            <span className="text-gray-400 hover:text-white transition">WhatsApp</span>
          </a>
        </li>
      </ul>
    </div>
  </div>

  {/* Copyright Section */}
  <div className="mt-8 text-center text-gray-500 text-sm">
    &copy; 2025 Hearse Company. All Rights Reserved.
  </div>
</footer>

    </div>
  );
}
