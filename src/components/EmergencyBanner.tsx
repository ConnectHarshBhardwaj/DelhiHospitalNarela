import { Phone } from 'lucide-react';

export const EmergencyBanner = () => {
  return (
    <div className="bg-red-500 text-white py-4 px-4 text-center">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
        <span className="font-bold text-lg uppercase tracking-wide animate-pulse">24 Hour Emergency Maternity Support</span>
        <a href="tel:09306999599" className="flex items-center gap-2 bg-white text-red-600 px-4 py-1 rounded-full font-bold hover:bg-gray-100 transition-colors">
          <Phone size={18} />
          Call: 093069 99599
        </a>
      </div>
    </div>
  );
};
