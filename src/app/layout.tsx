import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { CssBaseline } from '@mui/material';

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
			<body>
				<CssBaseline />
				<AppRouterCacheProvider>{children}</AppRouterCacheProvider>
			</body>
		</html>
	);
}
