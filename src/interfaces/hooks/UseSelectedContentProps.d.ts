import { PlaylistItem } from '../api';
import { selectedContentsProps } from '../provider';

export interface UseSelectedContentProps {
	selectedContents: selectedContentsProps;
	setSelectedContents: React.Dispatch<
		React.SetStateAction<selectedContentsProps>
	>;
	handleSelectContent: (prev: handleSelectContentProps) => void;
}

export interface handleSelectContentProps {
	name: 'playList';
	content: PlaylistItem;
}
