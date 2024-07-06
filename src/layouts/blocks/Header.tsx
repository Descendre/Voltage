import { Box } from '@mui/material';
import React from 'react';

export const Header = () => {
	return (
		<Box
			sx={{
				position: 'fixed',
				top: 0,
				left: 0,
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				width: '100vw',
				height: '50px',
				backgroundColor: '#aff',
			}}
		></Box>
	);
};
