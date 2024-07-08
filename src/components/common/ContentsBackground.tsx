'use client';
import { useDominantColors } from '@/hooks';
import { ContentsBackgroundProps } from '@/interfaces';
import { Box } from '@mui/material';

export const ContentsBackground = ({
	children,
	url,
}: ContentsBackgroundProps) => {
	const { dominantRgbaColor } = useDominantColors(url || '');

	return (
		<Box
			width="100%"
			height="1000px"
			sx={{
				background: `linear-gradient(to bottom, rgba(${dominantRgbaColor}, 0.4), rgba(21, 21, 21, 0))`,
			}}
		>
			{children}
		</Box>
	);
};
