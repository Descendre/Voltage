export interface UserRoutingProps {
	currentContent:
		| 'userSavedTrack'
		| 'playList'
		| 'artist'
		| 'AI'
		| 'search'
		| null;
	handleLeftBarRouting: ({ contentType }: HandleLeftBarRoutingProps) => void;
	handleLeftDetailRouting: ({
		contentType,
		contentId,
	}: HandleLeftDetailRoutingProps) => void;
}

export interface HandleLeftBarRoutingProps {
	contentType?: 'userSavedTrack' | 'playList' | 'artist' | 'AI' | 'search';
}

export interface HandleLeftDetailRoutingProps {
	contentType: 'userSavedTrack' | 'playList' | 'artist' | 'AI' | 'search';
	contentId: string;
}
