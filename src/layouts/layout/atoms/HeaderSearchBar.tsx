'use client';
import { useLayouts } from '@/hooks';
import { usePalette } from '@/utils';
import { Mic } from '@mui/icons-material';
import { Box, Chip, InputAdornment, TextField } from '@mui/material';
import React, { useRef } from 'react';

export const HeaderSearchBar = () => {
	const { setIsSpeechModal } = useLayouts();
	const palette = usePalette();
	const disabledRef = useRef<HTMLInputElement>(null);

	const handleBarClick = (): void => {
		setIsSpeechModal(true);
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
					placeholder="Voltageに話しかける"
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
								<Mic fontSize="small" sx={{ color: palette.icon.hide }} />
							</InputAdornment>
						),
						endAdornment: (
							<InputAdornment position="end">
								<Chip
									disabled
									variant="outlined"
									label="Type [/] to speech"
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
