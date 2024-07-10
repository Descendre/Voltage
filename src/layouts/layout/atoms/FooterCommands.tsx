'use client';
import { useMusic, useTrack } from '@/hooks';
import { usePalette } from '@/utils';
import {
	PauseCircle,
	PlayCircle,
	Repeat,
	SkipNext,
	SkipPrevious,
} from '@mui/icons-material';
import { Box, Tooltip } from '@mui/material';

export const FooterCommands = () => {
	const { handleSetNextTrack, handleSetPrevTrack } = useTrack();
	const { handlePlayTrack, playingContents, isPause } = useMusic();
	const palette = usePalette();

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			gap="20px"
			width="100%"
			height="50%"
		>
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
			{isPause && playingContents?.id === playingContents?.id ? (
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
			<Repeat
				sx={{
					cursor: 'pointer',
					color: palette.icon.hide,
					'&:hover': {
						color: palette.icon.main,
					},
				}}
			/>
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
		</Box>
	);
};
