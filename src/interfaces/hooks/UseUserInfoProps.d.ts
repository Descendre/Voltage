import { SpotifyTokenProps } from '../cookie';

export interface UseUserInfoProps {
	userInfo: SpotifyUserInfoResponse | null;
	setUserInfo: React.Dispatch<
		React.SetStateAction<SpotifyUserInfoResponse | null>
	>;
	spotifyToken: SpotifyTokenProps | null;
	setSpotifyToken: React.Dispatch<
		React.SetStateAction<SpotifyTokenProps | null>
	>;
	handleSetSpotifyToken: () => Promise<void>;
}
