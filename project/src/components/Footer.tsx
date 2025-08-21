import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-red-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Visit Us</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-6 text-yellow-400">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <MapPin className="text-yellow-400" size={20} />
                <span>123 Spice Street, Curry Lane, Food City, FC 12345</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="text-yellow-400" size={20} />
                <span>(555) 123-CURRY</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Mail className="text-yellow-400" size={20} />
                <span>info@7hillsindian.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 text-yellow-400">Hours of Operation</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Monday - Thursday:</span>
                <span>11:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday - Saturday:</span>
                <span>11:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>12:00 PM - 9:00 PM</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-bold mb-6 text-yellow-400">Follow Us</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="bg-yellow-500 hover:bg-yellow-400 text-black p-3 rounded-full transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-yellow-500 hover:bg-yellow-400 text-black p-3 rounded-full transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-yellow-500 hover:bg-yellow-400 text-black p-3 rounded-full transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
            <p className="mt-6 text-gray-300">
              Stay connected for special offers, events, and new menu items!
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="bg-white rounded-lg p-4 mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.91477840725!2d-74.11976341943773!3d40.69767006430892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1635959000000!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-red-800 pt-8">
          <p className="text-gray-300">
            © 2024 7 Hills Indian Restaurant. All rights reserved. | Bringing authentic Indian flavors to your table since 1995.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;