export interface UserRoutingProps {
	handleRouting: ({ contentType, contentId }: HandleRoutingProps) => void;
}

export interface HandleRoutingProps {
	contentType: 'userSavedTrack' | 'playList' | 'artist';
	contentId: string;
}
