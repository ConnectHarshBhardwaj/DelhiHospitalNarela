import { Star } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: "Priya Sharma",
    text: "Dr. Sachin is very experienced and polite. My delivery was normal and the staff took great care of me and my baby. Highly recommended for maternity care.",
    rating: 5
  },
  {
    name: "Anjali Verma",
    text: "Best hospital in Narela for pregnancy. The charges are very affordable and they don't force for operation. Very happy with the service.",
    rating: 5
  },
  {
    name: "Meena Devi",
    text: "Clean hospital and supportive nurses. Dr. Sachin explains everything very well. Thank you for the safe delivery of my son.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
          <p className="text-gray-600">Trusted by thousands of mothers and families.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">Patient</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
