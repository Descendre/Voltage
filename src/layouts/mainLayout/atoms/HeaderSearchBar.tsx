'use client';
import { useLayouts } from '@/hooks';
import { Search } from '@mui/icons-material';
import { Box, Chip, InputAdornment, TextField } from '@mui/material';
import React from 'react';

export const HeaderSearchBar = () => {
	const { setIsPlayListModal } = useLayouts();

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexGrow: 1,
				padding: '0 7%',
			}}
		>
			<TextField
				fullWidth
				variant="outlined"
				size="small"
				placeholder="プレイリストを作成する"
				onClick={() => setIsPlayListModal(true)}
				sx={{
					maxWidth: '1200px',
				}}
				inputProps={{
					style: {
						cursor: 'pointer',
						height: '20px',
						fontSize: '0.9rem',
					},
				}}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<Search fontSize="small" />
						</InputAdornment>
					),
					endAdornment: (
						<InputAdornment position="end">
							<Chip
								disabled
								variant="outlined"
								label="Type [/] to search"
								size="small"
							/>
						</InputAdornment>
					),
				}}
			/>
		</Box>
	);
};
