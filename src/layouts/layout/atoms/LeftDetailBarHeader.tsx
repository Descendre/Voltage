'use client';
import { usePalette } from '@/hooks';
import { LeftDetailBarHeaderProps } from '@/interfaces';
import { AddCircleOutline, DeleteOutline } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
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
						backgroundColor: palette.primary.main,
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
						color="info"
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
						color="error"
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
