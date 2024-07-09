import { useBreakPoint, usePalette } from '@/utils';
import { Box } from '@mui/material';
import { FooterPlayingContents, FooterPlayingDetail } from '../atoms';

export const Footer = () => {
	const palette = usePalette();
	const breakpoint = useBreakPoint();

	return (
		<>
			<Box
				display={['xs'].includes(breakpoint) ? 'none' : 'flex'}
				justifyContent="start"
				alignItems="center"
				position="fixed"
				bottom={0}
				width="100%"
				height="80px"
				padding="0 20px"
				color="#fff"
				sx={{
					backgroundColor: palette.layout.secondary,
				}}
			>
				<Box
					display="flex"
					justifyContent="centr"
					alignItems="center"
					gap="20px"
					width="20%"
					height="100%"
				>
					<FooterPlayingContents />
					<FooterPlayingDetail />
				</Box>

				<Box
					display="flex"
					justifyContent="centr"
					alignItems="center"
					gap="20px"
					width="80%"
					height="100%"
				>
					{/* <FooterPlayingContents /> */}
				</Box>
			</Box>
			<Box
				height="80px"
				display={['xs'].includes(breakpoint) ? 'none' : 'block'}
			></Box>
		</>
	);
};
