'use client';
import { useMusic, usePlayList, useSelectedContent } from '@/hooks';
import { Avatar, Box } from '@mui/material';

export const FooterPlayingContents = () => {
	const { lastPlayedPlayList } = usePlayList();
	const { playingContents } = useMusic();

	return (
		<Box
			zIndex={10}
			height="60px"
			overflow="hidden"
			sx={{
				borderRadius: '5px',
				aspectRatio: '1/1',
				flexShrink: 0,
			}}
		>
			<Avatar
				src={
					playingContents?.album.images[0].url ||
					lastPlayedPlayList?.items[0].track.album.images[0].url
				}
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
