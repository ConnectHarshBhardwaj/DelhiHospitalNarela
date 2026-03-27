import { HeartPulse, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-teal-900 p-2 rounded-full">
                <HeartPulse className="h-6 w-6 text-teal-500" />
              </div>
              <span className="text-xl font-bold text-white">Dr. Sachin</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Dedicated to providing safe, affordable, and compassionate maternity and gynecology care for women in Narela and Delhi.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-teal-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-teal-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-teal-500 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-teal-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-teal-500 transition-colors">About Doctor</Link></li>
              <li><Link to="/services" className="hover:text-teal-500 transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-teal-500 transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-teal-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li>Near Lampur Rd, near MTNL Exchange</li>
              <li>Bankner Village, Narela, Delhi – 110040</li>
              <li className="pt-2">
                <a href="tel:09306999599" className="text-teal-500 font-bold hover:text-teal-400">093069 99599</a>
              </li>
              <li>
                <a href="mailto:contact@drsachin.com" className="hover:text-teal-500">contact@drsachin.com</a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Dr. Sachin Maternity Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
