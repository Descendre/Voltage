'use client';
import { Box, CircularProgress } from '@mui/material';
import React from 'react';

export const LeftDetailBarProgress = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				height: '100px',
			}}
		>
			<CircularProgress color="primary" size={30} />
		</Box>
	);
};
