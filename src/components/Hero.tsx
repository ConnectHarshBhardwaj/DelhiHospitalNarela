import { Phone, MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-teal-50 via-white to-blue-50 pt-12 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[500px] h-[500px] rounded-full bg-teal-100/40 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-[400px] h-[400px] rounded-full bg-blue-100/40 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-teal-100 text-teal-700 text-sm font-semibold mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
              </span>
              24/7 Emergency Maternity Care
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
              Safe Motherhood, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                Trusted Care
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg font-light">
              Expert Gynecology & Maternity Care in Narela, Delhi. We prioritize your comfort and safety with world-class facilities and a compassionate touch.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-12">
              <a 
                href="tel:09306999599" 
                className="group flex items-center justify-center gap-3 bg-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-700 transition-all shadow-lg hover:shadow-teal-500/30 transform hover:-translate-y-1"
              >
                <Phone size={20} className="group-hover:animate-bounce" />
                Call Now
              </a>
              <a 
                href="https://wa.me/919306999599" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-white text-gray-800 border border-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:border-green-500 hover:text-green-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                <MessageCircle size={20} />
                WhatsApp Doctor
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {[
                "24×7 Maternity Care",
                "Affordable Treatment",
                "Friendly Staff",
                "Normal Delivery Focus"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700 font-medium group">
                  <div className="p-1 rounded-full bg-teal-50 group-hover:bg-teal-100 transition-colors">
                    <CheckCircle2 className="text-teal-600 h-5 w-5" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Decorative Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-200 to-blue-200 rounded-[2rem] transform rotate-6 scale-105 opacity-40 blur-sm"></div>
            
            <div className="relative bg-white p-2 rounded-[2rem] shadow-2xl">
              <div className="relative rounded-[1.5rem] overflow-hidden bg-gray-50 aspect-[4/3] flex items-center justify-center">
                {/* Doctor Image - Using object-contain to ensure it fits perfectly */}
                <img 
                  src="https://i.ibb.co/Mk56VDvV/Screenshot-2026-03-08-185347.png" 
                  alt="Dr. Sachin" 
                  className="w-full h-full object-contain bg-gray-100"
                />
                
                {/* Gradient Overlay for Text Readability if needed, but keeping it clean for this image */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 text-white">
                  <h3 className="font-bold text-2xl mb-1">Dr. Sachin</h3>
                  <p className="text-teal-100 font-medium">Gynecology & Maternity Specialist</p>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/50 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="bg-yellow-100 p-3 rounded-xl">
                  <span className="text-3xl">⭐</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">Top Rated</p>
                  <p className="text-sm text-gray-500 font-medium">In Narela, Delhi</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
