import { motion } from 'motion/react';

export const PageHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => {
  return (
    <div className="bg-teal-700 py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-800 to-teal-600 opacity-90"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-900 rounded-full blur-3xl opacity-20 -ml-20 -mb-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-teal-100 text-lg max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
};
