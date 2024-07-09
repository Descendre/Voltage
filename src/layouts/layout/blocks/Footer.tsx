'use client';
import { useBreakPoint, usePalette } from '@/utils';
import { Box } from '@mui/material';
import {
	FooterPlayingContents,
	FooterPlayingDetail,
	FooterSlider,
} from '../atoms';
import { useDominantColors, useMusic } from '@/hooks';
import { FooterProps } from '@/interfaces';

export const Footer = ({ isLeftDetailBar }: FooterProps) => {
	const { playingContents, isPause } = useMusic();
	const { dominantRgbaColor } = useDominantColors(
		playingContents?.album.images[0].url || ''
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
				height="80px"
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
					{playingContents && (
						<Box
							position="relative"
							display="flex"
							justifyContent="centr"
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
					display="flex"
					justifyContent="center"
					alignItems="center"
					gap="20px"
					width="calc(100% - 250px)"
					height="100%"
				>
					<FooterSlider />
				</Box>
			</Box>

			<Box
				height="80px"
				width="100%"
				display={['xs'].includes(breakpoint) ? 'none' : 'block'}
			></Box>
		</>
	);
};
