'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaMedal, FaCertificate, FaCalendarAlt, FaUsers, FaMoneyBillWave, FaCreditCard } from 'react-icons/fa';
import { HiDocumentText } from 'react-icons/hi';

const details = {
  establishment: {
    label: 'Year of Establishment',
    value: '2002',
    icon: FaCalendarAlt,
  },
  employees: {
    label: 'No of Employee',
    value: 'Less than 10',
    icon: FaUsers,
  },
  turnover: {
    label: 'Turn Over',
    value: '6 - 10 Crores',
    icon: FaMoneyBillWave,
  },
  gstin: {
    label: 'GSTIN',
    value: '27AJEPA7712N1Z4',
    icon: HiDocumentText,
  },
  association: {
    label: 'Professional Association',
    value: 'Luminous',
    icon: FaCertificate,
  },
};

const awards = [
  {
    type: 'Award',
    date: 'Apr - 2022',
    title: 'Go grow Luminous',
    issuer: 'Luminous',
  },
  {
    type: 'Award',
    date: 'Apr - 2022',
    title: 'Mumbai raigad',
    issuer: 'Luminous',
  },
  {
    type: 'Certificate',
    date: 'Sep - 2023',
    title: 'Distributor certificate',
    issuer: 'Luminous',
  },
  {
    type: 'Certificate',
    date: 'Sep - 2019',
    title: 'Maharashtra higher growth',
    issuer: 'Luminous',
  },
];

const paymentMethods = [
  'Visa / Master Card / Rupay',
  'Cheque / Demand Draft',
  'Cash',
];

export default function BusinessDetails() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="business-details" className="py-24 relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
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
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent"
          >
            Business Profile
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Established in 2002, we are an authorized distributor of Luminous products
          </motion.p>
        </motion.div>

        {/* Business Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {Object.entries(details).map(([key, detail], index) => (
            <motion.div
              key={key}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-orange-100 dark:bg-orange-900">
                  <detail.icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {detail.label}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{detail.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards and Certificates */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Awards & Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.9 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  {award.type === 'Award' ? (
                    <FaMedal className="w-6 h-6 text-yellow-500" />
                  ) : (
                    <FaCertificate className="w-6 h-6 text-blue-500" />
                  )}
                  <span className="text-sm text-gray-500 dark:text-gray-400">{award.date}</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {award.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{award.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Payment Methods */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Mode of Payment
          </h3>
          <div className="inline-flex flex-wrap justify-center gap-4">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md"
              >
                <FaCreditCard className="text-orange-500" />
                <span className="text-gray-700 dark:text-gray-300">{method}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
