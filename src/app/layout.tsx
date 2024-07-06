import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from '@/themes';
import { Layout } from '@/layouts';

export const metadata: Metadata = {
	title: 'Voltage',
	description: 'Voltage',
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
						<Layout>{children}</Layout>
					</AppRouterCacheProvider>
				</body>
			</ThemeProvider>
		</html>
	);
}
