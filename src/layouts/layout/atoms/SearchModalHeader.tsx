'use client';
import { useLayouts } from '@/hooks';
import { usePalette } from '@/utils';
import { Close, Mic } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';

export const SearchModalHeader = () => {
	const { setIsSearchModal } = useLayouts();
	const palette = usePalette();

	return (
		<Box
			display="flex"
			justifyContent="space-between"
			alignItems="center"
			padding="0 20px"
			width="100%"
			height="50px"
			sx={{
				backgroundColor: palette.layout.primary,
				borderBottom: `solid 1px ${palette.layout.grayLine}`,
			}}
		>
			<Box display="flex" justifyContent="center" alignItems="center" gap="5px">
				<Mic
					fontSize="small"
					sx={{
						color: palette.icon.hide,
					}}
				/>
				<Typography variant="body2" color={palette.icon.hide}>
					Voltageに話しかける
				</Typography>
			</Box>
			<IconButton color="error" size="small">
				<Close
					fontSize="small"
					color="error"
					onClick={() => setIsSearchModal(false)}
					sx={{
						cursor: 'pointer',
					}}
				/>
			</IconButton>
		</Box>
	);
};
