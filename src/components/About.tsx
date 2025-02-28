import { User, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="py-20 bg-gray-50" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <img 
            src="./bindu.jpg"
            alt="Bindu N R"
            className="w-1/2 h-1/2 object-cover rounded-xl mx-auto my-auto"/>
            {/* <motion.p variants={itemVariants} className="text-lg text-gray-700 leading-relaxed">
            Experienced Front-End developer specializing in creating visually captivating and interactive web applications that exceed client
expectations. Proficient in HTML, CSS, JavaScript, and adept in Angular and React development. Committed to delivering scalable
solutions customized to diverse client requirements.
            </motion.p> */}
            
            <motion.div variants={containerVariants} className="space-y-4">
              <motion.div variants={itemVariants} className="flex items-center space-x-3">
                <User className="w-5 h-5 text-blue-600" />
                <span>Bindu N R</span>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span>bindu6433@gmail.com</span>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Karnataka, India</span>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4"
          >
            {/* {[
              { title: 'Frontend', skills: 'React, Vue, Angular' },
              { title: 'Backend', skills: 'Node.js, Python, Java' },
              { title: 'Database', skills: 'MongoDB, PostgreSQL' },
              { title: 'DevOps', skills: 'Docker, AWS, CI/CD' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md transition-shadow hover:shadow-lg"
              >
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p>{item.skills}</p>
              </motion.div>
            ))} */}
            <motion.ul variants={itemVariants} className="text-lg text-gray-700 leading-relaxed list-disc pl-5">
    <li>Experienced Front-End developer specializing in creating visually captivating and interactive web applications that exceed client expectations.</li>
    <li>Skilled in HTML, CSS, and JavaScript, with over three years of experience in Angular and React development.</li>
    <li>Committed to delivering scalable solutions customized to diverse client requirements.</li>
</motion.ul>
{[
  {title: 'Experience', data: '3+ yrs'},
  {title: 'SkillSet', data: 'ReactJS, Javascript, HTML, CSS, Angular'}
].map((item) =>(
  <motion.div
  key={item.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md transition-shadow hover:shadow-lg"
              >
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p>{item.data}</p>
              </motion.div>
))}

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;