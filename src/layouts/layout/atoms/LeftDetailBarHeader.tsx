import { LeftDetailBarHeaderProps } from '@/interfaces';
import { AddCircleOutline, DeleteOutline } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';

export const LeftDetailBarHeader = ({ title }: LeftDetailBarHeaderProps) => {
	return (
		<Box
			sx={{
				width: '100%',
				backgroundColor: '#444',
			}}
		>
			<Box>
				<Typography
					noWrap
					variant="body1"
					sx={{
						width: '100%',
						textAlign: 'center',
					}}
				>
					{title}
				</Typography>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<IconButton
						disableTouchRipple
						size="small"
						sx={{
							width: '50%',
							borderRadius: 0,
						}}
					>
						<AddCircleOutline fontSize="small" />
					</IconButton>
					<IconButton
						disableTouchRipple
						size="small"
						sx={{
							width: '50%',
							borderRadius: 0,
						}}
					>
						<DeleteOutline fontSize="small" />
					</IconButton>
				</Box>
			</Box>
		</Box>
	);
};
