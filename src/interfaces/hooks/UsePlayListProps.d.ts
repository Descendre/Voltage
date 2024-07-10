import {
	PlaylistItem,
	PlaylistTracksResponse,
	SpotifyUserPlayListResponse,
} from '../api';
import { SpotifyTokenProps } from '../cookie';

export interface UsePlayListProps {
	userPlayList: SpotifyUserPlayListResponse | null;
	setUserPlayList: React.Dispatch<
		React.SetStateAction<SpotifyUserPlaylistResponse | null>
	>;
	playListTrack: PlaylistTracksResponse | null;
	setPlayListTrack: React.Dispatch<
		React.SetStateAction<PlaylistTracksResponse | null>
	>;
	playingPlayList: PlaylistItem | null;
	setPlayingPlayList: React.Dispatch<React.SetStateAction<PlaylitItem | null>>;
	lastPlayedPlayList: PlaylistTracksResponse | null;
	setLastPlayedPlayList: React.Dispatch<
		React.SetStateAction<PlaylistTracksResponse | null>
	>;
	handleSetUserPlayList: (spotifyToken: SpotifyTokenProps) => Promise<void>;
	handleSetUserPlayListTracks: (playListId: string) => Promise<void>;
}
