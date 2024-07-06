'use client';
import { useLayouts } from '@/hooks';
import { LeftBarProps } from '@/interfaces';
import { Box, Tooltip } from '@mui/material';

export const LeftBarIcon = ({ icon, titleJp }: LeftBarProps) => {
	const { setSelectedLeftContent } = useLayouts();

	return (
		<Tooltip title={titleJp} placement="right" arrow>
			<Box
				onClick={() => setSelectedLeftContent(titleJp)}
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
