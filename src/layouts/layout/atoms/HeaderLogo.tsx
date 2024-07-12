'use client';
import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';

export const HeaderLogo = () => {
	return (
		<Box
			height="100%"
			display="flex"
			justifyContent="center"
			alignItems="center"
			sx={{
				cursor: 'pointer',
			}}
		>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				width="50px"
				height="100%"
			>
				<Avatar
					src={'/Voltage_icon2_transparent.svg'}
					variant="square"
					sx={{
						fill: 'red',
						width: '70%',
						height: '70%',
						aspectRatio: '1/1',
						maxWidth: '50vw',
					}}
				/>
			</Box>

			<Typography variant="h6" fontWeight="bold">
				Voltage
			</Typography>
		</Box>
	);
};
