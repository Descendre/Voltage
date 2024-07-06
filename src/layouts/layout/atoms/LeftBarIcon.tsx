'use client';
import { useLayouts, usePalette } from '@/hooks';
import { LeftBarProps } from '@/interfaces';
import { Box, Tooltip } from '@mui/material';

export const LeftBarIcon = ({ icon, titleJp }: LeftBarProps) => {
	const palette = usePalette();
	const { selectedLeftContent, setSelectedLeftContent } = useLayouts();

	const handleSelectedLeftContent = () => {
		if (titleJp === selectedLeftContent) {
			setSelectedLeftContent(null);
		} else {
			setSelectedLeftContent(titleJp);
		}
	};

	return (
		<Tooltip title={titleJp} placement="right" arrow>
			<Box
				onClick={() => handleSelectedLeftContent()}
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					aspectRatio: '1/1',
					cursor: 'pointer',
					boxSizing: 'border-box',
					color:
						selectedLeftContent === titleJp
							? palette.icon.main
							: palette.icon.hide,
					backgroundColor:
						selectedLeftContent === titleJp
							? palette.layout.primary
							: 'transparent',
					borderLeft:
						selectedLeftContent === titleJp
							? `solid 2px ${palette.layout.line}`
							: 'transparent',
				}}
			>
				{icon}
			</Box>
		</Tooltip>
	);
};
