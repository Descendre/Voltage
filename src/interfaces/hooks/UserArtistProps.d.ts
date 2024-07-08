import { SpotifyUserArtistResponse } from '../api';
import { SpotifyTokenProps } from '../cookie';

export interface UseArtistProps {
	userArtist: SpotifyUserArtistResponse | null;
	setUserArtist: React.Dispatch<
		React.SetStateAction<SpotifyUserArtistResponse | null>
	>;
	handleSetArtistList: (spotifyToken: SpotifyTokenProps) => Promise<void>;
}
