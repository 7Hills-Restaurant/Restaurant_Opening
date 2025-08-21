import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X } from 'lucide-react';
import logo from '../assets/logo.png'; // Adjust the path as necessary  

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const mainNavItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
    { path: '/menu', label: 'Menu' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-18 h-12  rounded-full flex items-center justify-center text-yellow-400 font-bold text-lg object-fill">
              <img src={logo} alt="Logo" className="w-full h-full rounded-full" />
            </div>
            <span className="text-2xl font-merriweather text-red-900">7 Hills Indian Restaurant</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-yellow-600 border-b-2 border-yellow-600'
                    : 'text-gray-700 hover:text-red-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-red-900 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t max-h-96 overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-yellow-600 bg-yellow-50'
                    : 'text-gray-700 hover:text-red-900 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
