import { PlaylistItem, SpotifyTrackProps } from '../api';

export interface UseMusicProps {
	currentTrack: HTMLAudioElement | null;
	setCurrentTrack: React.Dispatch<
		React.SetStateAction<HTMLAudioElement | null>
	>;
	playingContents: SpotifyTrackProps | PlaylistItem | null;
	setPlayingContents: React.Dispatch<
		React.SetStateAction<SpotifyTrackProps | PlaylistItem | null>
	>;
	handlePlayTrack: ({ url, content }: HandlePlayTrackProps) => Promise<void>;
	isPause: boolean | null;
	setIsPause: React.Dispatch<React.SetStateAction<boolean | null>>;
}

export interface HandlePlayTrackProps {
	url: string | undefined | null;
	content: SpotifyTrackProps | PlaylistItem | null;
}
