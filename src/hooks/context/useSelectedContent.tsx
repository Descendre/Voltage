'use client';
import {
	PlaylistItem,
	SpotifyArtistProps,
	SpotifyTrackProps,
	UseSelectedContentProps,
	handleSelectContentProps,
} from '@/interfaces';
import { Context } from '@/provider';
import { useContext } from 'react';
import { useBreakPoint } from '@/utils';

export const useSelectedContent = (): UseSelectedContentProps => {
	const breakpoint = useBreakPoint();

	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const { setIsLeftDetail, setSelectedLeftContent } = context;

	const handleSelectContent = ({
		name,
		content,
	}: handleSelectContentProps): void => {
		setSelectedContents((prev) => ({ ...prev, [name]: content }));
	};

	const handleContentClick = (
		name: 'userSavedTrack' | 'playList' | 'artist',
		item: SpotifyTrackProps | PlaylistItem | SpotifyArtistProps
	): void => {
		if (selectedContents[name] && selectedContents[name]?.id === item.id) {
			handleSelectContent({ name, content: null });
		} else {
			handleSelectContent({ name, content: item });
		}
		if (['xs'].includes(breakpoint)) {
			setIsLeftDetail(false);
			setSelectedLeftContent(null);
		}
	};

	const { selectedContents, setSelectedContents } = context;

	return {
		selectedContents,
		setSelectedContents,
		handleSelectContent,
		handleContentClick,
	};
};
