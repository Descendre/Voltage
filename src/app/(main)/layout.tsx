import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Layout } from '@/layouts';
import { siteTheme } from '@/themes';
import { ContextProvider } from '@/provider';

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
				<body style={{ overflow: 'hidden' }}>
					<ContextProvider>
						<CssBaseline />
						<AppRouterCacheProvider>
							<Layout>{children}</Layout>
						</AppRouterCacheProvider>
					</ContextProvider>
				</body>
			</ThemeProvider>
		</html>
	);
}
