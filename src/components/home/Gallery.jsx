import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Projects</h2>
          <div className="w-20 h-1 solar-gradient mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our successful solar installations across Assam
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
          >
            <img className="w-full h-80 object-cover group-hover:scale-110 transition duration-300" alt="Residential solar installation" src="https://images.unsplash.com/photo-1531906278209-2fca6412fca5" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-white font-semibold">Residential</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
          >
            <img className="w-full h-80 object-cover group-hover:scale-110 transition duration-300" alt="Commercial solar installation" src="https://images.unsplash.com/photo-1623696613585-7319e61a5659" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-white font-semibold">Commercial</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" className="blue-gradient text-white" asChild>
            <Link to="/projects">View All Projects</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
