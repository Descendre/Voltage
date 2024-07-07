import { SpotifyUserSavedTrackResponse } from '../api';

export interface UseTrackProps {
	userSavedTrack: SpotifyUserSavedTrackResponse | null;
	setUserSavedTrack: React.Dispatch<
		React.SetStateAction<SpotifyUserSavedTrackResponse | null>
	>;
}
