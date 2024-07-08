import { ReactNode } from 'react';

export interface UserRoutingProps {
	currentContent: ReactNode;
	handleRouting: ({ contentType, contentId }: HandleRoutingProps) => void;
}

export interface HandleRoutingProps {
	contentType: 'userSavedTrack' | 'playList' | 'artist';
	contentId: string;
}
