'use client';
import React, { ReactNode } from 'react';
import { Header, LeftBar, LeftDetailBar, PlayListModal } from './blocks';
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
					height: '100%',
					maxWidth: '100vw',
					overflowX: 'hidden',
				}}
			>
				<Header />
				<Box
					sx={{
						display: 'flex',
						width: '100%',
					}}
				>
					<LeftBar />
					{selectedLeftContent &&
						selectedLeftContent !== 'プロフィール' &&
						isLeftDetail && <LeftDetailBar />}
					<Box
						flexGrow={1}
						height="100%"
						sx={{
							overflowY: 'overlay',
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
