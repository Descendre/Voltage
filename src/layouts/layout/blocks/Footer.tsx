import { usePalette } from '@/utils';
import { Box } from '@mui/material';

export const Footer = () => {
	const palette = usePalette();

	return (
		<>
			<Box
				position="fixed"
				bottom={0}
				width="100%"
				height="80px"
				color="#fff"
				sx={{
					backgroundColor: palette.layout.secondary,
				}}
			>
				Footer
			</Box>
			<Box height="80px"></Box>
		</>
	);
};
