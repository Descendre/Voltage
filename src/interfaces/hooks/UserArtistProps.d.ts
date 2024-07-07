import { SpotifyUserArtistResponse } from '../api';

export interface UseArtistProps {
	userArtist: SpotifyUserArtistResponse | null;
	setUserArtist: React.Dispatch<
		React.SetStateAction<SpotifyUserArtistResponse | null>
	>;
}
