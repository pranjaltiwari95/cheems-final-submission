'use client';
import { Link } from 'react-router-dom';
// Import icons from a popular icon library
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#FF7E67] text-white py-12 relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF5C7A] via-[#FF7E67] to-[#FF5C7A]"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Explore (User and General Links) */}
          <div className="transition-all duration-300 hover:translate-y-[-5px]">
            <h3 className="text-lg font-bold text-[#2D1B3D] mb-4 pb-2 border-b border-[#FFB6A0]">Explore</h3>
            <ul className="space-y-3">
              <li><Link to="/events" className="hover:text-[#2D1B3D] transition-colors duration-200 flex items-center">
                <span className="mr-1">›</span> Browse Events
              </Link></li>
              <li><Link to="/blog" className="hover:text-[#2D1B3D] transition-colors duration-200 flex items-center">
                <span className="mr-1">›</span> Blog
              </Link></li>
              <li><Link to="/faqs" className="hover:text-[#2D1B3D] transition-colors duration-200 flex items-center">
                <span className="mr-1">›</span> FAQs
              </Link></li>
            </ul>
          </div>
          
          {/* Pet Owner / User Links */}
          <div className="transition-all duration-300 hover:translate-y-[-5px]">
            <h3 className="text-lg font-bold text-[#2D1B3D] mb-4 pb-2 border-b border-[#FFB6A0]">For Pet Owners</h3>
            <ul className="space-y-3">
              <li><Link to="/adoption" className="hover:text-[#2D1B3D] transition-colors duration-200 flex items-center">
                <span className="mr-1">›</span> Pet Adoption
              </Link></li>
              <li><Link to="/marketplace" className="hover:text-[#2D1B3D] transition-colors duration-200 flex items-center">
                <span className="mr-1">›</span> Marketplace
              </Link></li>
              <li><Link to="/profile" className="hover:text-[#2D1B3D] transition-colors duration-200 flex items-center">
                <span className="mr-1">›</span> Profile
              </Link></li>
              <li><Link to="/notifications" className="hover:text-[#2D1B3D] transition-colors duration-200 flex items-center">
                <span className="mr-1">›</span> Notifications
              </Link></li>
              <li><Link to="/appointment" className="hover:text-[#2D1B3D] transition-colors duration-200 flex items-center">
                <span className="mr-1">›</span> Book Vet Appointment
              </Link></li>
            </ul>
          </div>
          
          {/* Help and Legal (Support and policy-related links) */}
          <div className="transition-all duration-300 hover:translate-y-[-5px]">
            <h3 className="text-lg font-bold text-[#2D1B3D] mb-4 pb-2 border-b border-[#FFB6A0]">Help & Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/support" className="hover:text-[#2D1B3D] transition-colors duration-200 flex items-center">
                <span className="mr-1">›</span> Support
              </Link></li>
              <li><Link to="/contactus" className="hover:text-[#2D1B3D] transition-colors duration-200 flex items-center">
                <span className="mr-1">›</span> Contact Us
              </Link></li>
              <li><Link to="/privacy-policy" className="hover:text-[#2D1B3D] transition-colors duration-200 flex items-center">
                <span className="mr-1">›</span> Privacy Policy
              </Link></li>
              <li><Link to="/terms-of-service" className="hover:text-[#2D1B3D] transition-colors duration-200 flex items-center">
                <span className="mr-1">›</span> Terms of Service
              </Link></li>
            </ul>
          </div>
          
          {/* Social Media with Icons */}
          <div className="transition-all duration-300 hover:translate-y-[-5px]">
            <h3 className="text-lg font-bold text-[#2D1B3D] mb-4 pb-2 border-b border-[#FFB6A0]">Connect With Us</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-6">
                <a href="https://facebook.com/cheems" target="_blank" rel="noopener noreferrer" 
                   className="text-white hover:text-[#2D1B3D] transition-all duration-300 hover:scale-110">
                  <FaFacebook size={24} />
                </a>
                <a href="https://twitter.com/cheems" target="_blank" rel="noopener noreferrer"
                   className="text-white hover:text-[#2D1B3D] transition-all duration-300 hover:scale-110">
                  <FaTwitter size={24} />
                </a>
                <a href="https://instagram.com/cheems" target="_blank" rel="noopener noreferrer"
                   className="text-white hover:text-[#2D1B3D] transition-all duration-300 hover:scale-110">
                  <FaInstagram size={24} />
                </a>
                <a href="mailto:b22cs095@iitj.ac.in"
                   className="text-white hover:text-[#2D1B3D] transition-all duration-300 hover:scale-110">
                  <FaEnvelope size={24} />
                </a>
              </div>
              
              {/* Newsletter Signup */}
              <div className="mt-4">
                <p className="text-sm mb-2 text-[#2D1B3D]">Join our newsletter:</p>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="px-3 py-2 text-sm text-[#2D1B3D] rounded-l focus:outline-none w-full"
                  />
                  <button className="bg-[#2D1B3D] hover:bg-[#3B1E3D] px-3 py-2 rounded-r text-white transition-colors duration-200">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="border-[#FFB6A0]/40 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#2D1B3D] text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Cheems. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-[#2D1B3D]"></div>
        </div>
      </div>
    </footer>
  );
}