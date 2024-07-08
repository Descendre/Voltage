import { ReactNode } from 'react';

export interface UserRoutingProps {
	currentContent: ReactNode;
	handleLeftBarRouting: ({ contentType }: HandleLeftBarRoutingProps) => void;
	handleLeftDetailRouting: ({
		contentType,
		contentId,
	}: HandleLeftDetailRoutingProps) => void;
}

export interface HandleLeftBarRoutingProps {
	contentType?: 'userSavedTrack' | 'playList' | 'artist';
}

export interface HandleLeftDetailRoutingProps {
	contentType: 'userSavedTrack' | 'playList' | 'artist';
	contentId: string;
}
