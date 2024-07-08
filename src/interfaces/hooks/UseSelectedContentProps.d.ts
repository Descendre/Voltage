import { searchParamProps } from './../provider/ContextProviderProps.d';
import { UseArtistProps } from './UserArtistProps.d';
import { PlaylistItem, SpotifyArtistProps, SpotifyTrackProps } from '../api';
import { searchParamProps, selectedContentsProps } from '../provider';

export interface UseSelectedContentProps {
	selectedContents: selectedContentsProps;
	setSelectedContents: React.Dispatch<
		React.SetStateAction<selectedContentsProps>
	>;
	handleSelectContent: (prev: handleSelectContentProps) => void;
	handleContentClick: (
		name: 'userSavedTrack' | 'playList' | 'artist',
		item: SpotifyTrackProps | PlaylistItem | SpotifyArtistProps
	) => void;
}

export interface handleSelectContentProps {
	name: 'userSavedTrack' | 'playList' | 'artist' | 'search';
	content:
		| SpotifyTrackProps
		| PlaylistItem
		| SpotifyArtistProps
		| searchParamProps
		| null;
}
