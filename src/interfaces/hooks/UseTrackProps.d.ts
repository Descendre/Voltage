import { SpotifyUserSavedTrackResponse } from '../api';
import { SpotifyTokenProps } from '../cookie';

export interface UseTrackProps {
	userSavedTrack: SpotifyUserSavedTrackResponse | null;
	setUserSavedTrack: React.Dispatch<
		React.SetStateAction<SpotifyUserSavedTrackResponse | null>
	>;
	handleSetTrackList: (spotifyToken: SpotifyTokenProps) => Promise<void>;
	handleSetNextTrack: () => Promise<void>;
	handleSetPrevTrack: () => Promise<void>;
}
