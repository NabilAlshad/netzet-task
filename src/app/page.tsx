'use client';

import HeroSection from '@/components/compound/HeroSection';
import Navbar from '@/components/compound/Navbar';
import SaleBanner from '@/components/compound/SaleBanner';

export default function Home() {
	return (
		<>
			<SaleBanner />
			<div className='w-full px-4 lg:px-[211px] '>
				<Navbar />
				<HeroSection />
			</div>
		</>
	);
}
