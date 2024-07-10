'use client';
import { PlayListHeader, PlayListPlayArea, PlayListTable } from '@/components';
import { useLayouts } from '@/hooks';
import { useBreakPoint } from '@/utils';
import { Box } from '@mui/material';

export const PlayList = () => {
	const { isLeftDetail } = useLayouts();
	const breakpoint = useBreakPoint();
	const isColumn: boolean =
		breakpoint === 'xs' || (breakpoint === 'sm' && isLeftDetail);

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexDirection="column"
			gap="20px"
			width="100%"
		>
			<PlayListHeader isColumn={isColumn} />
			<PlayListPlayArea />
			<PlayListTable />
		</Box>
	);
};
