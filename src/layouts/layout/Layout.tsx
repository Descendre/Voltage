'use client';
import React, { ReactNode } from 'react';
import {
	Footer,
	Header,
	LeftBar,
	LeftDetailBar,
	SettingModal,
	SpeechModal,
} from './blocks';
import { Box } from '@mui/material';
import { useLayouts } from '@/hooks';
import { useBreakPoint } from '@/utils';

export const Layout = ({ children }: { children: ReactNode }) => {
	const breakpoint = useBreakPoint();
	const { selectedLeftContent, isLeftDetail } = useLayouts();

	let isLeftDetailBar: boolean;
	if (
		selectedLeftContent &&
		selectedLeftContent !== 'プロフィール' &&
		isLeftDetail
	) {
		isLeftDetailBar = true;
	} else {
		isLeftDetailBar = false;
	}

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
					{isLeftDetailBar && <LeftDetailBar />}
					<Box
						position="relative"
						width={
							['xs'].includes(breakpoint)
								? 'calc(100vw - 50px)'
								: `calc(100% - ${isLeftDetailBar ? '350px' : '50px'})`
						}
						height="100%"
					>
						<Box
							width="100%"
							height={
								['xs'].includes(breakpoint) ? '100%' : 'calc(100% - 100px)'
							}
							sx={{
								overflowY: 'overlay',
							}}
						>
							{children}
						</Box>
						<Footer isLeftDetailBar={isLeftDetailBar} />
					</Box>
				</Box>
			</Box>

			<SpeechModal />
			<SettingModal />
		</>
	);
};
