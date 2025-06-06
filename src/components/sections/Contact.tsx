'use client';
import { motion, useInView } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useRef, useState } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.',
      });
      setFormState({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: (error as Error).message || 'Failed to submit form',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  required
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
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  required
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
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Your message"
                />
              </div>
              {submitStatus.type && (
                <div
                  className={`p-3 rounded-lg text-sm ${
                    submitStatus.type === 'success'
                      ? 'bg-green-100 text-green-700 dark:bg-green-800/30 dark:text-green-400'
                      : 'bg-red-100 text-red-700 dark:bg-red-800/30 dark:text-red-400'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-orange-500 to-yellow-500 dark:from-orange-400 dark:to-yellow-400 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl
                  ${
                    isSubmitting
                      ? 'opacity-75 cursor-not-allowed'
                      : 'hover:from-orange-600 hover:to-yellow-600 dark:hover:from-orange-500 dark:hover:to-yellow-500'
                  }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
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
                
                {/* Address with Map */}
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white">
                      <FaMapMarkerAlt className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-600 dark:text-gray-400">Address</h4>
                      <p className="text-gray-900 dark:text-white font-medium">
                        Shop No -8, Arihant Plaza, Plot No -162, Near Suruchi Hotel, Mcch Society, Panvel-410206
                      </p>
                    </div>
                  </div>
                  
                  {/* Embedded Map */}
                  <div className="aspect-video w-full rounded-lg overflow-hidden shadow-md">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d942.9533456115991!2d73.11378571850725!3d18.988011099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU5JzE2LjgiTiA3M8KwMDYnNTEuOCJF!5e0!3m2!1sen!2sin!4v1653644101234!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
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
