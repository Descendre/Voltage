import { useMusic, usePlayList } from '@/hooks';
import { usePalette } from '@/utils';
import { Box, Typography, keyframes } from '@mui/material';
import { useEffect, useState } from 'react';

export const FooterPlayingDetail = () => {
	const [animationTime, setAnimationTime] = useState<number>(10);
	const { playingContents, isPause } = useMusic();
	const { lastPlayedPlayList, playingPlayList, playingPlaylistIndex } =
		usePlayList();
	const palette = usePalette();

	const loop = keyframes`
		0% {
			transform: translateX(100%);
		}
		100% {
			transform: translateX(-100%);
		}
	`;

	useEffect(() => {
		if (playingContents?.name) {
			const titleLength = playingContents.name.length;
			if (titleLength > 20) {
				setAnimationTime(Math.round(10 + (titleLength - 20) / 2.5));
			} else {
				setAnimationTime(10);
			}
		}
	}, [playingContents]);

	useEffect(() => {
		if (lastPlayedPlayList?.items[playingPlaylistIndex]?.track?.name) {
			const titleLength =
				lastPlayedPlayList.items[playingPlaylistIndex]?.track?.name?.length;
			if (titleLength > 20) {
				setAnimationTime(Math.round(10 + (titleLength - 20) / 2.5));
			} else {
				setAnimationTime(10);
			}
		}
	}, [lastPlayedPlayList]);

	return (
		<Box
			zIndex={10}
			display="flex"
			justifyContent="center"
			alignItems="start"
			flexDirection="column"
			gap="5px"
			sx={{
				width: 'calc(100% - 70px)',
				height: '100%',
				overflow: 'hidden',
			}}
		>
			<Box
				sx={{
					width: '100%',
					maxWidth: '250px',
					overflow: 'hidden',
					whiteSpace: 'nowrap',
				}}
			>
				<Typography
					sx={{
						width: 'fit-content',
						minWidth: '100%',
						display: 'inline-block',
						whiteSpace: 'nowrap',
						animation: `${loop} ${animationTime}s linear infinite`,
						animationPlayState: isPause ? 'paused' : 'unset',
					}}
					variant="body2"
				>
					{playingContents?.name ||
						lastPlayedPlayList?.items[playingPlaylistIndex]?.track?.name}
				</Typography>
			</Box>
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
				{playingContents?.artists[0].name || playingPlayList?.name}
			</Typography>
		</Box>
	);
};
