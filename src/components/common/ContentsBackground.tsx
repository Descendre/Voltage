'use client';
import { useDominantColors } from '@/hooks';
import { ContentsBackgroundProps } from '@/interfaces';
import { Box } from '@mui/material';

export const ContentsBackground = ({ url }: ContentsBackgroundProps) => {
	const { dominantRgbaColor } = useDominantColors(url || '');

	return (
		<Box
			zIndex={-1}
			position="fixed"
			top={0}
			left={0}
			width="100%"
			height="100%"
			sx={{
				backgroundColor: `rgba(${dominantRgbaColor}, 0.1)`,
				transition: 'background-color 0.3s ease',
			}}
		></Box>
	);
};
