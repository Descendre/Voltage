'use client';
import { useMusic } from '@/hooks';
import { Avatar, Box } from '@mui/material';

export const FooterPlayingContents = () => {
	const { playingContents } = useMusic();

	return (
		<Box
			height="60px"
			overflow="hidden"
			sx={{
				borderRadius: '5px',
				aspectRatio: '1/1',
				flexShrink: 0,
			}}
		>
			<Avatar
				src={playingContents?.album.images[0].url}
				variant="square"
				sx={{
					width: '100%',
					height: '100%',
					objectFit: 'cover',
				}}
			/>
		</Box>
	);
};
