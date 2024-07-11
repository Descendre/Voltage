'use client';
import { useSpeech } from '@/hooks';
import { useBreakPoint, usePalette } from '@/utils';
import { Mic } from '@mui/icons-material';
import { Box } from '@mui/material';
import React, { useEffect } from 'react';

export const SpeechModalBody = ({
	isSpeechModal,
}: {
	isSpeechModal: boolean;
}) => {
	const { handleStartRecognition, handleStopRecognition, isSpeaking } =
		useSpeech();
	const breakpoint = useBreakPoint();
	const palette = usePalette();

	useEffect(() => {
		if (isSpeechModal) {
			handleStartRecognition();
		} else {
			handleStopRecognition();
		}
	}, [isSpeechModal]);

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			width="100%"
			height="calc(100% - 50px)"
			sx={{
				overflowY: 'scroll',
			}}
		>
			<Mic
				sx={{
					width: ['xs'].includes(breakpoint) ? '150px' : '200px',
					height: ['xs'].includes(breakpoint) ? '150px' : '200px',
					color: isSpeaking ? palette.primary.main : palette.icon.main,
				}}
				onClick={() => handleStartRecognition()}
			/>
		</Box>
	);
};
