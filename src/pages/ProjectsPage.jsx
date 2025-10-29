import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Building, Home, Factory, School } from 'lucide-react';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    { id: 1, category: 'residential', name: 'Residential Villa - Guwahati', capacity: '5 kW', location: 'Guwahati', date: 'Jan 2025' },
    { id: 2, category: 'commercial', name: 'Shopping Complex - Jorhat', capacity: '25 kW', location: 'Jorhat', date: 'Dec 2024' },
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: Building },
    { id: 'residential', label: 'Residential', icon: Home },
    { id: 'commercial', label: 'Commercial', icon: Building },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Our Projects - Solar Installations Gallery | JYT PowerTech</title>
        <meta name="description" content="Explore our successful solar installation projects across Assam. View residential and commercial solar projects." />
      </Helmet>

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold mb-4 text-gray-800">Our Projects</h1>
            <div className="w-20 h-1 solar-gradient mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our successful solar installations across Assam
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              >
                <filter.icon size={20} />
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-300" 
                    alt={`${project.name} solar installation`}
                   src="https://images.unsplash.com/photo-1593946565263-0d352fcf8f21" />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.capacity}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{project.name}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span>📍 {project.location}</span>
                    <span>📅 {project.date}</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Successfully installed and commissioned {project.capacity} solar power system with net metering facility.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-xl">No projects found in this category</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
