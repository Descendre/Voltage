import { UseArtistProps } from './UserArtistProps.d';
import { PlaylistItem, SpotifyArtistProps, SpotifyTrackProps } from '../api';
import { selectedContentsProps } from '../provider';

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
	name: 'userSavedTrack' | 'playList' | 'artist';
	content: SpotifyTrackProps | PlaylistItem | SpotifyArtistProps | null;
}
