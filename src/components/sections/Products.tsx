'use client';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { useTheme } from '../ThemeProvider';
import { usePathname } from 'next/navigation';

export default function Products() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });
	const { theme } = useTheme();
	const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
	const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
	const pathname = usePathname();

	const products = [
		{
			title: 'Solar Panels',
			description:
				'High-efficiency Luminous solar panels for maximum power generation',
			image: `${process.env.NODE_ENV === 'production' ? '/solar' : ''}/products/solar-panel.jpg`,
		},
		{
			title: 'Solar Inverters',
			description: 'Reliable Luminous inverters for seamless power conversion',
			image: `${process.env.NODE_ENV === 'production' ? '/solar' : ''}/products/inverter.jpg`,
		},
		{
			title: 'Solar Batteries',
			description: 'High-capacity Luminous batteries for reliable power storage',
			image: `${process.env.NODE_ENV === 'production' ? '/solar' : ''}/products/batteries.jpg`,
		},
		// {
		// 	title: 'Complete Solar Systems',
		// 	description: 'Integrated solar solutions for homes and businesses',
		// 	image: '/products/solar-system.jpg',
		// },
	];

	const handleImageLoad = (title: string) => {
		setLoadedImages((prev) => ({ ...prev, [title]: true }));
		setImageErrors((prev) => ({ ...prev, [title]: false }));
	};

	const handleImageError = (title: string) => {
		setImageErrors((prev) => ({ ...prev, [title]: true }));
		setLoadedImages((prev) => ({ ...prev, [title]: true })); // Remove loading state
	};

	return (
		<section
			ref={ref}
			id="products"
			className="py-24 relative overflow-hidden"
		>
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
						Our Solar Solutions
					</motion.h2>
					<motion.p
						initial={{ y: 20, opacity: 0 }}
						animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className={`text-lg max-w-2xl mx-auto ${theme === 'light' ? 'text-gray-900' : 'text-gray-300'}`}
					>
						Explore our range of premium Luminous products designed for optimal performance and reliability
					</motion.p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{products.map((product, index) => (
						<motion.div
							key={product.title}
							initial={{ y: 50, opacity: 0 }}
							animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
							transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
							className={`group relative rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ${theme === 'light' ? 'bg-gray-800/90' : 'bg-gray-800/90'}`}
						>
							<div className="relative h-64 overflow-hidden bg-gray-50 dark:bg-gray-700">
								{!loadedImages[product.title] && !imageErrors[product.title] && (
									<div className="absolute inset-0 flex items-center justify-center">
										<div className="w-8 h-8 border-4 border-orange-400 dark:border-orange-500 border-t-transparent rounded-full animate-spin" />
									</div>
								)}
								{!imageErrors[product.title] && (
									<Image
										src={product.image}
										alt={product.title}
										fill
										className="object-cover transform group-hover:scale-105 transition-transform duration-500"
										sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
										priority={index === 0}
										quality={85}
										onLoad={() => handleImageLoad(product.title)}
										onError={() => handleImageError(product.title)}
									/>
								)}
								{imageErrors[product.title] && (
									<div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
										<span className="text-gray-500 dark:text-gray-400">Image not available</span>
									</div>
								)}
							</div>
							<div className="p-6">
								<h3 className={`text-xl font-semibold mb-2 group-hover:text-orange-500 transition-colors duration-300 ${theme === 'light' ? 'text-white' : 'text-white'}`}>
									{product.title}
								</h3>
								<p className={`${theme === 'light' ? 'text-gray-100' : 'text-gray-300'}`}>
									{product.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
