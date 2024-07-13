'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Imagee from './Imagee';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 bg-white shadow-md p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <div className="flex items-center space-x-4">
            <Link className="text-gray-500 hover:text-gray-900" href="/">
              Home
            </Link>
            <Link className="text-gray-500 hover:text-gray-900" href="/about">
              About
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-gray-500 hover:text-gray-900 focus:outline-none"
              >
                Content
                <svg
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    isDropdownOpen ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                  <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-200" href="/blog">
                    Blog
                  </Link>
                  <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-200" href="/news">
                    News
                  </Link>
                  <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-200" href="/article">
                    Articles
                  </Link>
                </div>
              )}
            </div>
            <Link className="text-gray-500 hover:text-gray-900" href="/contact">
              Contact
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-500 hover:text-gray-900 focus:outline-none lg:hidden"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        <div className="flex justify-center mx-auto lg:mx-0">
          <Imagee />
        </div>

        <div
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center lg:space-x-4 w-full lg:w-auto mt-4 lg:mt-0`}
        >
          <div className="flex flex-col lg:flex-row lg:space-x-2 mt-4 lg:mt-0 space-y-2 lg:space-y-0">
            <Link href="/login">
              <button className="bg-gray-800 rounded-md px-4 py-2 text-white hover:bg-gray-600">
                Login
              </button>
            </Link>
            <Link href="/addblog">
              <button className="bg-gray-800 rounded-md px-4 py-2 text-white hover:bg-gray-600">
                Create New Blog
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
