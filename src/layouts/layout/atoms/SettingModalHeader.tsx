'use client';
import { useLayouts } from '@/hooks';
import { usePalette } from '@/utils';
import { Close, Settings } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';

export const SettingModalHeader = () => {
	const { setIsSettingModal } = useLayouts();
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
				<Settings
					fontSize="small"
					sx={{
						color: palette.icon.hide,
					}}
				/>
				<Typography variant="body2" color={palette.icon.hide}>
					ユーザー設定
				</Typography>
			</Box>
			<IconButton color="error" size="small">
				<Close
					fontSize="small"
					color="error"
					onClick={() => setIsSettingModal(false)}
					sx={{
						cursor: 'pointer',
					}}
				/>
			</IconButton>
		</Box>
	);
};
