import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'test01',
	description: 'test01',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
