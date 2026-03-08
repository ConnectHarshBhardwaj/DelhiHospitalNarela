import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

export const WhyChooseUs = () => {
  const points = [
    "High chances of normal delivery without unnecessary operations",
    "Very affordable treatment for families",
    "24×7 medical availability for emergencies",
    "Friendly and supportive nursing staff",
    "Safe and hygienic maternity environment",
    "Trusted by families in Narela and nearby areas"
  ];

  return (
    <section className="py-20 bg-teal-900 text-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-teal-800 opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-teal-800 opacity-50 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Our Hospital?</h2>
            <div className="space-y-6">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-teal-300 flex-shrink-0 mt-1" />
                  <p className="text-lg text-teal-50">{point}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <a 
                href="#contact" 
                className="inline-block bg-white text-teal-900 font-bold px-8 py-3 rounded-full hover:bg-teal-50 transition-colors"
              >
                Schedule a Visit
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img 
              src="https://i.ibb.co/BH8NCrxg/Screenshot-2026-03-08-183721.png" 
              alt="Hospital Interior" 
              className="rounded-2xl shadow-2xl border-4 border-teal-800/50 w-full object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-teal-800 p-6 rounded-xl border border-teal-700 shadow-xl hidden sm:block">
              <p className="text-3xl font-bold text-white mb-1">1000+</p>
              <p className="text-teal-200 text-sm">Happy Families</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
