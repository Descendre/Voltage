import { SpotifyUserPlayListResponse } from '../api';
import { SpotifyTokenProps } from '../cookie';

export interface UsePlayListProps {
	userPlayList: SpotifyUserPlayListResponse | null;
	setUserPlayList: React.Dispatch<
		React.SetStateAction<SpotifyUserPlaylistResponse | null>
	>;
	handleSetUserPlayList: (spotifyToken: SpotifyTokenProps) => Promise<void>;
}
