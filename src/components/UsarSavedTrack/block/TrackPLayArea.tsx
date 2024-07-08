import { PlayCircle } from '@mui/icons-material';
import { Box } from '@mui/material';

export const TrackPLayArea = () => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			width="100%"
			height="100px"
		>
			<PlayCircle
				sx={{
					width: '50px',
					height: '50px',
				}}
			/>
		</Box>
	);
};
