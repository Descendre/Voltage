'use client';
import { useBreakPoint, useLayouts } from '@/hooks';
import { Close } from '@mui/icons-material';
import { Grow, IconButton, Modal, Paper } from '@mui/material';
import React, { useEffect } from 'react';

export const PlayListModal = () => {
	const { isPlayListModal, setIsPlayListModal } = useLayouts();
	const breakpoint = useBreakPoint();

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === '/') {
				setIsPlayListModal(true);
			}
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return (
		<Modal
			open={isPlayListModal}
			onClose={() => setIsPlayListModal(false)}
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'start',
			}}
		>
			<Grow in={isPlayListModal} timeout={300}>
				<Paper
					elevation={4}
					sx={{
						position: 'relative',
						width: ['xs', 'sm'].includes(breakpoint) ? '100vw' : '800px',
						height: ['xs', 'sm'].includes(breakpoint)
							? '100vh'
							: 'calc(100vh - 90px)',
						maxHeight: '800px',
						marginTop: ['xs', 'sm'].includes(breakpoint) ? '0px' : '60px',
						borderRadius: '10px',
					}}
				>
					<IconButton sx={{ position: 'absolute', top: '2%', right: '2%' }}>
						<Close onClick={() => setIsPlayListModal(false)} />
					</IconButton>
				</Paper>
			</Grow>
		</Modal>
	);
};
