import { Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'InFineIt Global Services LLP',
    period: 'Dec 2024 - Present',
    description: 'Working on modern web applications using React and related technologies.'
  },
  {
    title: 'Associate Software Developer',
    company: 'Robosoft Technologies',
    period: 'Aug 2021 - Jan 2024',
    description: 'Developed and maintained multiple client projects focusing on frontend development.'
  }
];

const education = [
  {
    title: "Bachelor's of Engineering",
    institution: "Alva's Institute of Engineering and Technology",
    board: 'VTU',
    period: '2017 - 2021'
  },
  {
    title: 'Pre-University',
    institution: "St.Anne's PU College for Girls",
    board: 'Karnataka State Board',
    period: '2015 - 2017'
  }
];

const Experience = () => {
  return (
    <div className="py-20 bg-white" id="experience">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Experience & Education
        </motion.h2>
        
        <div className="relative mb-20">
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"
            style={{ transformOrigin: 'top' }}
          />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute left-1/2 transform -translate-x-1/2"
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>
                </motion.div>
                
                <motion.div 
                  className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-blue-600 font-semibold mb-2">{exp.company}</p>
                    <p className="text-gray-500 mb-4">{exp.period}</p>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="relative">
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"
            style={{ transformOrigin: 'top' }}
          />
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute left-1/2 transform -translate-x-1/2"
                >
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>
                </motion.div>
                
                <motion.div 
                  className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold mb-2">{edu.title}</h3>
                    <p className="text-purple-600 font-semibold mb-2">{edu.institution}</p>
                    <p className="text-gray-500 mb-2">{edu.board}</p>
                    <p className="text-gray-500">{edu.period}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience