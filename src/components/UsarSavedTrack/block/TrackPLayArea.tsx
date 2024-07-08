'use client';
import { useMusic, useSelectedContent } from '@/hooks';
import { PlayCircle } from '@mui/icons-material';
import { Box } from '@mui/material';

export const TrackPLayArea = () => {
	const { selectedContents } = useSelectedContent();
	const { handlePlayTrack } = useMusic();

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
				handlePlayTrack(selectedContents.userSavedTrack?.preview_url)
			}
		>
			<PlayCircle
				sx={{
					width: '50px',
					height: '50px',
				}}
			/>
		</Box>
	);
};
