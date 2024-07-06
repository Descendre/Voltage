'use client';
import { usePalette } from '@/hooks';
import { Box } from '@mui/material';
import React from 'react';
import { LeftBarIcon } from '../atoms';
import { LibraryMusicOutlined, PeopleAltOutlined } from '@mui/icons-material';

export const LeftBar = () => {
	const palette = usePalette();

	const scrollBarStyles = {
		'&::-webkit-scrollbar': {
			width: '0px',
		},
	};

	return (
		<>
			<Box
				sx={{
					...scrollBarStyles,
					position: 'fixed',
					top: '60px',
					left: 0,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'start',
					alignItems: 'center',
					width: '50px',
					height: 'calc(100vh - 60px)',
					overflowX: 'hidden',
					overflowY: 'scroll',
					backgroundColor: palette.layout.secondary,
				}}
			>
				<LeftBarIcon icon={<LibraryMusicOutlined />} titleJp="プレイリスト" />
				<LeftBarIcon icon={<PeopleAltOutlined />} titleJp="アーティスト" />
			</Box>

			<Box sx={{ width: '50px' }} />
		</>
	);
};
