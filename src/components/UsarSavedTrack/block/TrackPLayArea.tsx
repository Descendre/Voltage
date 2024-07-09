'use client';
import { useMusic, useSelectedContent } from '@/hooks';
import { PauseCircle, PlayCircle } from '@mui/icons-material';
import { Box } from '@mui/material';

export const TrackPLayArea = () => {
	const { selectedContents } = useSelectedContent();
	const { handlePlayTrack, playingContents, isPause } = useMusic();

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			width="100%"
			height="100px"
			sx={{
				cursor: 'pointer',
			}}
			onClick={() =>
				handlePlayTrack({
					url: selectedContents.userSavedTrack?.preview_url,
					content: selectedContents.userSavedTrack,
				})
			}
		>
			{isPause &&
			playingContents?.id === selectedContents.userSavedTrack?.id ? (
				<PlayCircle
					sx={{
						width: '50px',
						height: '50px',
					}}
				/>
			) : playingContents?.id === selectedContents.userSavedTrack?.id ? (
				<PauseCircle
					sx={{
						width: '50px',
						height: '50px',
					}}
				/>
			) : (
				<PlayCircle
					sx={{
						width: '50px',
						height: '50px',
					}}
				/>
			)}
		</Box>
	);
};
