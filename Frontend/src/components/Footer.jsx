import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Section 1: About/Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>123 Street, Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <FaPhone className="text-blue-400" />
                <span>+977 9827633522</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <FaEnvelope className="text-blue-400" />
                <span>topstore@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="hover:text-blue-400 transition">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-blue-400 transition">
                  My Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <p className="mb-4 text-gray-400">
              Stay connected through our social channels.
            </p>
            <div className="flex justify-center md:justify-start gap-6 text-2xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 transition"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-700 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="text-center text-gray-500 text-sm">
          <p>Developed By Prem Kathayat</p>
          <p>© {new Date().getFullYear()} TopStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
