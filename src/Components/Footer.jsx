import React from 'react';
import { NavLink } from 'react-router-dom';  // Import NavLink from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Branding Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">C</span>
            </div>
            <span className="text-xl font-bold">Comforty</span>
          </div>
          <p className="text-gray-500 text-sm">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
            Cras egestas purus.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-primary">
              {/* SVG for Facebook */}
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-primary">
              {/* SVG for Twitter */}
            </a>
          </div>
        </div>
        {/* Category Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">CATEGORY</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-900 hover:text-primary">Sofa</a>
            </li>
            <li>
              <a href="#" className="text-gray-900 hover:text-primary">Armchair</a>
            </li>
            <li>
              <a href="#" className="text-gray-900 hover:text-primary">Wing Chair</a>
            </li>
            <li>
              <a href="#" className="text-gray-900 hover:text-primary">Desk Chair</a>
            </li>
            <li>
              <a href="#" className="text-gray-900 hover:text-primary">Wooden Chair</a>
            </li>
            <li>
              <a href="#" className="text-gray-900 hover:text-primary">Park Bench</a>
            </li>
          </ul>
        </div>
        {/* Support Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">SUPPORT</h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/help" className="text-gray-900 hover:text-primary">Help & Support</NavLink>
            </li>
            <li>
              <NavLink to="/tearms" className="text-gray-900 hover:text-primary">Terms & Conditions</NavLink>
            </li>
            <li>
              <NavLink to="/privacy" className="text-gray-900 hover:text-primary">Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink to="/habar" className="text-gray-900 hover:text-primary">Help</NavLink>
            </li>
          </ul>
        </div>
        {/* Newsletter Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">NEWSLETTER</h3>
          <div className="space-y-4">
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-lg">
              Subscribe
            </button>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
