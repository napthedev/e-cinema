"use client";

import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import type { NextPage } from "next";
import { useState, useEffect } from "react";

const Navbar: NextPage = () => {
  const [scrollOpacity, setScrollOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Calculate opacity from 0 to 1 based on scroll from 0 to 50px
      const opacity = Math.min(scrollTop / 50, 1);
      setScrollOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        minHeight: "60px",
        backgroundColor: `rgba(5, 5, 5, ${scrollOpacity * 0.95})`,
        backdropFilter:
          scrollOpacity > 0 ? `blur(${scrollOpacity * 8}px)` : "none",
      }}
      className="fixed top-0 left-0 right-0 w-screen py-3 md:px-7 px-3 h-[7vw] max-h-16 z-50 flex justify-between items-center transition-all duration-300 navbar"
    >
      <Link href="/" className="h-full w-auto">
        <Image
          className="h-full w-auto"
          src="/logo.png"
          alt="E-Cinema Logo"
          width={120}
          height={60}
          priority
        />
      </Link>
      <Link href="/search">
        <FaSearch
          className="mr-4 cursor-pointer text-text-primary hover:text-orange transition-colors duration-200"
          size={25}
        />
      </Link>
    </div>
  );
};

export default Navbar;
