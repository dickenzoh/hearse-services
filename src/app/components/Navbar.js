"use client"

import Link from 'next/link';
import { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" scroll={false}>
              <h1 className="text-2xl font-bold">Hearse Services</h1>
            </Link>
          </div>

          {/* Menu toggle for mobile */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex md:space-x-6">
            
            <Link href="#hero" scroll={false}>
              <h1 className="hover:text-blue-400">Home</h1>
            </Link>
            <Link href="#about" scroll={false}>
              <h1 className="hover:text-blue-400">About</h1>
            </Link>
            <Link href="#services" scroll={false}>
              <h1 className="hover:text-blue-400">Services</h1>
            </Link>
            <Link href="#contact" scroll={false}>
              <h1 className="hover:text-blue-400">Contact</h1>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/">
              <h1 className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Home</h1>
            </Link>
            <Link href="/about">
              <h1 className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">About</h1>
            </Link>
            <Link href="/services">
              <h1 className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Services</h1>
            </Link>
            <Link href="/contact">
              <h1 className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Contact</h1>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
