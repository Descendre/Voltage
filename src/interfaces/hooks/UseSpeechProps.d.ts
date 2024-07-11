export interface UseSpeechProps {
	recognition: SpeechRecognition | null;
	setRecognition: React.Dispatch<
		React.SetStateAction<SpeechRecognition | null>
	>;
	isSpeaking: boolean;
	setIsSpeaking: React.Dispatch<React.SetStateAction<boolean>>;
	transcript: string;
	setTranscript: React.Dispatch<React.SetStateAction<string>>;
	emotion: string;
	setEmotion: React.Dispatch<React.SetStateAction<string>>;
	handleStartRecognition: () => Promise<void>;
	handleStopRecognition: () => void;
}

export interface EmotionResponese {
	text: string;
	voltage: number;
	classification: string;
}

export interface HandleGenerateEmotionalPlayListProps {
	trackEnergy: {
		target_energy: number;
		target_valence: number;
	};
	offset: number;
	limit: number;
}

export interface HandleGenerateEmotionalPlayList2Props {
	trackEnergy: {
		target_energy: number;
		target_valence: number;
	};
}
