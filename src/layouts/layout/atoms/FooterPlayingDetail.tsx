import { useMusic } from '@/hooks';
import { usePalette } from '@/utils';
import { Box, Typography } from '@mui/material';

export const FooterPlayingDetail = () => {
	const { playingContents } = useMusic();
	const palette = usePalette();

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="start"
			flexDirection="column"
			gap="5px"
			sx={{
				width: 'calc(100% - 70px)',
				height: '100%',
			}}
		>
			<Typography
				sx={{
					width: '100%',
					overflow: 'hidden',
					textOverflow: 'ellipsis',
					whiteSpace: 'nowrap',
				}}
				variant="body2"
			>
				{playingContents?.name}
			</Typography>
			<Typography
				sx={{
					width: '100%',
					overflow: 'hidden',
					textOverflow: 'ellipsis',
					whiteSpace: 'nowrap',
					color: palette.text.secondary,
				}}
				variant="body2"
			>
				{playingContents?.artists[0].name}
			</Typography>
		</Box>
	);
};
