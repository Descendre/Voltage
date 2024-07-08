'use client';
import { Box } from '@mui/material';
import { TrackAvatar, TrackHeaderDetail } from '../atom';
import { TrackHeaderProps } from '@/interfaces';

export const TrackHeader = ({ isColumn }: TrackHeaderProps) => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexDirection={isColumn ? 'column' : 'row'}
			gap="20px"
			padding={isColumn ? '30px 15px' : '100px 20px 20px 20px'}
			width="100%"
		>
			<TrackAvatar />
			<TrackHeaderDetail isColumn={isColumn} />
		</Box>
	);
};
