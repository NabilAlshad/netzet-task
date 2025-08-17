'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { data } from '@/utils/data/Data';
const Navbar: React.FC = () => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);

	useEffect(() => {
		if (menuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [menuOpen]);

	return (
		<nav className='flex items-center lg:items-center justify-center lg:justify-between py-[76px] h-16   shadow bg-transparent w-full'>
			<div className='flex items-center'>
				<Image src='/logo.png' alt='Logo' width={200} height={200} className='mr-2' priority />
			</div>

			<div className='hidden lg:flex gap-8 items-center'>
				{data?.MenuItems.map((item, index) => (
					<Link key={index} href='#' className='text-[#A9A9A9] hover:text-blue-600 font-medium'>
						{item}
					</Link>
				))}
			</div>

			<button
				className='lg:hidden flex flex-col justify-center items-center w-10 h-10'
				onClick={() => setMenuOpen((open) => !open)}
				aria-label='Toggle menu'>
				<span
					className={`block w-6 h-0.5 bg-white mb-1 transition-all ${
						menuOpen ? 'rotate-45 translate-y-1.5' : ''
					}`}></span>
				<span
					className={`block w-6 h-0.5 bg-white mb-1 transition-all ${
						menuOpen ? 'opacity-0' : ''
					}`}></span>
				<span
					className={`block w-6 h-0.5 bg-white transition-all ${
						menuOpen ? '-rotate-45 -translate-y-1.5' : ''
					}`}></span>
			</button>

			{menuOpen && (
				<div className='fixed top-0 right-0 h-screen w-3/4 max-w-xs bg-black shadow-lg rounded-l-lg flex flex-col items-end p-6 gap-6 lg:hidden z-50  overflow-y-auto'>
					<button
						className='mb-4 text-white text-2xl self-end'
						onClick={() => setMenuOpen(false)}
						aria-label='Close menu'>
						&times;
					</button>
					{data?.MenuItems.map((item, index) => (
						<Link
							key={index}
							href='#'
							className='text-[#A9A9A9] hover:text-blue-600 font-medium w-full text-right text-lg py-2 border-b border-gray-700 last:border-b-0'
							onClick={() => setMenuOpen(false)}>
							{item}
						</Link>
					))}
				</div>
			)}
		</nav>
	);
};

export default Navbar;
