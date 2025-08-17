'use client';

import { data } from '@/utils/data/Data';
import React from 'react';
import Button from '../base/Button';
import Image from 'next/image';
import Arrow from '@/utils/svgs/Arrow';

const HeroSection: React.FC = ({}) => {
	return (
		<div className='flex flex-col lg:flex-row w-full h-[400px] lg:relative static mt-3'>
			<div className='w-full lg:w-[60%] bg-transparent lg:absolute lg:left-[50%]'>
				<Image src='/hero.png' width={1000} height={100} alt='hero banner' />
			</div>
			<div className='w-full lg:w-[55%] z-9999 mb-[100px]'>
				<h3
					className='text-[25px] text-center lg:text-left lg:text-[35px] font-bold mt-3'
					style={{ fontFamily: 'var(--font-urbanist), sans-serif' }}>
					{data?.Header}
					<br />
					<span
						className='text-[#00E7F9] text-center lg:text-left text-[25px] lg:text-[35px] drop-shadow-[0_4px_4px_#FC004E]'
						style={{ fontFamily: 'var(--font-urbanist), sans-serif' }}>
						{data?.Description}
					</span>
				</h3>

				<div className=''>
					{data?.List?.map((item, index) => (
						<p key={index} className='text-[#FFFFF] font-semibold text-[1	6px] mt-2'>
							<span>✨</span> {item}
						</p>
					))}
				</div>

				<div className='flex flex-col-reverse lg:flex lg:flex-col lg:items-start items-center'>
					<div className='mt-3 lg:mt-[50px]'>
						<Button className='w-[316px]  flex justify-center items-center gap-3 shadow-[2px_2px_10px_0px_#00E7F9]  text-[20px] font-bold bg-[#FC004E] p-3 rounded-2xl '>
							Get Started
							<span>
								<Arrow />
							</span>
						</Button>
						<p className='text-[12px] mb-[50px] lg:mb-3 font-normal text-[#FFFFFF] text-center mt-2'>
							1-minute quiz for personalized Insights
						</p>
					</div>

					<div className='px-5 lg:px-0 mb-5 lg:mb-[50px]'>
						<p className='text-[#ABABAB] text-center lg:text-left  text-[12px] font-[500] mt-3'>
							{data?.TermsandCondition}
						</p>
						<p className='text-[10px] text-center mt-4 lg:mt-3  lg:text-left text-[#ABABAB] font-[500]'>
							{data?.FooterText}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
