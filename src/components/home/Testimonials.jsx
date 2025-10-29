import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Guwahati',
      rating: 5,
      text: 'JYT PowerTech installed a 5kW solar system at my home. The team was professional, and they helped me get the full subsidy. My electricity bills have reduced by 80%!'
    },
    {
      name: 'Priya Sharma',
      location: 'Jorhat',
      rating: 5,
      text: 'Excellent service from start to finish. They handled all the paperwork for APDCL approval and subsidy. The installation was completed in just 3 days!'
    },
    {
      name: 'Anand Bora',
      location: 'Dibrugarh',
      rating: 5,
      text: 'Very satisfied with the quality of solar panels and inverter. The after-sales support is outstanding. Highly recommend JYT PowerTech for solar installations.'
    },
    {
      name: 'Meena Das',
      location: 'Silchar',
      rating: 5,
      text: 'Great experience! They provided a detailed site survey and customized the system for my needs. The ROI is excellent, and I am saving thousands every month.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">What Our Customers Say</h2>
          <div className="w-20 h-1 solar-gradient mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real experiences from satisfied customers across Assam
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-green-50 to-blue-50 p-8 md:p-12 rounded-lg shadow-xl"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={24} />
                ))}
              </div>
              <p className="text-gray-700 text-lg md:text-xl mb-6 text-center italic">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="text-center">
                <p className="font-semibold text-gray-800 text-lg">{testimonials[currentIndex].name}</p>
                <p className="text-gray-600">{testimonials[currentIndex].location}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white hover:bg-gray-100 text-gray-700 p-2 rounded-full shadow-lg transition"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white hover:bg-gray-100 text-gray-700 p-2 rounded-full shadow-lg transition"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === currentIndex ? 'bg-green-600 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
