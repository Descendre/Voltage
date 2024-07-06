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
					alignItems: 'center',
					height: '100vh',
				}}
			>
				<Header />
				<Box
					sx={{
						flexGrow: 1,
						display: 'flex',
						width: '100vw',
					}}
				>
					<Box
						position="relative"
						display="flex"
						justifyContent="center"
						alignItems="start"
						maxHeight="calc(100vh - 60px)"
					>
						<LeftBar />
						{selectedLeftContent && <LeftDetailBar />}
						{children}
					</Box>
				</Box>
			</Box>

			<PlayListModal />
		</>
	);
};
