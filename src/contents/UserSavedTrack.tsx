'use client';
import { TrackHeader } from '@/components';
import { useLayouts } from '@/hooks';
import { useBreakPoint } from '@/utils';
import { Box } from '@mui/material';

export const UserSavedTrack = () => {
	const { isLeftDetail } = useLayouts();
	const breakpoint = useBreakPoint();
	console.log(isLeftDetail);
	const isColumn: boolean =
		breakpoint === 'xs' || (breakpoint === 'sm' && isLeftDetail);

	return (
		<Box width="100%">
			<TrackHeader isColumn={isColumn} />
		</Box>
	);
};
