'use client';
import { useSpeech } from '@/hooks';
import { useBreakPoint, usePalette } from '@/utils';
import { Mic } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { SpeechAnalyzeDisplay } from '../blocks';

export const SpeechModalBody = ({
	isSpeechModal,
}: {
	isSpeechModal: boolean;
}) => {
	const {
		handleStartRecognition,
		handleStopRecognition,
		isSpeaking,
		processText,
	} = useSpeech();
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
			position="relative"
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexDirection="column"
			gap="20px"
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
			<Typography variant="body1" sx={{ color: palette.text.secondary }}>
				{processText}
			</Typography>

			{isSpeechModal && <SpeechAnalyzeDisplay />}
		</Box>
	);
};
