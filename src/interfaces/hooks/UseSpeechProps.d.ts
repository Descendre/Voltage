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
	handleStartRecognition: () => void;
	handleStopRecognition: () => void;
}
