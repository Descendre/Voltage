export interface UsePlayListProps {
	userPlayList: SpotifyUserPlaylistResponse | null;
	setUserPlayList: React.Dispatch<
		React.SetStateAction<SpotifyUserPlaylistResponse | null>
	>;
}
