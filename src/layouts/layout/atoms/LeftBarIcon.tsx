'use client';
import { useLayouts, useRouting } from '@/hooks';
import { LeftBarProps } from '@/interfaces';
import { usePalette } from '@/utils';
import { Box, Tooltip } from '@mui/material';

export const LeftBarIcon = ({ icon, titleJp, contentType }: LeftBarProps) => {
	const { handleLeftBarRouting } = useRouting();
	const palette = usePalette();
	const {
		selectedLeftContent,
		setSelectedLeftContent,
		setSelectedLastContent,
		setIsLeftDetail,
	} = useLayouts();

	const handleSelectedLeftContent = () => {
		if (titleJp === selectedLeftContent) {
			setIsLeftDetail(false);
			setSelectedLeftContent(null);
		} else {
			setIsLeftDetail(true);
			setSelectedLeftContent(titleJp);
			setSelectedLastContent(titleJp);
		}
	};

	return (
		<Tooltip title={titleJp} placement="right" arrow>
			<Box
				onClick={() => {
					handleSelectedLeftContent();
					handleLeftBarRouting({ contentType: contentType });
				}}
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					minHeight: '50px',
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
