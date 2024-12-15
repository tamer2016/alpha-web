import { Facebook, Instagram, Twitter, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Click4ebusiness</h2>
            <p className="text-gray-300 mb-4">
              Technologies and Business Solutions
            </p>
            <p className="text-gray-300">
              Creating innovative technical and marketing values that bring together people, business, and technology.
            </p>
          </div>

          {/* Contact Us */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <div className="space-y-3">
              <p>966-504699037</p>
              <p>20-1114408140</p>
              <p>info@click4ebusiness.com</p>
              <div className="flex gap-4 mt-4">
                <Link to="#" className="hover:text-primary transition-colors">
                  <Globe className="w-5 h-5" />
                </Link>
                <Link to="#" className="hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link to="#" className="hover:text-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link to="#" className="hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Common Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">Common Links</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="hover:text-primary transition-colors">Who We Are</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Our Vision</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Our Work</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Media Center</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Client Opinions</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="hover:text-primary transition-colors">Digital Marketing</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Graphic Design</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Website Development</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Social Media Management</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Mobile App Development</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© 2024 Click4e. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
