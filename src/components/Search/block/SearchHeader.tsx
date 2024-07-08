'use client';
import { usePalette } from '@/utils';
import { SearchOutlined } from '@mui/icons-material';
import { Box, InputAdornment, TextField } from '@mui/material';
import { SearchInput } from '../atom';

export const SearchHeader = () => {
	const palette = usePalette();

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			width="100%"
			height="100px"
		>
			<SearchInput />
		</Box>
	);
};
