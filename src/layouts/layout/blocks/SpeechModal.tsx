'use client';
import { useLayouts } from '@/hooks';
import { useBreakPoint, usePalette } from '@/utils';
import { Grow, Modal, Paper } from '@mui/material';
import React, { useEffect } from 'react';
import { SpeechModalBody, SpeechModalHeader } from '../atoms';

export const SpeechModal = () => {
	const { isSpeechModal, setIsSpeechModal } = useLayouts();
	const breakpoint = useBreakPoint();
	const palette = usePalette();

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === '/') {
				setIsSpeechModal(true);
			}
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return (
		<Modal
			open={isSpeechModal}
			onClose={() => setIsSpeechModal(false)}
			sx={{
				zIndex: 150,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'start',
			}}
		>
			<Grow in={isSpeechModal} timeout={200}>
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
					<SpeechModalHeader />
					<SpeechModalBody isSpeechModal={isSpeechModal} />
				</Paper>
			</Grow>
		</Modal>
	);
};
