import React, { useState } from "react";
import "./output.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-blue-600 shadow-md w-full">
      <div className="p-4 flex justify-between items-center w-full">
        {/* Left Section: Logo */}
        <div className="text-2xl font-bold text-white">MyShop</div>

        {/* Center Section: Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-white hover:text-gray-200">
            Home
          </a>
          <a href="#about" className="text-white hover:text-gray-200">
            About
          </a>
          <a href="#contact" className="text-white hover:text-gray-200">
            Contact Us
          </a>
          <a href="#products" className="text-white hover:text-gray-200">
            Products
          </a>
        </div>

        {/* Right Section: Search, Cart */}
        <div className="flex items-center space-x-4">
          {/* Search Bar (hidden on small screens) */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600">
              🔍
            </button>
          </div>

          {/* Cart Icon */}
          <div className="relative">
            <button className="text-white hover:text-gray-200">🛒</button>
            {/* Cart item count badge */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              3
            </span>
          </div>

          {/* Hamburger Menu Icon (for mobile view) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? "✖️" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-blue-600 w-full">
          <ul className="space-y-2 p-4">
            <li className="text-white hover:text-gray-200">
              <a href="#home">Home</a>
            </li>
            <li className="text-white hover:text-gray-200">
              <a href="#about">About</a>
            </li>
            <li className="text-white hover:text-gray-200">
              <a href="#contact">Contact Us</a>
            </li>
            <li className="text-white hover:text-gray-200">
              <a href="#products">Products</a>
            </li>
            {/* Mobile Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border rounded-md py-2 px-4 w-full focus:outline-none focus:ring focus:border-blue-300"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600">
                🔍
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
