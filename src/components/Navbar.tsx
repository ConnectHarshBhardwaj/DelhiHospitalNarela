import { 
  Phone, 
  Clock, 
  MapPin, 
  Menu, 
  X, 
  HeartPulse
} from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Doctor', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-2.5 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <a href="tel:09306999599" className="flex items-center gap-2 hover:text-teal-100 transition-colors"><Phone size={15} /> <span className="font-medium">093069 99599</span></a>
            <span className="flex items-center gap-2"><Clock size={15} /> <span className="font-medium">24x7 Emergency Available</span></span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={15} /> <span className="font-medium">Bankner Village, Narela, Delhi</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              <div className="bg-teal-50 p-2.5 rounded-xl border border-teal-100">
                <HeartPulse className="h-7 w-7 text-teal-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 leading-none tracking-tight">Dr. Sachin</h1>
                <p className="text-xs text-teal-600 font-semibold tracking-wide uppercase mt-0.5">Maternity & Gynecology</p>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className={`font-medium transition-colors text-sm uppercase tracking-wide ${isActive(link.path) ? 'text-teal-600' : 'text-gray-600 hover:text-teal-600'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Book Appointment
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-teal-600 p-2 rounded-lg hover:bg-gray-100 transition-colors">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                onClick={() => setIsOpen(false)} 
                className={`block px-3 py-2 rounded-md font-medium ${isActive(link.path) ? 'text-teal-600 bg-teal-50' : 'text-gray-600 hover:text-teal-600 hover:bg-teal-50'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)} 
              className="block px-3 py-2 text-teal-600 font-bold"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
