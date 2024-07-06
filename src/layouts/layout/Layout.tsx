'use client';
import React, { ReactNode } from 'react';
import { Header, LeftBar, LeftDetailBar, PlayListModal } from './blocks';
import { Box } from '@mui/material';
import { useLayouts } from '@/hooks';

export const Layout = ({ children }: { children: ReactNode }) => {
	const { selectedLeftContent } = useLayouts();

	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'start',
					alignItems: 'start',
					height: '100vh',
					maxWidth: '100vw',
					overflowX: 'hidden',
				}}
			>
				<Header />
				<Box
					sx={{
						display: 'flex',
					}}
				>
					<LeftBar />
					{selectedLeftContent && <LeftDetailBar />}
					<Box
						flexGrow={1}
						height="100%"
						sx={{
							overflowY: 'scroll',
						}}
					>
						{children}
					</Box>
				</Box>
			</Box>

			<PlayListModal />
		</>
	);
};
