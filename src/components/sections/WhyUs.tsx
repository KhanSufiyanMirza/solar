'use client';
import { motion, useInView } from 'framer-motion';
import { HiOutlineLightBulb, HiOutlineCurrencyRupee, HiOutlineClock, HiOutlineShieldCheck } from 'react-icons/hi';
import { useRef } from 'react';
import { useTheme } from '../ThemeProvider';
import Image from 'next/image';

const features = [
	{
		title: 'High Efficiency',
		description: 'Our solar panels deliver maximum power output with industry-leading efficiency rates',
		icon: HiOutlineLightBulb,
	},
	{
		title: 'Cost Effective',
		description: 'Significant reduction in electricity bills with quick return on investment',
		icon: HiOutlineCurrencyRupee,
	},
	{
		title: 'Long Lasting',
		description: '25-year performance warranty ensuring decades of reliable power generation',
		icon: HiOutlineClock,
	},
	{
		title: 'Quality Assured',
		description: 'Premium Luminous products with comprehensive warranty and support',
		icon: HiOutlineShieldCheck,
	},
];

export default function WhyUs() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });
	const { theme } = useTheme();

	return (
		<section ref={ref} id="why-us" className="py-24 relative overflow-hidden">
			<div className="absolute inset-0 -z-10">
				{/* Background overlay - darkened for both themes */}
				<div
					className={`absolute inset-0 z-10 transition-colors duration-1000 ${
						theme === 'light'
							? 'bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-700/60'
							: 'bg-gradient-to-br from-gray-900/90 via-gray-800/85 to-gray-700/80'
					}`}
				/>

				{/* Background image - adjusted brightness */}
				<Image
					src="/hero-bg.jpg"
					alt="Solar panels background"
					fill
					className={`object-cover scale-[1.02] transition-all duration-1000 ${
						theme === 'light' ? 'brightness-110' : 'brightness-75'
					}`}
					priority
				/>
			</div>

			{/* Content */}
			<div className="container mx-auto px-4 relative z-20">
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
						className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
					>
						Why Choose Us
					</motion.h2>
					<motion.p
						initial={{ y: 20, opacity: 0 }}
						animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className={`text-lg max-w-2xl mx-auto ${theme === 'light' ? 'text-gray-900' : 'text-gray-300'}`}
					>
						Experience the benefits of solar energy with our premium solutions and expert service
					</motion.p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{features.map((feature, index) => (
						<motion.div
							key={feature.title}
							initial={{ y: 50, opacity: 0 }}
							animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
							transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
							className="relative group"
						>
							<div className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${theme === 'light' ? 'bg-gray-800/90' : 'bg-gray-800/90'}`}>
								<div className="mb-4 relative">
									<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 dark:from-orange-400 dark:to-yellow-400 flex items-center justify-center text-white">
										<feature.icon className="w-6 h-6" />
									</div>
									<motion.div
										initial={false}
										animate={
											isInView
												? {
														opacity: [0, 0.2, 0],
														scale: [1, 1.2, 1],
												  }
												: { opacity: 0 }
										}
										transition={{
											duration: 2,
											delay: 1 + index * 0.2,
											repeat: Infinity,
											repeatDelay: 3,
										}}
										className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg"
									/>
								</div>
								<h3 className={`text-xl font-semibold mb-2 ${theme === 'light' ? 'text-white' : 'text-white'}`}>
									{feature.title}
								</h3>
								<p className={`${theme === 'light' ? 'text-gray-100' : 'text-gray-300'}`}>{feature.description}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
