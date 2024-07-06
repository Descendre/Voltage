import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { MainLayout } from '@/layouts';
import { siteTheme } from '@/themes';

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
			<ThemeProvider theme={siteTheme}>
				<body>
					<CssBaseline />
					<AppRouterCacheProvider>
						<MainLayout>{children}</MainLayout>
					</AppRouterCacheProvider>
				</body>
			</ThemeProvider>
		</html>
	);
}
