'use client';
import { useMusic, usePlayList, useSelectedContent } from '@/hooks';
import { PauseCircle, PlayCircle } from '@mui/icons-material';
import { Box } from '@mui/material';

export const PlayListPlayArea = () => {
	const { selectedContents } = useSelectedContent();
	const {
		playListTrack,
		playingPlayList,
		setLastPlayedPlayList,
		playingPlaylistIndex,
	} = usePlayList();
	const { isPause, handlePlayPlayList } = useMusic();
	const isSelected = (): boolean => {
		const isSelected: boolean =
			playingPlayList?.id === selectedContents.playList?.id;
		return isSelected;
	};

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
					url: playListTrack?.items[isSelected() ? playingPlaylistIndex : 0]
						?.track?.preview_url,
					content: selectedContents.playList,
					index: isSelected() ? playingPlaylistIndex : 0,
				});
				setLastPlayedPlayList(playListTrack);
			}}
		>
			{isPause && isSelected() ? (
				<PlayCircle
					sx={{
						width: '50px',
						height: '50px',
					}}
				/>
			) : isSelected() ? (
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
