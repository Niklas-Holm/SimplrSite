import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import FilledButton from "./ui/FilledButton";
import OverlayForm from "./OverlayForm";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false); // ✅ Track overlay state

  const closeMenu = () => setMenuOpen(false);
  const openOverlay = () => {
    setShowOverlay(true);
    closeMenu(); // ✅ Close mobile menu when overlay opens
  };
  const closeOverlay = () => setShowOverlay(false);

  return (
    <>
      {/* Invisible Placeholder to Prevent Hero Jumping */}
      <div className="h-22">
        {/* Navbar - Not Sticky, But Visible When Overlay is Open */}
        <nav
          className={`w-full h-22 bg-background text-text p-8 flex justify-between items-center z-1001 transition-all duration-300 ${
            menuOpen ? "absolute top-0 left-0" : "top-0 left-0"
          }`}
        >
          {/* Logo */}
          <Link to="/">
            <img src={logo} className="h-7" alt="Logo" />
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-row items-center gap-7">
            <Link to="/contact">
              <h1
                className="text-xl tracking-wider font-mono text-white transition-all duration-700"
              >
                Let’s Talk
              </h1>
            </Link>
            <button onClick={openOverlay} className="text-lg font-mono bg-primary rounded-full px-8 py-4">
              Contact Us
            </button>
          </div>

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
      </div>

      {/* ✅ Overlay Form */}
      <OverlayForm isOpen={showOverlay} onClose={closeOverlay} />

      {/* ✅ Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed z-1000 inset-0 bg-background transition-opacity duration-500 flex flex-col justify-between ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Keep Navbar Visible Inside Overlay */}
        <div className="relative w-full h-16"></div>

        {/* Centered Text */}
        <div className="flex flex-col items-center justify-center flex-grow text-center">
          <Link to="/contact" onClick={closeMenu}>
            <h1
              className={`text-4xl font-mono text-white transition-all duration-700 ${
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              Let’s Talk
            </h1>
          </Link>
        </div>

        {/* ✅ CTA Button at the Bottom Now Opens the Overlay */}
        <div className="flex z-1001 justify-center mb-12">
          <a onClick={openOverlay}>
            <FilledButton text="Contact Us" menuOpen={menuOpen} />
          </a>
        </div>
      </div>
    </>
  );
}
