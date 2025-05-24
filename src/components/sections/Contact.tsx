'use client';
import { motion, useInView } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useRef } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="contact" className="py-24 relative overflow-hidden">
      {/* Background with solar pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 dark:from-orange-400 dark:via-orange-300 dark:to-yellow-300 bg-clip-text text-transparent"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Ready to switch to solar? Contact us for a free consultation and quote
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 focus:border-transparent outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 focus:border-transparent outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 dark:from-orange-400 dark:to-yellow-400 text-white font-semibold py-3 rounded-lg hover:from-orange-600 hover:to-yellow-600 dark:hover:from-orange-500 dark:hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href="https://wa.me/919324178555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <FaWhatsapp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-600 dark:text-gray-400">WhatsApp</h4>
                    <p className="text-gray-900 dark:text-white font-medium">+91 93241 78555</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white">
                    <FaPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-600 dark:text-gray-400">Phone</h4>
                    <p className="text-gray-900 dark:text-white font-medium">+91 93241 78555</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-600 dark:text-gray-400">Email</h4>
                    <p className="text-gray-900 dark:text-white font-medium">info@nalandainverter.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-600 dark:text-gray-400">Address</h4>
                    <p className="text-gray-900 dark:text-white font-medium">Mumbai, Maharashtra</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
