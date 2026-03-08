import { motion } from 'motion/react';
import { Baby, Stethoscope, Activity, HeartPulse, UserCheck, ShieldCheck, Ambulance, ClipboardCheck } from 'lucide-react';

const services = [
  {
    icon: <Baby className="w-8 h-8" />,
    title: "Pregnancy Care",
    description: "Comprehensive prenatal care to ensure a healthy journey for mother and baby."
  },
  {
    icon: <HeartPulse className="w-8 h-8" />,
    title: "Normal Delivery",
    description: "Expert support for safe and natural childbirth in a hygienic environment."
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: "High Risk Pregnancy",
    description: "Specialized monitoring and care for complicated pregnancy cases."
  },
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: "Gynecology Consultation",
    description: "Expert diagnosis and treatment for all women's health issues."
  },
  {
    icon: <UserCheck className="w-8 h-8" />,
    title: "Maternity Care",
    description: "Post-delivery care and support for new mothers and newborns."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Ultrasound Guidance",
    description: "Advanced imaging support for fetal monitoring and health checks."
  },
  {
    icon: <ClipboardCheck className="w-8 h-8" />,
    title: "Health Checkups",
    description: "Regular screenings and preventive health packages for women."
  },
  {
    icon: <Ambulance className="w-8 h-8" />,
    title: "Emergency Support",
    description: "24/7 immediate medical attention for maternity emergencies."
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Medical Services</h2>
          <p className="text-gray-600 text-lg">
            We provide comprehensive women's health and maternity services under one roof, ensuring the best care for you and your family.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
            >
              <div className="bg-teal-50 w-16 h-16 rounded-xl flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
