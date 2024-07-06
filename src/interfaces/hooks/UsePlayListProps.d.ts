import { SpotifyUserPlayListResponse } from '../api';

export interface UsePlayListProps {
	userPlayList: SpotifyUserPlayListResponse | null;
	setUserPlayList: React.Dispatch<
		React.SetStateAction<SpotifyUserPlaylistResponse | null>
	>;
}
