import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Onboarding', path: '/onboarding' },
    { label: 'Offerings', path: '/offerings' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/GenEd Logo Colored.svg"
              alt="GenEd Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'font-medium transition-colors duration-200',
                  isActive(item.path)
                    ? 'text-brand-navy border-b-2 border-brand-green pb-2'
                    : 'text-gray-700 hover:text-brand-navy'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/onboarding"
              className="bg-brand-green hover:bg-opacity-90 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-brand-navy hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'block py-2 px-0 font-medium transition-colors duration-200',
                  isActive(item.path)
                    ? 'text-brand-green'
                    : 'text-gray-700 hover:text-brand-navy'
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/onboarding"
              onClick={() => setIsOpen(false)}
              className="mt-4 block bg-brand-green hover:bg-opacity-90 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200 text-center"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
