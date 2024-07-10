'use client';
import { Box } from '@mui/material';
import { TrackHeaderProps } from '@/interfaces';
import { PlayListHeaderDetail, PlyListAvatar } from '../atom';

export const PlayListHeader = ({ isColumn }: TrackHeaderProps) => {
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
			<PlyListAvatar />
			<PlayListHeaderDetail isColumn={isColumn} />
		</Box>
	);
};
