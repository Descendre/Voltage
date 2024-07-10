'use client';
import { useMusic, usePlayList, useSelectedContent } from '@/hooks';
import { PauseCircle, PlayCircle } from '@mui/icons-material';
import { Box } from '@mui/material';

export const PlayListPlayArea = () => {
	const { selectedContents } = useSelectedContent();
	const { playListTrack, playingPlayList, setLastPlayedPlayList } =
		usePlayList();
	const { isPause, handlePlayPlayList } = useMusic();

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
			onClick={() => {
				handlePlayPlayList({
					url: playListTrack?.items[0].track.preview_url,
					content: selectedContents.playList,
				});
				setLastPlayedPlayList(playListTrack);
			}}
		>
			{isPause && playingPlayList?.id === selectedContents.playList?.id ? (
				<PlayCircle
					sx={{
						width: '50px',
						height: '50px',
					}}
				/>
			) : playingPlayList?.id === selectedContents.playList?.id ? (
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
