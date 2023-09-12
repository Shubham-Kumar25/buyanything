import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-24 text-gray-600 bg-gray-100 border-t-2">
      <div className="bg-white">
        <div className="container flex flex-col flex-wrap px-5 py-8 mx-auto md:flex-row">
          <div className="flex-shrink-0 w-full text-center md:w-64 md:text-left">
            <a
              href="/"
              className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start"
            >
              <img
                src="../src/img/logo.png"
                alt="BuyAnything Logo"
                className="w-10 h-10 p-1 text-white bg-purple-500 rounded-full"
              />
              <span className="ml-3 text-xl">BuyAnything</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">
              Your one-stop destination for all your shopping needs.
            </p>
          </div>
          <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:text-left">
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">
                Categories
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <a
                    href="/electronics"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Electronics
                  </a>
                </li>
                <li>
                  <a
                    href="/clothing"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Clothing
                  </a>
                </li>
                <li>
                  <a
                    href="/home-and-garden"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Home & Garden
                  </a>
                </li>
                <li>
                  <a
                    href="/toys-and-games"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Toys & Games
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">
                Customer Support
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <a
                    href="/contact-us"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/faqs" className="text-gray-600 hover:text-gray-800">
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="/return-policy"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Return Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/shipping-information"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Shipping Information
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">
                Connect With Us
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <a
                    href="https://www.facebook.com/buyanything"
                    className="flex items-center justify-start gap-2 text-gray-600 hover:text-gray-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook size={20} /> Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/buyanything"
                    className="flex items-center justify-start gap-2 text-gray-600 hover:text-gray-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter size={20} /> Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/buyanything/"
                    className="flex items-center justify-start gap-2 text-gray-600 hover:text-gray-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={20} /> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/buyanything"
                    className="flex items-center justify-start gap-2 text-gray-600 hover:text-gray-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={20} /> Linkedin
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">
                Contact Info
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <a
                    href="mailto:info@buyanything.com"
                    className="flex items-center justify-start gap-2 text-gray-600 hover:text-gray-800"
                  >
                    <FaEnvelope size={20} /> info@buyanything.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+1234567890"
                    className="flex items-center justify-start gap-2 text-gray-600 hover:text-gray-800"
                  >
                    <FaPhone size={20} /> +1 (234) 567-890
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row">
          <p className="text-sm text-center text-gray-500 sm:text-left">
            &copy; 2023 BuyAnything — Lakshay Sharma
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
