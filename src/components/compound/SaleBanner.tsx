'use client';

import React from 'react';

const SaleBanner: React.FC = ({}) => {
	return (
		<div className='w-full [background:linear-gradient(90deg,#FC004E_0%,#10CBE0_100%)] font-extrabold p-3'>
			<h5 className='text-center text-[16px] lg:text-[22px] z-9999'>
				<span className='text-[#00E7F9]'>🚀 FRESH BEGINNINGS SALE:</span> Extra 25% OFF, Limited
				Spots - <span> start your journey today!</span>
			</h5>
		</div>
	);
};

export default SaleBanner;
