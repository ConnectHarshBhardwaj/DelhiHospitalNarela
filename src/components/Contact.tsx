import { Phone, MapPin, Mail, Clock } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Contact & Visit Us</h2>
            <p className="text-gray-600 mb-10 text-lg">
              We are available 24/7 for all your maternity needs. Visit us or call us anytime.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-teal-50 p-3 rounded-full text-teal-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Phone Number</h3>
                  <p className="text-gray-600 mb-1">For Appointments & Emergency</p>
                  <a href="tel:09306999599" className="text-2xl font-bold text-teal-600 hover:text-teal-700">093069 99599</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-teal-50 p-3 rounded-full text-teal-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Hospital Address</h3>
                  <p className="text-gray-600">
                    Near Lampur Rd, near MTNL Exchange<br/>
                    Bankner Village, Narela<br/>
                    Delhi – 110040
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-teal-50 p-3 rounded-full text-teal-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Timings</h3>
                  <p className="text-gray-600">
                    <span className="font-semibold">Emergency:</span> 24 Hours Open<br/>
                    <span className="font-semibold">OPD:</span> Mon - Sat (10:00 AM - 2:00 PM)
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              <a 
                href="tel:09306999599" 
                className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition-colors"
              >
                Call Now
              </a>
              <a 
                href="https://wa.me/919306999599" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] lg:h-auto bg-gray-100 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.069772365766!2d77.0895!3d28.8519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390daeb781775555%3A0x23456789abcdef!2sNarela%2C%20Delhi!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Hospital Location"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};
