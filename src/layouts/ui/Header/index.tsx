"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {}

const Header = (props: Props) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // 🛠️ Thêm dòng này để fix lỗi
  const [activeSection, setActiveSection] = useState('');
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav
        className={`  fixed top-0 left-0 right-0 z-50 transition-colors duration-300 nav-light-sweep ${scrolled ? 'bg-gray-800 shadow-lg' : 'bg-transparent'}`}

      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative z-10">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/img/logoeg.png"
              alt="EG Logo"
              width={200}         // 👈 Tăng từ 120 → 160
              height={80}         // 👈 Tăng từ 60 → 80
              priority
              className="h-auto object-contain"
            />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-cyan-400 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Menu Items */}
          <div className={`${menuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
            <ul
              className={`font-medium flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 mt-4 md:mt-0 rounded-lg ${scrolled ? 'text-white' : 'text-white'
                }`}
            >
              <li>
                <Link
                  href="#"
                  onClick={() => {
                    setMenuOpen(false);
                    setActiveSection('');
                  }}
                  className={`block py-2 px-3 text-lg hover:text-cyan-500 md:p-0 dark:text-white md:dark:hover:text-cyan-500 ${activeSection === '' ? 'text-cyan-500 font-bold' : ''
                    }`}
                >
                  Trang chủ
                </Link>
              </li>

              <li>
                <Link
                  href="#about"
                  onClick={() => {
                    setMenuOpen(false);
                    setActiveSection('about');
                  }}
                  className={`block py-2 px-3 text-lg hover:text-cyan-500 md:p-0 dark:text-white md:dark:hover:text-cyan-500 ${activeSection === 'about' ? 'text-cyan-500 font-bold' : ''
                    }`}
                >
                  Giới thiệu
                </Link>
              </li>

              <li>
                <Link
                  href="#teamwork"
                  onClick={() => {
                    setMenuOpen(false);
                    setActiveSection('teamwork');
                  }}
                  className={`block py-2 px-3 text-lg hover:text-cyan-500 md:p-0 dark:text-white md:dark:hover:text-cyan-500 ${activeSection === 'teamwork' ? 'text-cyan-500 font-bold' : ''
                    }`}
                >
                  Teamwork
                </Link>
              </li>
              <li>
                <Link
                  href="#videos"
                  onClick={() => {
                    setMenuOpen(false);
                    setActiveSection('videos');
                  }}
                  className={`block py-2 px-3 text-lg hover:text-cyan-500 md:p-0 dark:text-white md:dark:hover:text-cyan-500 ${activeSection === 'videos' ? 'text-cyan-500 font-bold' : ''
                    }`}
                >
                  Video
                </Link>
              </li>
              <li>
                <a
                  href="/files/Tobe-Chain.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    setMenuOpen(false);
                    setActiveSection('docs');
                  }}
                  className={`block py-2 px-3 text-lg hover:text-cyan-500 md:p-0 dark:text-white md:dark:hover:text-cyan-500 ${activeSection === 'docs' ? 'text-cyan-500 font-bold' : ''
                    }`}
                >
                  Docs
                </a>
              </li>
              <li>
                <Link
                  href="https://tobechain.net/"
                  onClick={() => {
                    setMenuOpen(false);
                    setActiveSection('https://tobechain.net/');
                  }}
                  className={`block py-2 px-3 text-lg hover:text-cyan-500 md:p-0 dark:text-white md:dark:hover:text-cyan-500 ${activeSection === 'tobechain' ? 'text-cyan-500 font-bold' : ''
                    }`}
                >
                  TobeChain
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
