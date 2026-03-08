import { motion } from 'motion/react';
import { Award, Heart, Users, Clock } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-teal-600 rounded-3xl transform rotate-3 opacity-10"></div>
              <img 
                src="https://i.ibb.co/S491Nq6C/Screenshot-2026-03-08-183946.png" 
                alt="Dr. Sachin" 
                className="relative rounded-3xl shadow-lg w-full object-cover aspect-[3/4]"
              />
              
              <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-50 max-w-xs hidden md:block">
                <p className="text-teal-600 font-bold text-4xl mb-1">10+</p>
                <p className="text-gray-600 font-medium">Years of Experience in Maternity Care</p>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-block px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-semibold mb-4">
              Meet Our Specialist
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Dr. Sachin <br/>
              <span className="text-teal-600 text-2xl md:text-3xl font-medium">Gynecology & Maternity Specialist</span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Dr. Sachin is a dedicated gynecology and maternity specialist focused on providing safe, affordable, and compassionate care for mothers and babies. With a patient-first approach, he ensures that every pregnancy journey is comfortable and safe.
            </p>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              The hospital prioritizes natural delivery whenever possible and is equipped to handle high-risk pregnancies with expertise and care.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-teal-100 p-2 rounded-lg text-teal-600">
                  <Heart size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Patient First</h4>
                  <p className="text-sm text-gray-500">Compassionate care for every mother.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-teal-100 p-2 rounded-lg text-teal-600">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Expert Care</h4>
                  <p className="text-sm text-gray-500">Specialized in safe deliveries.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-teal-100 p-2 rounded-lg text-teal-600">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Friendly Staff</h4>
                  <p className="text-sm text-gray-500">Supportive nursing team.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-teal-100 p-2 rounded-lg text-teal-600">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">24/7 Available</h4>
                  <p className="text-sm text-gray-500">Always here when you need us.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
