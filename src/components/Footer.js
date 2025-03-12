import React from "react";
import { FaFacebook, FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
          {/* Brand & Copyright */}
          <div>
            <h2 className="text-lg font-bold">Sithamu Hela Rasa</h2>
            <p className="text-sm mt-1">&copy; 2025 All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm space-y-1">
              <li>
                <a href="/" className="hover:text-gray-300">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-300">About Us</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300">Contact</a>
              </li>
              <li>
                <a href="/products" className="hover:text-gray-300">Our Sweets</a>
              </li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-sm">+94 123 456 789</p>
            <p className="text-sm">info@kavumkokis.com</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-3">
              <a
                href="https://wa.me/+94123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <FaWhatsapp size={30} />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61572229005547"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="https://instagram.com/sithamuhalarasa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://youtube.com/sithamuhalarasa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <FaYoutube size={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 text-center text-sm border-t border-gray-400 pt-4">
          <p>Made with ❤️ by Sithamu Hela Rasa Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
