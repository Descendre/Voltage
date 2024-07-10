'use client';
import { useSelectedContent } from '@/hooks';
import { Avatar, Box } from '@mui/material';

export const PlyListAvatar = () => {
	const { selectedContents } = useSelectedContent();

	return (
		<Box
			height="150px"
			width="150px"
			overflow="hidden"
			sx={{
				borderRadius: '5px',
				aspectRatio: '1/1',
				flexShrink: 0,
			}}
		>
			<Avatar
				src={selectedContents.playList?.images[0].url}
				variant="square"
				sx={{
					width: '100%',
					height: '100%',
					objectFit: 'cover',
				}}
			/>
		</Box>
	);
};
