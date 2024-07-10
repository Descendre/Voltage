'use client';
import { hexToRgba, useBreakPoint, usePalette } from '@/utils';
import { Box } from '@mui/material';
import {
	FooterCommands,
	FooterPlayingContents,
	FooterPlayingDetail,
	FooterSlider,
} from '../atoms';
import { useDominantColors, useMusic, usePlayList } from '@/hooks';
import { FooterProps } from '@/interfaces';

export const Footer = ({ isLeftDetailBar }: FooterProps) => {
	const { playListTrack, lastPlayedPlayList, playingPlaylistIndex } =
		usePlayList();
	const { playingContents, isPause } = useMusic();
	const { dominantRgbaColor } = useDominantColors(
		playingContents?.album.images[0].url ||
			lastPlayedPlayList?.items[playingPlaylistIndex].track.album.images[0]
				.url ||
			''
	);
	const palette = usePalette();
	const breakpoint = useBreakPoint();

	return (
		<>
			<Box
				display={['xs'].includes(breakpoint) ? 'none' : 'flex'}
				justifyContent="start"
				alignItems="center"
				position="fixed"
				bottom={0}
				width={`calc(100% - 50px - ${isLeftDetailBar ? '300px' : '0px'})`}
				height="100px"
				color="#fff"
				sx={{
					backgroundColor: palette.layout.secondary,
					borderTop: `solid 1px ${palette.layout.line}`,
				}}
			>
				<Box
					display="flex"
					justifyContent="centr"
					alignItems="center"
					gap="20px"
					width="250px"
					height="100%"
				>
					{(playingContents || playListTrack) && (
						<Box
							position="relative"
							display="flex"
							justifyContent="center"
							alignItems="center"
							gap="20px"
							width="100%"
							height="100%"
							padding="0 10px"
						>
							<FooterPlayingContents />
							<FooterPlayingDetail />
							<Box
								zIndex={1}
								position="absolute"
								top={0}
								left={0}
								width="100%"
								height="100%"
								sx={{
									opacity: isPause ? 0 : 1,
									transition: 'opacity 0.3s ease-in-out',
									background: isPause
										? 'transparent'
										: `linear-gradient(to right, rgba(${dominantRgbaColor}, 0.4), transparent)`,
								}}
							/>
						</Box>
					)}
				</Box>

				<Box
					position="relative"
					display="flex"
					justifyContent="center"
					alignItems="center"
					flexDirection="column"
					width="calc(100% - 250px)"
					height="100%"
					padding="10px 20px"
					margin="0 auto"
				>
					<FooterCommands />
					<FooterSlider />

					<Box
						zIndex={1}
						position="absolute"
						top={0}
						right={0}
						width="70%"
						height="100%"
						sx={{
							backgroundImage: `linear-gradient(to left, rgba(${hexToRgba(palette.layout.secondary)}, 0.6), rgba(${hexToRgba(palette.layout.secondary)}, 1)), url('${playingContents?.album.images[0].url || lastPlayedPlayList?.items[playingPlaylistIndex].track.album.images[0].url}')`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							backgroundClip: 'content-box',
						}}
					/>
				</Box>
			</Box>

			<Box
				height="100px"
				width="100%"
				display={['xs'].includes(breakpoint) ? 'none' : 'block'}
			></Box>
		</>
	);
};
