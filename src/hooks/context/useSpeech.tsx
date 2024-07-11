'use client';
import { useContext, useState } from 'react';
import { Context } from '@/provider';
import {
	ExtendedWindow,
	SpeechRecognition,
	SpeechRecognitionEvent,
	UseSpeechProps,
} from '@/interfaces';

export const useSpeech = (): UseSpeechProps => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const [recognition, setRecognition] = useState<SpeechRecognition | null>(
		null
	);
	const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

	const { transcript, setTranscript, emotion, setEmotion } = context;

	const handleStartRecognition = (): void => {
		const SpeechRecognition =
			(window as ExtendedWindow).SpeechRecognition ||
			(window as ExtendedWindow).webkitSpeechRecognition;
		if (!SpeechRecognition) {
			console.error('Speech recognition not supported');
			return;
		}

		const recognition = new SpeechRecognition();
		recognition.lang = 'ja-JP';
		recognition.interimResults = false;
		recognition.maxAlternatives = 1;

		recognition.onresult = (event: SpeechRecognitionEvent) => {
			const speechResult = event.results[0][0]?.transcript || '';
			setTranscript(speechResult);
		};

		recognition.onaudiostart = () => {
			setIsSpeaking(true);
		};

		recognition.onaudioend = () => {
			setIsSpeaking(false);
		};

		setRecognition(recognition);
		recognition.start();
	};

	const handleStopRecognition = (): void => {
		if (recognition) {
			recognition.abort();
		}
	};

	return {
		recognition,
		setRecognition,
		isSpeaking,
		setIsSpeaking,
		transcript,
		setTranscript,
		emotion,
		setEmotion,
		handleStartRecognition,
		handleStopRecognition,
	};
};
