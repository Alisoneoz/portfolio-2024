'use client';
import { technologies } from '@/config/technologies';
import { motion } from 'framer-motion';
import Image from 'next/image';

const TechStack = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div id="skills" className="scroll-mt-48">
      <h2 className="text-3xl font-bold text-center mb-16 overflow-hidden">Technical Skills</h2>
      
      {Object.entries(technologies).map(([category, techs]) => (
        <div key={category} className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 capitalize">
            {category.replace(/-/g, ' ')}
          </h3>
          
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
          >
            {techs.map((tech) => (
              <motion.div
                key={tech.name}
                variants={item}
                className="group flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="relative w-12 h-12 mb-3">
                  <Image
                    src={tech.icon}
                    alt={`${tech.name} icon`}
                    fill
                    className="object-contain group-hover:animate-pulse"
                  />
                </div>
                <span className="text-sm font-medium text-center">
                  {tech.name}
                </span>
                {tech.level && (
                  <span className="mt-1 text-xs text-gray-400 capitalize">
                    {tech.level}
                  </span>
                )}
                {tech.features && (
                  <div className="mt-2 flex flex-wrap gap-1 justify-center">
                    {tech.features.map(feature => (
                      <span 
                        key={feature}
                        className="px-2 py-0.5 text-xs bg-white/10 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
