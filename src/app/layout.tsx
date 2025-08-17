import type { Metadata } from 'next';
import { Figtree, Geist_Mono, Urbanist } from 'next/font/google';
import './globals.css';

const figtree = Figtree({
	variable: '--font-sans',
	subsets: ['latin'],
	display: 'swap',
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

const urbanist = Urbanist({
	variable: '--font-urbanist',
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Fametonic',
	description: 'Discover your way to success with Fametonic',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${figtree.variable} ${geistMono.variable} ${urbanist.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
