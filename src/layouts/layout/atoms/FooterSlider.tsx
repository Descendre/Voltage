'use client';
import { useMusic } from '@/hooks';
import { formatTime, usePalette } from '@/utils';
import { Box, Slider, Typography } from '@mui/material';

export const FooterSlider = () => {
	const {
		trackValue,
		duration,
		currentTime,
		handleSeekTrack,
		handleSeekCommitted,
		playingContents,
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
			<Typography variant="body2">{formatTime(currentTime)}</Typography>
			<Slider
				disabled={!playingContents}
				value={trackValue}
				min={0}
				max={duration - 1}
				color="primary"
				onChange={(event, value) =>
					handleSeekTrack({ event: event, value: value })
				}
				onChangeCommitted={(event, value) =>
					handleSeekCommitted({ event: event, value: value })
				}
				sx={{
					width: '100%',
					'&:hover': {
						'& .MuiSlider-thumb': {
							width: 15,
							height: 15,
							borderRadius: '50%',
						},
					},
					'& .MuiSlider-thumb': {
						width: 0,
						height: 0,
						borderRadius: '0%',
					},
					'& .MuiSlider-rail': {
						height: '5px',
						opacity: 1,
						backgroundColor: palette.layout.slider.rail,
					},
				}}
			/>
			<Typography variant="body2">{formatTime(duration)}</Typography>
		</Box>
	);
};
