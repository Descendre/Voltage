import { SpotifyRecommendationResponse } from '../api';
import { EmotionLabels } from '../provider';

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
	processText: string;
	setProcessText: React.Dispatch<React.SetStateAction<string>>;
	recommendationPlaylists: SpotifyRecommendationResponse[][];
	setRecommendationPlaylists: React.Dispatch<
		React.SetStateAction<SpotifyRecommendationResponse[][]>
	>;
	speechText: string;
	setSpeechText: React.Dispatch<React.SetStateAction<string>>;
	voltage: EmotionLabels;
	setVoltage: React.Dispatch<React.SetStateAction<EmotionLabels>>;
}

export interface EmotionResponese {
	text: string;
	voltage: number;
	classification: EmotionLabels;
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
