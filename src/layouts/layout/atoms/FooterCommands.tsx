'use client';
import { useMusic } from '@/hooks';
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
		playingContents,
		isPause,
		handleSetNextTrack,
		handleSetPrevTrack,
		repeatMode,
		setRepeatMode,
	} = useMusic();
	const palette = usePalette();

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
			{!playingContents ? (
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
						onClick={() => handleSetPrevTrack()}
					/>
				</Tooltip>
			)}
			{!playingContents ? (
				<Tooltip title="再生" placement="top">
					<PlayCircle
						fontSize="large"
						sx={{
							color: palette.icon.hide,
						}}
					/>
				</Tooltip>
			) : isPause && playingContents?.id === playingContents?.id ? (
				<Tooltip title="再生" placement="top">
					<PlayCircle
						fontSize="large"
						sx={{
							cursor: 'pointer',
							color: palette.icon.main,
						}}
						onClick={() =>
							handlePlayTrack({
								url: playingContents?.preview_url,
								content: playingContents,
							})
						}
					/>
				</Tooltip>
			) : playingContents?.id === playingContents?.id ? (
				<Tooltip title="一時停止" placement="top">
					<PauseCircle
						fontSize="large"
						sx={{
							cursor: 'pointer',
							color: palette.icon.main,
						}}
						onClick={() =>
							handlePlayTrack({
								url: playingContents?.preview_url,
								content: playingContents,
							})
						}
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
						onClick={() =>
							handlePlayTrack({
								url: playingContents?.preview_url,
								content: playingContents,
							})
						}
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
			{!playingContents ? (
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
						onClick={() => handleSetNextTrack()}
					/>
				</Tooltip>
			)}
		</Box>
	);
};
