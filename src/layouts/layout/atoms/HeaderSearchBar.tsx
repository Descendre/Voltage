'use client';
import { useLayouts } from '@/hooks';
import { Search } from '@mui/icons-material';
import { Box, Chip, InputAdornment, TextField } from '@mui/material';
import React, { useRef } from 'react';

export const HeaderSearchBar = () => {
	const { setIsPlayListModal } = useLayouts();
	const disabledRef = useRef<HTMLInputElement>(null);

	const handleBarClick = (): void => {
		setIsPlayListModal(true);
		if (disabledRef.current) {
			disabledRef.current.blur();
		}
	};

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
			<Box
				onClick={handleBarClick}
				sx={{ width: '100%', maxWidth: '1200px', cursor: 'pointer' }}
			>
				<TextField
					fullWidth
					disabled
					inputRef={disabledRef}
					variant="outlined"
					size="small"
					placeholder="プレイリストを作成する"
					sx={{
						pointerEvents: 'none',
					}}
					inputProps={{
						readOnly: true,
						style: {
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
		</Box>
	);
};
