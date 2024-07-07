import { UseArtistProps } from './UserArtistProps.d';
import { PlaylistItem } from '../api';
import { selectedContentsProps } from '../provider';

export interface UseSelectedContentProps {
	selectedContents: selectedContentsProps;
	setSelectedContents: React.Dispatch<
		React.SetStateAction<selectedContentsProps>
	>;
	handleSelectContent: (prev: handleSelectContentProps) => void;
	handleContentClick: (
		name: 'playList' | 'artist',
		item: PlaylistItem | SpotifyArtistProps
	) => void;
}

export interface handleSelectContentProps {
	name: 'playList' | 'artist';
	content: PlaylistItem | SpotifyArtistItemProps;
}
