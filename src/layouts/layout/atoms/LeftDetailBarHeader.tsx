'use client';
import { LeftDetailBarHeaderProps } from '@/interfaces';
import { usePalette } from '@/utils';
import { Box, Typography } from '@mui/material';
import React from 'react';

export const LeftDetailBarHeader = ({ title }: LeftDetailBarHeaderProps) => {
	const palette = usePalette();

	return (
		<Box
			sx={{
				width: '100%',
			}}
		>
			<Box>
				<Typography
					noWrap
					variant="body2"
					fontWeight="bold"
					sx={{
						width: '100%',
						padding: '5px 0',
						textAlign: 'center',
						fontSize: '0.8rem',
						backgroundColor: palette.layout.heading,
					}}
				>
					{title}
				</Typography>
			</Box>
		</Box>
	);
};
