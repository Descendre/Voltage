import { useBreakPoint, usePalette } from '@/utils';
import { Box } from '@mui/material';

export const Footer = () => {
	const palette = usePalette();
	const breakpoint = useBreakPoint();

	return (
		<>
			<Box
				display={['xs'].includes(breakpoint) ? 'none' : 'block'}
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
			<Box
				height="80px"
				display={['xs'].includes(breakpoint) ? 'none' : 'block'}
			></Box>
		</>
	);
};
