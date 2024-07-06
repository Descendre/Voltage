'use client';
import { usePalette } from '@/hooks';
import { Box } from '@mui/material';
import React from 'react';
import { LeftBarIcon } from '../atoms';
import { LibraryMusicOutlined, PeopleAltOutlined } from '@mui/icons-material';

export const LeftBar = () => {
	const palette = usePalette();

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'start',
				alignItems: 'center',
				width: '50px',
				height: '100%',
				backgroundColor: palette.layout.secondary,
			}}
		>
			<LeftBarIcon icon={<LibraryMusicOutlined />} titleJp="プレイリスト" />
			<LeftBarIcon icon={<PeopleAltOutlined />} titleJp="アーティスト" />
		</Box>
	);
};
