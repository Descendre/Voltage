'use client';
import { usePalette } from '@/hooks';
import { Box } from '@mui/material';
import React from 'react';
import { LeftDetailBarHeader } from '../atoms';

export const LeftDetailBar = () => {
	const palette = usePalette();

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'start',
				alignItems: 'center',
				width: '200px',
				height: '100%',
				backgroundColor: palette.layout.secondary,
			}}
		>
			<LeftDetailBarHeader title="aaaaa" />
		</Box>
	);
};
