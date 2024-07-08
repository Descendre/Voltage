'use client';
import { usePalette } from '@/utils';
import { SearchOutlined } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';

export const SearchInput = () => {
	const palette = usePalette();

	return (
		<TextField
			color="primary"
			variant="outlined"
			size="small"
			placeholder="コンテンツを検索する"
			sx={{
				width: '90%',
				'& .MuiOutlinedInput-root': {
					'& fieldset': {
						borderColor: palette.layout.grayLine,
					},
					'&:hover fieldset': {
						borderColor: palette.layout.grayLine,
					},
					'&:hover.Mui-focused fieldset': {
						borderColor: palette.primary.main,
					},
				},
			}}
			inputProps={{
				style: {
					height: '20px',
					fontSize: '0.9rem',
				},
			}}
			InputProps={{
				startAdornment: (
					<InputAdornment position="start">
						<SearchOutlined
							fontSize="small"
							sx={{ color: palette.icon.hide }}
						/>
					</InputAdornment>
				),
			}}
		/>
	);
};
