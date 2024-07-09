'use client';
import { useLayouts } from '@/hooks';
import { useBreakPoint, usePalette } from '@/utils';
import { Grow, Modal, Paper } from '@mui/material';
import React from 'react';
import { SettingModalHeader } from '../atoms';

export const SettingModal = () => {
	const { isSettingModal, setIsSettingModal } = useLayouts();
	const breakpoint = useBreakPoint();
	const palette = usePalette();

	return (
		<Modal
			open={isSettingModal}
			onClose={() => setIsSettingModal(false)}
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'start',
			}}
		>
			<Grow in={isSettingModal} timeout={200}>
				<Paper
					elevation={10}
					sx={{
						position: 'relative',
						backgroundColor: palette.layout.secondary,
						width: ['xs', 'sm'].includes(breakpoint) ? '100vw' : '800px',
						height: ['xs', 'sm'].includes(breakpoint)
							? '100vh'
							: 'calc(100vh - 90px)',
						maxHeight: '800px',
						marginTop: ['xs', 'sm'].includes(breakpoint) ? '0px' : '60px',
						borderRadius: ['xs', 'sm'].includes(breakpoint) ? '0px' : '10px',
						overflow: 'hidden',
					}}
				>
					<SettingModalHeader />
				</Paper>
			</Grow>
		</Modal>
	);
};
