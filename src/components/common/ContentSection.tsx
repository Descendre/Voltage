'use client';
import { ContentSectionProps } from '@/interfaces';
import { usePalette } from '@/utils';
import { Box } from '@mui/material';

export const ContentSection = ({ title, children }: ContentSectionProps) => {
	const palette = usePalette();

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexDirection="column"
			width="90%"
		>
			<Box
				display="flex"
				justifyContent="start"
				alignItems="center"
				width="100%"
				height="50px"
				fontSize="1.3rem"
				fontWeight="bold"
				borderBottom={`solid 1px ${palette.layout.grayLine}`}
			>
				{title}
			</Box>
			<Box width="100%" padding="20px 0">
				{children}
			</Box>
		</Box>
	);
};
