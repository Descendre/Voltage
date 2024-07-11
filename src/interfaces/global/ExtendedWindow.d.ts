export interface SpeechRecognitionEvent {
	isTrusted?: boolean;
	results: {
		isFinal: boolean;
		[key: number]:
			| {
					transcript: string;
			  }
			| undefined;
	}[];
}

export interface SpeechRecognition extends EventTarget {
	grammars: string;
	lang: string;
	continuous: boolean;
	interimResults: boolean;
	maxAlternatives: number;
	serviceURI: string;

	onaudiostart?: () => void;
	onaudioend?: () => void;
	onend?: () => void;
	onerror?: (event: Event) => void;
	onnomatch?: () => void;
	onresult?: (event: SpeechRecognitionEvent) => void;
	onsoundstart?: () => void;
	onsoundend?: () => void;
	onspeechstart?: () => void;
	onspeechend?: () => void;
	onstart?: () => void;

	abort(): void;
	start(): void;
	stop(): void;
}

export interface ExtendedWindow extends Window {
	SpeechRecognition?: new () => SpeechRecognition;
	webkitSpeechRecognition?: new () => SpeechRecognition;
}
