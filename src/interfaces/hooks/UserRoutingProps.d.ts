export interface UserRoutingProps {
	currentContent: 'userSavedTrack' | 'playList' | 'artist' | 'search' | null;
	handleLeftBarRouting: ({ contentType }: HandleLeftBarRoutingProps) => void;
	handleLeftDetailRouting: ({
		contentType,
		contentId,
	}: HandleLeftDetailRoutingProps) => void;
}

export interface HandleLeftBarRoutingProps {
	contentType?: 'userSavedTrack' | 'playList' | 'artist' | 'search';
}

export interface HandleLeftDetailRoutingProps {
	contentType: 'userSavedTrack' | 'playList' | 'artist' | 'search';
	contentId: string;
}
