'use client';
import { useSpeech } from '@/hooks';
import { usePalette } from '@/utils';
import {
	SentimentDissatisfied,
	SentimentNeutral,
	SentimentSatisfied,
	SentimentVeryDissatisfied,
	SentimentVerySatisfied,
} from '@mui/icons-material';
import { Box, Chip, Fade } from '@mui/material';
import { useEffect } from 'react';

export const SpeechAnalyzeDisplay = () => {
	const { speechText, setSpeechText, voltage } = useSpeech();
	const palette = usePalette();

	useEffect(() => {
		return () => {
			setSpeechText('');
		};
	}, []);

	return (
		<Box
			sx={{
				position: 'absolute',
				bottom: 30,
				left: 0,
				right: 0,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
			}}
		>
			<Fade in={Boolean(speechText)} timeout={200}>
				<Chip
					variant="outlined"
					label={`${speechText} (${voltage})`}
					onDelete={() => {}}
					color={
						voltage === 'Super Negative'
							? 'info'
							: voltage === 'Negative'
								? 'info'
								: voltage === 'Neutral'
									? 'success'
									: voltage === 'Positive'
										? 'warning'
										: 'error'
					}
					deleteIcon={
						voltage === 'Super Negative' ? (
							<SentimentVeryDissatisfied />
						) : voltage === 'Negative' ? (
							<SentimentDissatisfied />
						) : voltage === 'Neutral' ? (
							<SentimentNeutral />
						) : voltage === 'Positive' ? (
							<SentimentSatisfied />
						) : (
							<SentimentVerySatisfied />
						)
					}
					sx={{
						width: '700px',
						maxWidth: '90vw',
						padding: '20px',
						fontSize: '1rem',
						color: palette.text.primary,
					}}
				/>
			</Fade>
		</Box>
	);
};
