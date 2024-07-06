import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from '@/themes';
import { Header } from '@/layouts';

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
			<ThemeProvider theme={darkTheme}>
				<body>
					<CssBaseline />
					<AppRouterCacheProvider>
						<Header />
						{children}
					</AppRouterCacheProvider>
				</body>
			</ThemeProvider>
		</html>
	);
}
