import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import QueryProvider from '@/lib/providers/QueryProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Nutrition Analysis App',
	description: 'Analyze the nutritional content of any food or recipe',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} min-h-screen flex flex-col bg-gray-50`}>
				<QueryProvider>
					<Header />
					<main className="flex-grow container mx-auto px-4 py-8">
						{children}
					</main>
					<Footer />
				</QueryProvider>
			</body>
		</html>
	);
}
