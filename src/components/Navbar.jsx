import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full h-22 bg-background text-text p-8 flex justify-between items-center z-1001">
        {/* Logo */}
        <img src={logo} className="h-7" alt="Logo" />

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-8 text-lg">
          <li><a href="/" className="hover:text-gray-400">Home</a></li>
          <li><a href="/about" className="hover:text-gray-400">About</a></li>
          <li><a href="/services" className="hover:text-gray-400">Services</a></li>
          <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
        </ul>

        {/* Hamburger Menu - Hidden on lg screens */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`relative w-8 h-6 flex flex-col justify-between transition-all duration-300 lg:hidden ${
            menuOpen ? "open" : ""
          }`}
        >
          <span className="absolute top-0 left-0 w-full h-[2px] bg-white rounded-md transition-all duration-300"></span>
          <span className="absolute top-[10px] left-0 w-full h-[2px] bg-white rounded-md transition-all duration-300"></span>
          <span className="absolute top-[10px] left-0 w-full h-[2px] bg-white rounded-md transition-all duration-300"></span>
          <span className="absolute top-[20px] left-0 w-full h-[2px] bg-white rounded-md transition-all duration-300"></span>
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`lg:hidden fixed z-1000 inset-0 bg-background transition-opacity duration-500 flex flex-col justify-between ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        {/* Keep Navbar Visible */}
        <div className="relative w-full h-16"></div>

        {/* Centered Text */}
        <div className="flex flex-col items-center justify-center flex-grow text-center">
          <h1
            className={`text-4xl font-mono text-white transition-all duration-700 ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Let’s Talk
          </h1>
        </div>

        {/* CTA Button at the Bottom */}
        <div className="flex z-1001 justify-center mb-12">
          <button
            className={`bg-primary text-white px-12 py-5 rounded-full font-bold text-xl transition-all duration-700 ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}
