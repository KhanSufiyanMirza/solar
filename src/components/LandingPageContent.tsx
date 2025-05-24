'use client';

import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@/components/sections/Hero'));
const Products = dynamic(() => import('@/components/sections/Products'));
const WhyUs = dynamic(() => import('@/components/sections/WhyUs'));
const Contact = dynamic(() => import('@/components/sections/Contact'));

export default function LandingPageContent() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Products />
      <WhyUs />
      <Contact />
    </main>
  );
}
