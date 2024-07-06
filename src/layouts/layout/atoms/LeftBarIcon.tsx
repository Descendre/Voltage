import { LeftBarProps } from '@/interfaces';
import { Box, Tooltip } from '@mui/material';

export const LeftBarIcon = ({ icon, title }: LeftBarProps) => {
	return (
		<Tooltip title={title} placement="right" arrow>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					aspectRatio: '1/1',
					cursor: 'pointer',
				}}
			>
				{icon}
			</Box>
		</Tooltip>
	);
};
