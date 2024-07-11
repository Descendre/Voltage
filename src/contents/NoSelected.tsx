'use client';
import { useBreakPoint } from '@/utils';
import { Avatar, Box } from '@mui/material';

export const NoSelected = () => {
	const breakpoint = useBreakPoint();

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			width="100%"
			height="100%"
		>
			<Avatar
				src="Voltage_logo2.svg"
				variant="square"
				sx={{
					width: ['xs'].includes(breakpoint) ? '70%' : '50%',
					height: 'auto',
					filter: 'brightness(15%)',
				}}
			/>
		</Box>
	);
};
