import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Flexbox container for footer items */}
        <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
          {/* About Section */}
          <div className="flex flex-col w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-2">About Us</h3>
            <p className="text-gray-400">
              We are committed to providing the best services and products to
              our customers. Contact us for any queries or support.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-gray-300">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">
                  Email: support@example.com
                </span>
              </li>
              <li>
                <span className="text-gray-400">Phone: +1 (555) 123-4567</span>
              </li>
              <li className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-gray-300">
                  <i className="fab fa-facebook"></i>{" "}
                  {/* Example: FontAwesome Icon */}
                </a>
                <a href="#" className="hover:text-gray-300">
                  <i className="fab fa-twitter"></i>{" "}
                  {/* Example: FontAwesome Icon */}
                </a>
                <a href="#" className="hover:text-gray-300">
                  <i className="fab fa-instagram"></i>{" "}
                  {/* Example: FontAwesome Icon */}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 text-center border-t border-gray-600 pt-4">
          <p className="text-gray-500">
            &copy; 2024 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
