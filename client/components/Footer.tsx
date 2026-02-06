import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/GenEd Logo Colored.svg"
                alt="GenEd Logo"
                className="h-10 w-auto bg-white rounded-md p-1"
              />
            </div>
            <p className="text-gray-300 text-sm">
              Empowering every child's learning journey with AI-powered personalization.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-brand-green transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/onboarding" className="text-gray-300 hover:text-brand-green transition-colors">
                  Onboarding
                </Link>
              </li>
              <li>
                <Link to="/offerings" className="text-gray-300 hover:text-brand-green transition-colors">
                  Offerings
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-brand-green transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-green transition-colors">
                  For Parents
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-green transition-colors">
                  For Teachers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-green transition-colors">
                  For Schools
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-sm">123 Education Street, Learning City, LC 12345</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-brand-green transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <a href="mailto:info@gened.ai" className="text-gray-300 hover:text-brand-green transition-colors">
                  info@gened.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 pt-8 flex justify-between items-center flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-brand-green transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-brand-green transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-brand-green transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-brand-green transition-colors">
              <Instagram size={20} />
            </a>
          </div>

          <p className="text-gray-400 text-sm">
            &copy; {currentYear} GenEd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
