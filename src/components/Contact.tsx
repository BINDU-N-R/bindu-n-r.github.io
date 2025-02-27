import React, { useState, useRef } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    try {
      setIsSubmitting(true);
      
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Replace with your EmailJS service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Replace with your EmailJS template ID
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Replace with your EmailJS public key
      );

      if (result.text === 'OK') {
        toast.success('Message sent successfully!');
        formRef.current.reset();
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20 bg-gray-50" id="contact">
      <Toaster position="top-right" />
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Get In Touch
        </motion.h2>
        
        <motion.form 
          ref={formRef}
          onSubmit={handleSubmit}
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                name="user_name"
                id="user_name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                name="user_email"
                id="user_email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Your email"
              />
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              name="message"
              id="message"
              required
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="Your message"
            ></motion.textarea>
          </motion.div>
          
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isSubmitting}
            className={`w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed`}
          >
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            <Send className="w-4 h-4" />
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;