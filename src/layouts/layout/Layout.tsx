'use client';
import React, { ReactNode } from 'react';
import {
	Footer,
	Header,
	LeftBar,
	LeftDetailBar,
	PlayListModal,
} from './blocks';
import { Box } from '@mui/material';
import { useLayouts } from '@/hooks';

export const Layout = ({ children }: { children: ReactNode }) => {
	const { selectedLeftContent, isLeftDetail } = useLayouts();

	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'start',
					alignItems: 'start',
					height: '100vh',
					width: '100%',
					overflowX: 'hidden',
				}}
			>
				<Header />
				<Box
					sx={{
						height: 'calc(100% - 60px)',
						display: 'flex',
						width: '100%',
					}}
				>
					<LeftBar />
					{selectedLeftContent &&
						selectedLeftContent !== 'プロフィール' &&
						isLeftDetail && <LeftDetailBar />}
					<Box position="relative" flexGrow={1} height="100%">
						<Box
							height="calc(100% - 80px)"
							sx={{
								overflowY: 'overlay',
							}}
						>
							{children}
						</Box>
						<Footer />
					</Box>
				</Box>
			</Box>

			<PlayListModal />
		</>
	);
};
