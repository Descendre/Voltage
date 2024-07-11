'use client';
import { useContext, useState } from 'react';
import { Context } from '@/provider';
import {
	ExtendedWindow,
	SpeechRecognition,
	SpeechRecognitionEvent,
	UseSpeechProps,
} from '@/interfaces';
import { axiosFetch } from '@/libs';

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

	const handleStartRecognition = async (): Promise<void> => {
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

		recognition.onresult = async (event: SpeechRecognitionEvent) => {
			const speechResult = event.results[0][0]?.transcript || '';
			const response = await axiosFetch.get<string>(
				`/api/playList/speech/${speechResult}`
			);
			console.log('答えだ: ', response);
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
