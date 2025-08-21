import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const menuCategories = [
    { path: '/starters', label: 'Starters' },
    { path: '/idli-dosa', label: 'Idli & Dosa' },
    { path: '/chicken', label: 'Chicken' },
    { path: '/lamb', label: 'Lamb' },
    { path: '/fish-prawn', label: 'Fish & Prawn' },
    { path: '/tandoori', label: 'Tandoori' },
    { path: '/naan-rice', label: 'Naan & Rice' },
    { path: '/biryani', label: 'Biryani' },
    { path: '/soft-drinks', label: 'Soft Drinks' },
    { path: '/alcohol', label: 'Alcohol' },
    { path: '/wine', label: 'Wine' }
  ];

  const mainNavItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-900 to-red-700 rounded-full flex items-center justify-center text-yellow-400 font-bold text-lg">
              7H
            </div>
            <span className="text-xl font-bold text-red-900">7 Hills Indian Restaurant</span>
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
            
            {/* Menu Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsMenuDropdownOpen(true)}
                onMouseLeave={() => setIsMenuDropdownOpen(false)}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-red-900 transition-colors duration-200"
              >
                Menu <ChevronDown size={16} className="ml-1" />
              </button>
              
              {isMenuDropdownOpen && (
                <div
                  onMouseEnter={() => setIsMenuDropdownOpen(true)}
                  onMouseLeave={() => setIsMenuDropdownOpen(false)}
                  className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2"
                >
                  {menuCategories.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                        isActive(item.path)
                          ? 'text-yellow-600 bg-yellow-50'
                          : 'text-gray-700 hover:text-red-900 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
            
            <div className="border-t border-gray-200 pt-2 mt-2">
              <div className="px-3 py-2 text-sm font-semibold text-red-900">Menu Categories</div>
              {menuCategories.map((item) => (
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
        </div>
      )}
    </nav>
  );
};

export default Header;