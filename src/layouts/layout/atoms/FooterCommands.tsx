'use client';
import { useMusic, usePlayList } from '@/hooks';
import { usePalette } from '@/utils';
import {
	PauseCircle,
	PlayCircle,
	Repeat,
	RepeatOne,
	SkipNext,
	SkipPrevious,
} from '@mui/icons-material';
import { Box, Tooltip } from '@mui/material';

export const FooterCommands = () => {
	const {
		handlePlayTrack,
		handlePlayPlayList,
		playingContents,
		isPause,
		handleSetNextTrack,
		handleSetPrevTrack,
		handleSetNextPlayListTrack,
		handleSetPrevPlayListTrack,
		repeatMode,
		setRepeatMode,
	} = useMusic();
	const { playingPlayList, playListTrack } = usePlayList();
	const palette = usePalette();

	const handleTrackPlay = (): void => {
		if (playingContents) {
			handlePlayTrack({
				url: playingContents?.preview_url,
				content: playingContents,
			});
		} else if (playingPlayList) {
			handlePlayPlayList({
				url: playListTrack?.items[0].track.preview_url,
				content: playingPlayList,
			});
		}
	};

	const handleTrackNext = (): void => {
		if (playingContents) {
			handleSetNextTrack();
		} else if (playingPlayList) {
			handleSetNextPlayListTrack();
		}
	};

	const handleTrackPrev = (): void => {
		if (playingContents) {
			handleSetPrevTrack();
		} else if (playingPlayList) {
			handleSetPrevPlayListTrack();
		}
	};

	return (
		<Box
			zIndex={10}
			display="flex"
			justifyContent="center"
			alignItems="center"
			gap="20px"
			width="100%"
			height="50%"
		>
			{!playingContents && !playingPlayList ? (
				<Tooltip title="前へ" placement="top">
					<SkipPrevious
						sx={{
							color: palette.icon.hide,
						}}
					/>
				</Tooltip>
			) : (
				<Tooltip title="前へ" placement="top">
					<SkipPrevious
						sx={{
							cursor: 'pointer',
							color: palette.icon.hide,
							'&:hover': {
								color: palette.icon.main,
							},
						}}
						onClick={() => handleTrackPrev()}
					/>
				</Tooltip>
			)}
			{!playingContents && !playingPlayList ? (
				<Tooltip title="再生" placement="top">
					<PlayCircle
						fontSize="large"
						sx={{
							color: palette.icon.hide,
						}}
					/>
				</Tooltip>
			) : isPause && (playingContents || playingPlayList) ? (
				<Tooltip title="再生" placement="top">
					<PlayCircle
						fontSize="large"
						sx={{
							cursor: 'pointer',
							color: palette.icon.main,
						}}
						onClick={() => handleTrackPlay()}
					/>
				</Tooltip>
			) : playingContents || playingPlayList ? (
				<Tooltip title="一時停止" placement="top">
					<PauseCircle
						fontSize="large"
						sx={{
							cursor: 'pointer',
							color: palette.icon.main,
						}}
						onClick={() => handleTrackPlay()}
					/>
				</Tooltip>
			) : (
				<Tooltip title="再生" placement="top">
					<PlayCircle
						fontSize="large"
						sx={{
							cursor: 'pointer',
							color: palette.icon.main,
						}}
						onClick={() => handleTrackPlay()}
					/>
				</Tooltip>
			)}
			{repeatMode === 'default' ? (
				<Tooltip title="リピートを有効にする" placement="top">
					<Repeat
						sx={{
							cursor: 'pointer',
							color: palette.icon.hide,
							'&:hover': {
								color: palette.icon.main,
							},
						}}
						onClick={() => setRepeatMode('repeat')}
					/>
				</Tooltip>
			) : repeatMode === 'repeat' ? (
				<Tooltip title="1曲リピートを有効" placement="top">
					<Repeat
						sx={{
							cursor: 'pointer',
							color: palette.primary.main,
							'&:hover': {
								color: palette.primary.main,
							},
						}}
						onClick={() => setRepeatMode('one')}
					/>
				</Tooltip>
			) : (
				<Tooltip title="リピートを無効にする" placement="top">
					<RepeatOne
						sx={{
							cursor: 'pointer',
							color: palette.primary.main,
							'&:hover': {
								color: palette.primary.main,
							},
						}}
						onClick={() => setRepeatMode('default')}
					/>
				</Tooltip>
			)}
			{!playingContents && !playingPlayList ? (
				<Tooltip title="次へ" placement="top">
					<SkipNext
						sx={{
							color: palette.icon.hide,
						}}
					/>
				</Tooltip>
			) : (
				<Tooltip title="次へ" placement="top">
					<SkipNext
						sx={{
							cursor: 'pointer',
							color: palette.icon.hide,
							'&:hover': {
								color: palette.icon.main,
							},
						}}
						onClick={() => handleTrackNext()}
					/>
				</Tooltip>
			)}
		</Box>
	);
};
