'use clinet';
import { useSelectedContent } from '@/hooks';
import { TrackHeaderDetailProps } from '@/interfaces';
import { Box, Typography } from '@mui/material';

export const TrackHeaderDetail = ({ isColumn }: TrackHeaderDetailProps) => {
	const { selectedContents } = useSelectedContent();

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="start"
			flexDirection="column"
			gap="5px"
			sx={{
				width: '100%',
				height: '100%',
			}}
		>
			<Typography
				sx={{
					width: '100%',
					wordBreak: 'break-all',
					overflow: 'hidden',
					textOverflow: 'ellipsis',
					display: '-webkit-box',
					WebkitLineClamp: isColumn ? 3 : 2,
					WebkitBoxOrient: 'vertical',
				}}
				textAlign={isColumn ? 'center' : 'left'}
				variant={isColumn ? 'h4' : 'h3'}
				fontWeight="bold"
			>
				{selectedContents.userSavedTrack?.name}
			</Typography>
			<Typography
				textAlign={isColumn ? 'center' : 'left'}
				sx={{
					width: '100%',
					overflow: 'hidden',
					textOverflow: 'ellipsis',
					whiteSpace: 'nowrap',
				}}
				variant="h6"
			>
				{selectedContents.userSavedTrack?.artists.map((artist, index) => (
					<span key={index}>
						{index > 0 && '・'}
						{artist.name}
					</span>
				))}
			</Typography>
		</Box>
	);
};
